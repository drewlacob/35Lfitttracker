import React, { Component } from 'react'
import './App.css';
import LoginPage from './pages/LoginPage.js'
import WorkoutPage from './pages/WorkoutPage.js';
import HistoryPage from './pages/HistoryPage.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import { Switch, Link, Redirect } from 'react-router-dom';
const axios = require('axios');
function renderMyData(){
axios.get('http://localhost:8888/info?user=2022')
          .then(function (response) {
    // handle success
             window.result = response.data;
             console.log("Just got it")
             console.log(window.result)
           })
           .catch(function (error) {
    // handle error
             console.log(error);
          })
          .then(function () {
        // always executed
         });
        }


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result : null,
      done : false
    };
  }

  componentDidMount() {

   this.renderMyData();
   console.log("running set");
   setTimeout(() => {
    this.setState((state) =>
    { 
     return {result : window.result, done : true}
     
   })
   }, 100);
}



renderMyData(){
  console.log("running comp")
  axios.get('http://localhost:8888/info?user=2022')
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/workouts" element={<WorkoutPage />} />
                <Route path="/history" element={this.state.done ? <HistoryPage /> : <div> LOADING </div>} />
              </Routes>
            </Router>
          </header> 
        </div>
      )
    }
  }
export default App;
