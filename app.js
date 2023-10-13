const express = require('express');
const path = require('path');


const app = express(); // express application is created
app.use(express.static(path.join(__dirname, 'html module')));
app.use(express.json());
app.use(express.urlencoded());
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'html module', 'login.html'));
})
app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname, 'html module', 'signin.html'));
})

app.listen(3000, () => {
    console.log('app is listening');
})

module.exports = app;