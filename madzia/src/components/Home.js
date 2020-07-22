import React from 'react'

export default function Home() {
    return (
        <div id="home-section" class=" section display">
            <div class="home-content">
                <div class="home-title ">Magda</div>
                <div class="home-title surname">Majtyka</div>
            </div>
            <h3>[ Aktorka & Tancerka & Choreograf ]</h3>
            <div class="video-container">
                <video src="images/wwwma.mp4" autoPlay={true} loop={true} muted class="home-video"></video>
            </div>
            <div class="picture-holder"></div>
        </div>
    )
}
