import React, { Component } from "react";
import NavBar from "./pages/navBar";
import Customers from "./pages/Clientes";
import ShoppingCart from "./pages/shoppingCart"; 
import LoginScreen from "./pages/loginScreen"
import Dashboard from "./pages/dashbord";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import NoMatchPage from "./pages/noMatchPage";


export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <NavBar />
          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={LoginScreen} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/customers" exact component={Customers} />
              <Route path="/cart" exact component={ShoppingCart} />
              <Route path="*" component={NoMatchPage} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }