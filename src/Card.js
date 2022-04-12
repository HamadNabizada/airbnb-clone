import React from 'react'

export default function Card(props){
    let statusBadge;
    if(props.openSpots === 0){
        statusBadge = <div className="status">SOLD OUT</div>
    } 
    else if(props.location === 'Online'){
        statusBadge = <div className="status">ONLINE</div>
    }
    return(
       
        <div className="card-wrapper">
            <div className="card-top">
                <img src={`images/${props.coverImg}`} className="img-container" />                
                {statusBadge}
            </div>
            <div className="card-bottom">
                <span>
                    <div className="img-container"/>
                    <p className="rating">{props.stats.rating}</p>
                    <p className="review-count">({props.stats.reviewCount})</p>
                    <p className="bulletpoint">	&#8226;</p>
                    <p className="location">{props.location}</p>
                </span>
                <h2 className="card-title">{props.title}</h2>
                <h3 className="price"> <strong>From ${props.price}</strong>  / person</h3>
            </div>
        </div>
    )
}