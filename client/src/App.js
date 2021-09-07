import React from "react";
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import Signup from './Components/pages/Signup'
import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
