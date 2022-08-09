import React from 'react';
import "./homepage.styles.scss";

export const HomePage = () => (
    <div className = "homepage">
        <div className = "directory-menu">
            <div className = "menu-item">
                <div className = "content">
                    <h1 className = "title">Cars</h1>
                    <span className = "subtitle">View All</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className = "title">Bikes</h1>
                    <span className = "subtitle">View All</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className = "title">Planes</h1>
                    <span className = "subtitle">View All</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className = "title">Boats</h1>
                    <span className = "subtitle">View All</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className = "title">Suits</h1>
                    <span className = "subtitle">View All</span>
                </div>
            </div>
        </div>
    </div>
)