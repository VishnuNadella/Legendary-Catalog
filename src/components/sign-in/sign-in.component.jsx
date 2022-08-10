import React, { Component } from "react"

import "./sign-in.styles.scss"

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <input name = "email" type="email" onChange = { this.handleChange } value = { this.state.email } placeholder = "Enter email" required/>
                    <input name = "password" type="password" onChange = { this.handleChange } placeholder = "Enter password" requiredvalue = { this.state.password }  required/>
                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
}

export default SignIn