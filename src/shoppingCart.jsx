
import react, { Component } from "react";
import Products from "./Products";

export default class ShoppingCart extends Component {
    state = {
        products: [
            { id: 1, name: "Product 1", price: 100, quantity: 0 },
            { id: 2, name: "Product 2", price: 200, quantity: 0 },
            { id: 3, name: "Product 3", price: 300, quantity: 0 },
            { id: 4, name: "Product 4", price: 400, quantity: 0 },
            { id: 5, name: "Product 5", price: 500, quantity: 0 },
            { id: 6, name: "Product 6", price: 600, quantity: 0 },
            { id: 7, name: "Product 7", price: 700, quantity: 0 },
            { id: 8, name: "Product 8", price: 800, quantity: 0 },
            { id: 9, name: "Product 9", price: 900, quantity: 0 },
            { id: 10, name: "Product 10", price: 1000, quantity: 0 },
        ],
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Shopping Cart</h1>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Products
                                key={prod.id}
                                product={prod}
                                onIncrement={this.handlerIncrement}
                                onDecrement={this.handlerDecrement}
                            >
                                <button
                                    className="btn btn-primary"                                    
                                >
                                    Add to Cart
                                </button>
                            </Products>    
                        );
                    })}
                </div>
            </div>
        );
    }
    handlerIncrement = (product, maxValue) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        if(products[index].quantity < maxValue){
            products[index].quantity ++;
        this.setState({ products: products });
        }
        
    };
    
    handlerDecrement = (product, minValue) => {
        
        const products = [...this.state.products];
        const index = products.indexOf(product);
        if (products[index].quantity > 0) {
            products[index].quantity --;
            this.setState({ products: products });
        }
        
    }
    
}






