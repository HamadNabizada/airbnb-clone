import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'

export default function App(){
    return(
        <div className="app-container">
            <Header />
            <Hero />
            <Card
                img="katie.png"
                rating="5.0"
                reviewCount="6"
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price="136"
            />
        </div>
    )
}