import React from "react";
import "./menu-item-styles.scss"
import { useNavigate } from "react-router-dom"
const MenuItem = ({ key, title, imageUrl, size, history, linkUrl, match }) => {
    let navigate = useNavigate();
    return (
    <div  className = {`${size} menu-item`} onClick = {() => navigate(`/${linkUrl}`)}>
            <div className = "background-image" style = {{
        backgroundImage: `url(${imageUrl})` 
        }} />
            <div key = {key} className = "content">
                <h1 className = "title"> { title.toUpperCase() } </h1>
                <span className = "subtitle">View All</span>
            </div>
        </div>
)}

export default MenuItem;