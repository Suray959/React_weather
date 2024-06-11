import React from 'react'
import style  from '../City/City.module.css'

function City() {
  return (
    <div className={style.body}>
      <div className={style.headline}>
        <h3>Popular Cities</h3>
        <h5>View More</h5>
      </div>

<div className={style.city}>
        <div className={style.name}>
        <img src="https://cdn-icons-png.flaticon.com/128/16663/16663709.png"  />
        <p>Delhi</p>
        <h4 >Partly Cloudy</h4>
        </div>
      </div>

<div className={style.city}>
        <div className={style.name}>
        <img src="https://cdn-icons-png.flaticon.com/128/9073/9073867.png"  />
        <p>Mumbai</p>
        <h4>Drizzle Rain</h4>
        </div>
   
      </div>

<div className={style.city}>
        <div className={style.name}>
        <img src="https://cdn-icons-png.flaticon.com/128/6717/6717835.png"  />
        <p>Hyderabad</p>
        <h4>Heavy Rain</h4>
        </div>

      </div>

<div className={style.city}>
        <div className={style.name}>
        <img src="https://cdn-icons-png.flaticon.com/128/12448/12448034.png"  />
        <p>Bangalore</p>
        <h4> Light Thunders</h4>
        </div>
      </div>


<div className={style.city}>
        <div className={style.name}>
        <img src="https://cdn-icons-png.flaticon.com/128/3222/3222672.png"  />
        <p>Kolkata</p>
        <h4> Mostly Sunny</h4>
        </div>
      </div>
    </div>
  )
}

export default City
