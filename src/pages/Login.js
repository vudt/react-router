import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actLogin } from '../actions';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            validate: this.prepare_data_validation(),
            isLogged: this.props.isLogged,
            email: this.props.email,
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        let authentication = localStorage.getItem('authentication');
        if (authentication) {
            let data = JSON.parse(authentication)
            if (data.isLogged) {
                this.state = { isLogged: true }
            }
        }
    }

    prepare_data_validation() {
        let data = [
            {
                isValid: true,
                resource: 'email',
                error_msg: "Email can't be blank"
            },
            {
                isValid: true,
                resource: 'password',
                error_msg: "Password can't be blank"
            }
        ];
        return data;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handle_Validate() {
        let { email, password } = this.state;
        let arr_validation = this.prepare_data_validation();
        let flag = true;
        if (!email) {
            arr_validation[0].isValid = false;
            flag = false;
        }
        if (!password) {
            arr_validation[1].isValid = false;
            flag = false;
        }
        this.setState({
            validate: arr_validation
        });
        return flag;
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({isLogged: nextProps.authentication.isLogged, email: nextProps.authentication.email})
    }

    handleSubmit(event) {
        event.preventDefault();
        const flag = this.handle_Validate();
        if (flag === false) { return false }
        let { email, password } = this.state;
        this.props.submit_form_login(email, password)
        // if (email === 'vudang@gmail.com' && password === '123456') {
        //     this.setState({ ...this.state, isLogged: true });
        //     localStorage.setItem('authentication', JSON.stringify({ email: email, isLogged: true }))
        // } else {
        //     alert("Email or Password is not valid! Please try by EMAIL: vudang@gmail.com and PASSWORD: 123456");
        // }
    }

    render() {
        console.log(this.state);
        console.log(this.props);
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
                            <input type="email" name="email" id="email" className={"form-control" + (this.state.validate[0].isValid === true ? '' : ' is-invalid')} onChange={this.handleChange} />
                            {this.state.validate[0].isValid === false &&
                                <div className="invalid-feedback">{this.state.validate[0].error_msg}</div>
                            }

                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" name="password" id="pwd" className={"form-control" + (this.state.validate[1].isValid === true ? '' : ' is-invalid')} onChange={this.handleChange} />
                            {this.state.validate[1].isValid === false &&
                                <div className="invalid-feedback">{this.state.validate[1].error_msg}</div>
                            }
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authentication: state.authentication }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submit_form_login: actLogin
    }, dispatch);
}

// let LoginPage = connect(mapStateToProps) (Login);

export default connect(mapStateToProps, mapDispatchToProps) (Login);