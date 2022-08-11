import React, { Component } from "react"
import FormInput from "../form-input/form-input.component"
import "./sign-in.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
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
                    <FormInput name = "email" type="email" label = "EMAIL" handleChange = { this.handleChange } value = { this.state.email }  required/>
                    <FormInput name = "password" type ="password" label = "PASSWORD" value = { this.state.password } handleChange = { this.handleChange }  required />
                    <CustomButton type = "submit" >Sign In</CustomButton>
                    {/* <input type="submit" value = "Submit Form" /> */}
                </form>
            </div>
        )
    }
}

export default SignIn