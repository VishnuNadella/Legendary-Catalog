import React from "react";
import { Link } from "react-router-dom"
import "./header.styles.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { gAuth } from "../../firebase/firebase.utils"


const Header = ({ currentUser }) => (
    <div className = "header">
        <Link to = "/" className = "logo-container">
            <Logo className = "logo" />
        </Link>
        <div className = "options">
            <Link className = "option" to = "/show">Show</Link>
            <Link className = "option" to = "/show">Contact</Link>
            {
                currentUser?(
                <div className = "option" onClick = {() => gAuth.signOut()} >
                    SIGN OUT
                </div>) : 
                (<Link className = "option" to = "/signin">
                    SIGN IN
                </Link>)
            }
        </div>
    </div>
)

export default Header