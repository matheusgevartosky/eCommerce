
import react, { Component } from "react";
import Products from "./Products";


export default class ShoppingCart extends Component {
    constructor(props) {
        console.log("constructor-shoppingCart");
        super(props);
        this.state = {
        products: [    
        ],
        };
    }
    

    render() {
        console.log("render-shoppingCart");
        return (
            <div className="container-fluid">
                <h1 className="text-center mt-4 mb-4">Nossos Produtos!</h1>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Products
                                key={prod.id}
                                product={prod}
                                onIncrement={this.handlerIncrement}
                                onDecrement={this.handlerDecrement}
                                onDelete={this.handlerDelete}
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

    componentDidMount(){
        const promise = fetch('http://localhost:4000/products', {method: 'GET'});
        promise.then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                products: data
            });
        });
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
        if (products[index].quantity > minValue) {
            products[index].quantity --;
            this.setState({ products: products });
        }
        
    }
    
    handlerDelete = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        if(window.confirm("Voce deseja realmente deletar este produto?")){
            products.splice(index, 1);
            this.setState({ products: products });
        }
    }
}






