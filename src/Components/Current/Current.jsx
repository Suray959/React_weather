import React from 'react'
import style from '../Current/Current.module.css'


function Current() {
  return (
    <div className={style.body}>
      <div className={style.head}>
         <h3>Current Weather</h3>
         <p>06:25 pm</p>
      </div>
      <div className={style.icon}> 
        <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png" />
        <div className={style.degree}>
        <h2>24<sup>&deg;C</sup></h2>
          <p>Heavy Rain</p>
        </div>
      </div>

  <div className={style.footer}>

  <div className={style.image}>
    <img src="https://cdn-icons-png.flaticon.com/128/4972/4972868.png" />
     <p>173</p>
    </div> 
 <div className={style.image}>
    <img src="https://cdn-icons-png.flaticon.com/128/16350/16350734.png" />
     <p>92 %</p>
    </div>  
 <div className={style.image}>
    <img src="https://cdn-icons-png.flaticon.com/128/7276/7276806.png" />
     <p>6 km/h</p>
    </div>
<div className={style.image}>
    <img src="https://cdn-icons-png.flaticon.com/128/5814/5814477.png" />
     <p>3</p>
    </div>
  </div>
    </div>
  )
}

export default Current
