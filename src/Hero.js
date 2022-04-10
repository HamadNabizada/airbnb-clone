import React from 'react'
import pictureGrid from './pictureGrid.png'

export default function Hero(){
    return(
        <div className="hero-wrapper">
            <img src={pictureGrid} className="img-container"/>
            <div className="hero-text-container">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}