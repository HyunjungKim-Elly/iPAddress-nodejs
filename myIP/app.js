var express = require("express");
var app = express();
var http = require('http');
const request = require('request');
const time = require('date-utils')
var db = require("./db");
var userController = require("./user/userController");

//API url 
const key = "ec19d43b6d12e6f5659626865bc43c14"
const url = "http://api.ipstack.com/"

//to save data
var newDate = new Date();
let obj = {};
let ipAddress = "",
    currentLocation = "",
    currentTime = ""


// app.set('port', process.env.PORT || 8080)
app.listen(process.env.PORT || 5000, function () {
    console.log("Start, express server on port");
});

app.use(userController);
app.set("view engine", "ejs");
app.set("views", "./views")

//get IP adress
http.get({
    'host': 'api.ipify.org',
    'port': 80,
    'path': '/'
}, function (resp) {
    resp.on('data', function (ip) {
        ipAddress = ip;
        //get client information
        request.get({
            url: url + ipAddress + "?access_key=" + key

        }, function (err, res, body) {
            obj = JSON.parse(body)
            currentLocation = obj.country_name + " " + obj.region_name + " " + obj.city
            currentTime = newDate.toFormat('YYYY-MM-DD HH24:MI:SS')

            console.log(obj);
            console.log(currentLocation);
            console.log(currentTime)

        }, )
    });

});

//render the information to ejs
app.get('/', function (req, res) {
    console.log('index is loaded');

    res.render('main.ejs', {
        ip: ipAddress,
        location: currentLocation,
        time: currentTime
    })
})



module.exports = app;