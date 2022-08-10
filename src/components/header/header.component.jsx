import React from "react";
import { Link } from "react-router-dom"
import "./header.styles.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const Header = () => (
    <div className = "header">
        <Link to = "/" className = "logo-container">
            <Logo className = "logo" />
        </Link>
        <div className = "options">
            <Link className = "option" to = "/show">Show</Link>
            <Link className = "option" to = "/show">Contact</Link>
        </div>
    </div>
)

export default Header