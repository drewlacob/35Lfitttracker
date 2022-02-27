import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage.js'
import WorkoutPage from './pages/WorkoutPage.js';
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/workouts" element={<WorkoutPage />} />
            </Routes>
          </Router>
        </header> 
      </div>
    )
  }
  
}

export default App;
