import React from 'react'

export default function Home() {
    return (
        <div id="home-section" className=" section display">
            <div className="home-content">
                <div className="home-title ">Magda</div>
                <div className="home-title surname">Majtyka</div>
            </div>
            <h3>[ Aktorka & Tancerka & Choreograf ]</h3>
            <div className="video-container">
                <video src="assets/wwwma.mp4" autoPlay={true} loop={true} muted className="home-video"></video>
            </div>
            <div className="picture-holder"></div>
        </div>
    )
}
