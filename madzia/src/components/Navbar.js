import React from 'react'

export default function Navbar() {
    return (
        <nav class="nav">
            <div class="nav-center">
                <div class="button-container">
                    <button class="toggle-button">
                        <div class="toggle-button-line"></div>
                        <div class="toggle-button-line"></div>
                        <div class="toggle-button-line"></div>
                    </button>
                </div>
                <div class="menu-holder">
                    <ul>
                        <li id="home-button" class="red-active">
                            home
                        </li>
                        <li id="demo-button">
                            demo
                        </li>
                        <li id="gallery-button">
                            galeria
                        </li>
                        <li id="biography-button">
                            biografia
                        </li>
                        <li id="portfolio-button">
                            portfolio
                        </li>
                        <li id="contact-button">
                            kontakt
                        </li>
                    </ul>
                </div>
                <div class="social-holder">
                    <a href="https://www.facebook.com/magda.majtyka.18" target="_blank"><div class="facebook"></div></a>
                    <a href="https://www.instagram.com/majtykamagda/?hl=pl" target="_blank"><div class="instagram"></div></a>
                </div>
            </div>
        </nav>
    )
}
