import React from 'react'
import style from '../Forecast/Forecast.module.css'

function Forecast() {
  return (
    <div className={style.body}>
       <div className={style.headline}>
        <h3>Forecast</h3>
        <div className={style.h4}>
        <h4>7 days</h4>
        <h4>10 days</h4>
        </div>
            
       </div>

       <div>
        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/3026/3026395.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>24 Jul,Thu</span>

        </div>

        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>25 Jul,Fri</span>

        </div>

        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/8841/8841333.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>26 Jul,Sun</span>

        </div>
        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/3026/3026395.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>25 Jul,Sat</span>

        </div>
        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/3026/3026395.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>27 Jul,Mon</span>

        </div>
        <div className={style.time}>
            <img src="https://cdn-icons-png.flaticon.com/128/12607/12607703.png"  />
            <p>24 <sup>&deg;</sup>/22 <sup>&deg;</sup></p>
            <span>28 Jul,Tue</span>

        </div>
        
       </div>
    </div>
  )
}

export default Forecast
