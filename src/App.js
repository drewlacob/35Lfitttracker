import React, { Component } from 'react'
import './App.css';
import LoginPage from './pages/LoginPage.js'
import WorkoutPage from './pages/WorkoutPage.js';
import HistoryPage from './pages/HistoryPage.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
window.result = ""
var UID = "";
let name = sessionStorage.getItem("user_name")
console.log("UID: ")
console.log(UID)
console.log("name: ")
console.log(name)
window.fromhist = 0;
//import { Switch, Link, Redirect } from 'react-router-dom';
const axios = require('axios');



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result : null,
      HistDone : false,
      WorkDone : false
    };
  }

  componentDidMount() {

   this.renderHistData();
   this.renderWorkoutData();
   console.log("running set");
   setTimeout(() => {
    this.setState((state) =>
    { 
     return {result : window.result, HistDone : true, WorkDone : true}
     
   })
   }, 100);
}

renderWorkoutData(){
  console.log("running comp")
  var userID = sessionStorage.getItem("user_id")
  var date = window.current_date;
  var workoutName = window.current_workout;
  var httpstring = 'http://localhost:8888/history?user=' + userID +
                      '&date=' + date + '&workname=' + workoutName;
      axios.get(httpstring)
      .then(function (response) {
      // handle success
          // TODO: clean up this code, one of these methods should work (need to decide if we enter for loop if response is "error")
        if (response.data === "Error\n") {
          return;
        }
        window.WorkoutData = response.data;
          })
        }
        

renderHistData(){
  console.log("running comp")
  UID = sessionStorage.getItem("user_id")
  axios.get('http://localhost:8888/allHist?user=' + UID)
            .then(function (response) {
      // handle success
               window.result = response.data;
               console.log("Just got it");
               console.log(window.result);
             })
             .catch(function (error) {
      // handle error
               console.log(error);
            })
            .then(function () {
          // always executed
           });
          }

    render() {
      console.log("render ran")
      console.log(window.result)
      return (
        <div className="App">
          <header className="App-header">
            <Router>
              <Routes>
                <Route path="" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/workouts" element={this.state.WorkDone ? <WorkoutPage /> : <div>LOADING</div>} />
                <Route path="/history" element={this.state.HistDone ? <HistoryPage /> : <div> LOADING </div>} />
              </Routes>
            </Router>
          </header> 
        </div>
      )
    }
  }
export default App;
