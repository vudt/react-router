import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = { isLogged: false, email: '' }
        this.logout = this.logout.bind(this)
        let authentication = localStorage.getItem('authentication');
        if (authentication) {
            let data = JSON.parse(authentication)
            if (data.isLogged) {
                this.state = { isLogged: true, email: data.email }
            }
        }
    }

    logout() {
        localStorage.removeItem('authentication');
        this.setState({email: '', isLogged: false})
    }

    componentWillMount() {
        console.log(2);
    }

    render() {
        console.log(3);
        console.log(this.state);
        if (!this.state.isLogged) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Welcome, { this.state.email }</h2>
                <p><button className="btn btn-default" onClick={this.logout}>Logout</button></p>
            </div>
        );
    }
}

export default Account;