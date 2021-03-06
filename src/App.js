import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import data from './data.js'


export default function App(){
    let cardElements = data.map(cardObj =>{
        return (
            <Card 
                key={cardObj.id}
                {...cardObj}
            />
        )
    })
    return(
        <div className="app-container">
            <Header />
            <Hero />
            <div className="card-list">
                {cardElements}           
            </div>

        </div>
    )
}