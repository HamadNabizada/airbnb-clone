import React from 'react'

export default function Card(){
    return(
        <div className="card-wrapper">
            <div className="card-top">
                <div className="img-container">                
                    <div className="status">SOLD OUT</div
                ></div>
            </div>
            <div className="card-bottom">
                <span>
                    <div className="img-container"></div>
                    <p className="rating">5.0</p>
                    <p className="review-count">(6)</p>
                    <p className="bulletpoint">	&#8226;</p>
                    <p className="location">USA</p>
                </span>
                <h2 className="card-title">Life lessons with Katie Zaferes</h2>
                <h3 className="price"> <strong>From $136</strong>  / person</h3>
            </div>
        </div>
    )
}