import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
function Cards() {
    return (
        <div className='cards' >
            <h1>Check out These EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src ='./images/img-6.jpg'
                        text ="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                        lable='Adventure'
                        path='/services'
                        />
                          <CardItems 
                        src ='./images/img-5.jpg'
                        text ="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                        lable='Adventure'
                        path='/services'
                        />
                         
                         
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                        src ='./images/img-7.jpg'
                        text ="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                        lable='Adventure'
                        path='/services'
                        />
                          <CardItems 
                        src ='./images/img-2.jpg'
                        text ="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                        lable='Adventure'
                        path='/services'
                        />
                         <CardItems 
                        src ='./images/img-4.jpg'
                        text ="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                        lable='Adventure'
                        path='/services'
                        />
                         
                         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
