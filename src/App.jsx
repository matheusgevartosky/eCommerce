import React, { Component } from "react";
import Customers from "./Customers";
import NavBar from "./navBar";
import ShoppingCart from "./shoppingCart";

export default class App extends Component {
    render() {
        return (
            <>
                <NavBar />

                <ShoppingCart />
            </>
        );
    }
}