import './App.css';
import * as React from 'react';
import LoginPage from './pages/LoginPage.js'
import WorkoutPage from './pages/WorkoutPage.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WorkoutPage></WorkoutPage>
      </header>
    </div>
  );
}

export default App;
