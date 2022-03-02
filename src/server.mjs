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
      const userRef = ref(db, 'users/' + params.user);
      onValue(userRef, (snapshot) => {
        //console.log(snapshot.val());
        data = snapshot.val();
        if (data != null)
          chunk = data.username + ' ' + data.email + '\n';
        else
          chunk = 'Error\n';
        response.write(chunk);
        response.end();
      });
    }
    else if (pathname == '/history') {
      var data;
      var chunk = "";
      const histRef = ref(db, 'users/' + params.user + '/history/' + params.date + '/' + params.workname);
      onValue(histRef, (snapshot) => {
        //console.log(snapshot.val());
        data = snapshot.val();
        if (data != null) {
          for (var key in data) {
            var temp = key + ':' + data[key].rounds + ',' + data[key].sets + ',' + data[key].weight + '\n';
            chunk = chunk + temp;
          }
        }
        else {
          chunk = 'Error\n';
        }
        response.write(chunk);
        response.end();
      });
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
      var wname = params.workname;
      addFitRecord(db, uid, wname, date, params.exer, params.s, params.r, params.w);
      response.end('Finished');
    }

});

//Listen to the port localhost:8888
server.listen(8888, function() {
    console.log('start server');
});

// Print to Console
console.log('Server running at http://127.0.0.1:8888/');