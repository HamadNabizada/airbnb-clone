import React from 'react'

export default function Card(props){
    return(
       
        <div className="card-wrapper">
            <div className="card-top">
                <div className="img-container" >                
                    <div className="status">SOLD OUT</div>
                </div>
            </div>
            <div className="card-bottom">
                <span>
                    <div className="img-container"/>
                    <p className="rating">{props.rating}</p>
                    <p className="review-count">({props.reviewCount})</p>
                    <p className="bulletpoint">	&#8226;</p>
                    <p className="location">{props.country}</p>
                </span>
                <h2 className="card-title">{props.title}</h2>
                <h3 className="price"> <strong>From ${props.price}</strong>  / person</h3>
            </div>
        </div>
    )
}