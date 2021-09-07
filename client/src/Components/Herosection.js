import React from 'react'
import '../App.css'
import { Button} from './Button'
import './HeroSection.css'
function Herosection() {
    return (
        <div className='hero-container'>
            <img src="..\images\img-5.jpg"  />
            <h1>JESUS ALIVE</h1>
            <p>What Are you Waiting for</p>
        <div className="hero-btns">
            <Button
            className='btns'
            buttonStyle ='btn--outline'
            buttonSize='btn--large'
            >GET STARTED</Button>
             <Button
            className='btns'
            buttonStyle ='btn--primary'
            buttonSize='btn--large'
            >WATCH TRAILER <i class="fas fa-play-circle    "></i></Button>
        </div>
        </div>


    )
}

export default Herosection
