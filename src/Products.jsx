import React, { Components } from "react";

export default class Products extends React.Component {
    state={
        product: this.props.product,
    };
    render() {
        console.log(this.props)
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className=" text-muted"># {this.state.product.id}</div>
                        <h5 className="pt-5 border-top">{this.state.product.name}</h5>
                        <div >${this.state.product.price}</div>
                    </div>
                    <div className="card-footer ">
                        <div className="float-left">
                            <span className="badge">{this.props.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-succes" onClick ={() => {
                                    this.props.onIncrement(this.state.product);}}
                                    >+</button>
                                <button className="btn btn-outline-succes" onClick = {() => {
                                    this.props.onDecrement(this.state.product);}}
                                    >-</button>
                            </div>
                        </div>
                    <div className="float-right">{this.props.children}</div>
                </div>

            </div>
            </div>);
    }
}