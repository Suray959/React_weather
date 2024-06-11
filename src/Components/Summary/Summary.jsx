import React from 'react'
import style from '../Summary/Summary.module.css'

function Summary() {
  return (
    <div className={style.body}>
        <div className={style.headline}>
            <h3>Summary</h3>
            <div className={style.paragraph}>
                <p>Summary</p>
                <p>Hourly</p>
                <p>More Details</p>
            </div>
        </div>
      
    </div>
  )
}

export default Summary
