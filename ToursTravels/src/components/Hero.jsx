import React from 'react'
import SmartImage from './SmartImage';
import heroImage from '../assets/hero.jpg'
function Hero() {
  return (
    <div>
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-left">
                    <p className='sub-heading'>BEST DESTINATIONS AROUND THE WORLD</p>
                    <h1>Travek , enjoy and live a new and full life</h1>
                    <p style={{fontSize:"12px", textAlign:"justify"}}>Built Wicket longer admire do bartan vanity itself do in it. Prefered to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className="search">
                        {/* <input className='input' type="text" placeholder='Where do you want to go?'/> */}
                        <button className='btn-find'>Find Out More</button>
                        <i class="fa-solid fa-play"></i><span>Play Demo</span>
                    </div>
                </div>
                <div className="hero-right">
                    <div style={{width: "320px"}} className="cards">
                        <img src={heroImage} alt="Image not found" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
