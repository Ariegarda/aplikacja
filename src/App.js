import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Homme from './components/Home'
import Abbout from './components/About'
import Ssearch from './components/Search'
import 'animate.css'

export default function BasicExample() {
  return (
    <Router>
      <div id="nawigacja">
         <div id="tytul"><h1>Moja Apka</h1></div>
        <ul id="navi">
          <li>
            <NavLink exact to="/" className="menu" activeClassName="menu-active"><p>Home</p></NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="menu" activeClassName="menu-active"><p>Youtube</p></NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard" className="menu" activeClassName="menu-active"><p>Zdjęcie Dnia</p></NavLink>
          </li>
        </ul>
        </div>
      
<div id="tresc">
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

        </div>
    </Router>
  );
}


function Home() {
  return (
    <Homme />
  );
}

function About() {
  return (
    <Abbout />
  );
}

function Dashboard() {
  return (
    <Ssearch />
  );
};

