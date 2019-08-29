import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';



function App(match) {
  return (
    <Router>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <hr></hr>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
