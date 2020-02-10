import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home.js';
import Course from './components/CourseStructure.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:coursename' component={Course}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
