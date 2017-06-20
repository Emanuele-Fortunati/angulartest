const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url = 'mongodb://localhost:27017/angulartest',
    db;

MongoClient.connect(url, function(err, connectedDB) {
    db = connectedDB;
});

app.use(express.static(path.join(__dirname, '../frontend')))
app.use(bodyParser.json())




app.post('/', function (req, res) {

    db.collection('userdata').insertOne( {
        "name": req.body.name,
        "sex": req.body.sex,
        "age": req.body.age,
        "country": req.body.country,
        "dateCreated": +new Date()
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a user into the userdata collection.");

        res.send('OK');
    });
})



app.listen(8080, function () {
    console.log('App running on port 8080.')
})