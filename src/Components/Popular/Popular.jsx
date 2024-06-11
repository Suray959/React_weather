import React from 'react'
import style from "../Popular/Popular.module.css"
import Header from '../Header/Header'
import Current from '../Current/Current'
import Forecast from '../Forecast/Forecast'
import Map from '../Map/Map'
import City from '../City/City'
import Summary from '../Summary/Summary'

function Popular() {
  return (
    <div className={style.body}>
     <Header/>
     <Current/>
     <Forecast/> 
     <Map/>
     <City/>
     <Summary/>
    </div>
  )
}

export default Popular
