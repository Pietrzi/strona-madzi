import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="button-container">
                    <button className="toggle-button">
                        <div className="toggle-button-line"></div>
                        <div className="toggle-button-line"></div>
                        <div className="toggle-button-line"></div>
                    </button>
                </div>
                <div className="menu-holder">
                    <ul>
                        <li id="home-button" className="red-active">
                            <NavLink exact to='/'>home</NavLink>
                        </li>
                        <li id="demo-button">
                            <NavLink to='/demo'>demo</NavLink>
                        </li>
                        <li id="gallery-button">
                            <NavLink to='/gallery'>galeria</NavLink>
                        </li>
                        <li id="biography-button">
                            <NavLink to='/biography'>biografia</NavLink>
                        </li>
                        <li id="portfolio-button">
                            <NavLink to='/portfolio'>portfolio</NavLink>
                        </li>
                        <li id="contact-button">
                            <NavLink to='/contact'>kontakt</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-holder">
                    <a href="https://www.facebook.com/magda.majtyka.18" target="_blank"><div className="facebook"></div></a>
                    <a href="https://www.instagram.com/majtykamagda/?hl=pl" target="_blank"><div className="instagram"></div></a>
                </div>
            </div>
        </nav>
    )
}
