import React, { Component } from "react";

export default class Customers extends Component {
    state={
        appTitle: "Customers", 
        customersCount: 5,
        customers:[
            {id:1, name:"John", phone: null, adress: {city:"São Paulo"}, photo: "https://picsum.photos/61/50"},
            {id:2, name:"Peter", phone:"(47) 9 9999-9999",adress: {city:"São Paulo"}, photo: "https://picsum.photos/62/50"},
            {id:3, name:"Mary", phone:"(47) 9 9999-9999", adress: {city:"São Paulo"}, photo: "https://picsum.photos/63/50"},
            {id:4, name:"Sara", phone:"(47) 9 9999-9999", adress: {city:"São Paulo"}, photo: "https://picsum.photos/64/50"},
            {id:5, name:"Bob", phone: null, adress: {city:"São Paulo"}, photo: "https://picsum.photos/65/50"},
            {id:6, name:"John", phone:"(47) 9 9999-9999", adress: {city:"São Paulo"}, photo: "https://picsum.photos/66/50"},    
            {id:7, name:"Peter", phone: null, adress: {city:"São Paulo"},  photo: "https://picsum.photos/67/50"},
            {id:8, name:"Mary", phone:"(47) 9 9999-9999", adress: {city:"São Paulo"},  photo: "https://picsum.photos/68/50"}
        ]
    };

    render(){
        return(
            <div >
            <h4 className=" "> 
            { this.state.appTitle }
                <span className="badge badge-secondary m-2">{ this.state.customersCount }</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCostumerRow()}
                    </tbody>
                </table>
            </div>
        );
    }
    
    onRefreshClick = () =>{
        this.setState({customersCount: this.state.customersCount + 1});
    }

    getPhoneToRender = (phone) =>{
        if(phone){
            return phone;
        }else{
            return <span className="bg-warning p-1 texte-center">Sem número cadastrado</span>;
        }
    }

    getCostumerRow = () =>{
        return(this.state.customers.map((customer, index) => (
            <tr key={customer.id}>
                
                <td>{customer.id}</td>
                <td><img src={customer.photo} alt="customer "/>
                <div>
                    <button className="bnt bnt-sm btn-secondary" onClick= {() =>
                    {this.onChangePictureClick(customer, index)}}
                    >Mudar Foto!</button>
                </div>
                </td>
                <td >{customer.name}</td>
                <td>{this.getPhoneToRender(customer.phone)}</td>
                <td>{customer.adress.city}</td>             
            </tr>
        )))
    }

    onChangePictureClick = (customer, index) =>{
        let custormerArray = this.state.customers;
        custormerArray[index].photo = "https://picsum.photos/id/" + index + "/60/60";
        this.setState({customers : custormerArray});
    }

}
