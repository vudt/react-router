import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            validate: [],
            isLogged: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputValidation = this.handleInputValidation.bind(this)
        let authentication = localStorage.getItem('authentication');
        if (authentication) {
            let data = JSON.parse(authentication)
            if (data.isLogged) {
                this.state = { isLogged: true }
            }
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let { email, password } = this.state;
        if (email === 'tuanvu@advn.vn' && password === '123456') {
            this.setState({ ...this.state, isLogged: true });
            localStorage.setItem('authentication', JSON.stringify({ email: email, isLogged: true }))
        }
    }

    handleInputValidation(event) {
        const { isValid, errorMessage } = this.validateInput(event.target.value, event.target.name)
        const arr_errors = this.state.validate;
        arr_errors.push({
            name: event.target.name,
            isValid: isValid, 
            errorMessage: errorMessage
        });
        this.setState({
            validate: arr_errors
        })
    }

    validateInput(val, field_name) {
        if (!val) {
            return {
                isValid: false,
                errorMessage: `${field_name} can't be blank`
            }
        } else {
            return {
                isValid: true,
                errorMessage: ''
            }
        }
    }

    render() {
        console.log(this.state);
        if (this.state.isLogged) {
            return <Redirect to='/account' />
        }
        return (
            <div className="main-content">
                <h2>Login Form</h2>
                <div className="frmLogin">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" onBlur={this.handleInputValidation} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" name="password" id="pwd" className="form-control" onBlur={this.handleInputValidation} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;