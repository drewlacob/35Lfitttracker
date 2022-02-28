import { firebaseConfig, getUserData, getHistory, writeUserData, addFitRecord } from './database.mjs'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, child, get } from "firebase/database";
import http from 'http';
import url from 'url';
import util from 'util';

//var http = require('http');
//var url = require('url');
//var util = require('util');
//var db_info = require('./database');

//Initialize the database reference
var app = initializeApp(firebaseConfig);
var db = getDatabase(app);

var server = http.createServer( function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end('Hello World\n');
    //console.log(request.url);

    var req = url.parse(request.url, true)
    var pathname = req.pathname;
    var params = req.query;

    if (pathname == '/index') {
      response.write('You are on the main page');
      response.end();
    }
    else if (pathname == '/login') {
      response.write('You are on the login page');
      response.end();
    }
    else if (pathname == '/info') {
      var data;
      var chunk = '';
      data = getUserData(db, params.user);
      if (data != null)
        chunk = data.username + ' ' + data.email + '\n';
      else
        chunk = 'Error\n';
      response.write(chunk);
      response.end();
    }
    else if (pathname == '/history') {
      var data;
      var chunk = "";
      data = getHistory(db, params.user, params.date);
      if (data != null) {
        for (var key in data) 
          chunk = chunk + key + ':' + data[key] + '\n';
      }
      else {
        chunk = 'Error\n';
      }
      response.write(chunk);
      response.end();
    }
    else if (pathname == '/addUser') {
      var uid = params.user;
      var name = params.name;
      var email = params.email;
      writeUserData(db, uid, name, email);
      response.end('Finished');
    }
    else if (pathname == '/addRecord') {
      var uid = params.user;
      var date = params.date;
      var email = params.email;
      response.end('Try to add record');

    }

});

//Listen to the port localhost:8888
server.listen(8888, function() {
    console.log('start server');
});

// Print to Console
console.log('Server running at http://127.0.0.1:8888/');