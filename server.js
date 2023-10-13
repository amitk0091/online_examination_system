require('dotenv/config');
const { MongoClient } = require('mongodb');

// const url = process.env.MONGO_DB_URL;
// const port = process.env.port;
const url = "mongodb://localhost:27017/"
const app = require('./app')

app.post('/adduser', (req, res) => {
    // console.log(req.body);
    const client = new MongoClient(url);
    client.connect()
        .then(() => {
            console.log("mongo connection done");

            const db = client.db("online_examination_system");

            const collection = db.collection("user_pass");
            
            collection.insertOne(req.body)
                .then((result) => {
                    console.log('Successfully registered');
                    res.send(result);
                })
                .catch(error => console.log("Mongo error:", error))
                .finally(() => {
                    client.close();
                    console.log("Mongo connection closed");
                });
        })
        .catch(error => console.log("Mongo connection error:", error));
})

// app.listen(4000, () => {
//     console.log("requesting to app that deal with mongo server");
// })