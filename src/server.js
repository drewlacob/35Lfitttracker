import { firebaseConfig, getUserData } from './database.js'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import http from 'http';
import url from 'url';
import util from 'util';

//var http = require('http');
//var url = require('url');
//var util = require('util');

//var db_info = require('./database');
var app = initializeApp(firebaseConfig);
var db = getDatabase(app);

var server = http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end('Hello World\n');
    //console.log(request.url);

    if (request.url == '/index') {
      response.write('You are on the main page');
      response.end();
    }
    else if (request.url == '/login') {
      response.write('You are on the login page');
      response.end();
    }
    else if (request.url == '/info') {
      //response.write(getUserData(db, 1234));
      getUserData(db, 1234);
      //response.write(getUserData(db, 5678));
      getUserData(db, 5678);
      response.end();
    }

});

server.listen(8888, function() {
    console.log('start server');
});

// Print to Console
console.log('Server running at http://127.0.0.1:8888/');