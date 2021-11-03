import React, { Component } from "react";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        error: ""
        };
    }
    
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:4000/users?email=${this.state.username}&password=${this.state.password}`,
        { method: "GET" }
        );
        const data = await response.json();
        if (data.length > 0) {
            this.props.history.push("/dashboard");
            
        } else {
        this.setState({
            error: <span className="text-danger">Usuário ou senha inválidos</span>
        });
        }}
    ;
    
    render() {
        return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                <div className="card-body">
                    <h1 className="text-center pb-4 pt-3">
                    <span className="text-primary">
                        <i className="fas fa-lock" />
                    </span>
                    Login
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                    {this.state.error}
                    <div className="form-group">
                        <label htmlFor="username">Usuário</label>
                        <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    >
                        Entrar
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
)}}          

