import React from 'react'

export default function Gallery() {
    return (
        <div>
           <div id="gallery-section" className="section">
            <div className="gallery-wrapper">
                <div className="carousel-container">
                    <div className="left-button"></div>
                        <div className="carousel">
                            <ul className="track">
                                <li className="slide  current-slide">
                                    <img src="assets/i.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/j.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/g.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/h.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/c.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/d.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/e.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/k.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/f.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/a.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                                <li className="slide">
                                    <img src="assets/b.jpg" className="slide-image" alt="Madzia"/>
                                </li>
                            </ul>
                        </div>
                    <div className="right-button"></div>
                </div>
            </div>
        </div> 
        </div>
    )
}
