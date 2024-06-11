import React from 'react'
import style from '../Header/Header.module.css'

function Header() {
  return (
    <div className={style.body}>
        <div className={style.search}  >
        <input type="search"  placeholder='Search for location' />
        </div>
        <div className={style.image}>
            <img  className={style.bell}    src="https://cdn-icons-png.flaticon.com/128/10156/10156084.png"  />
            <img className={style.person}  src="https://st.depositphotos.com/1003989/2623/i/950/depositphotos_26231791-stock-photo-young-woman-white-background-portrait.jpg"  />
        </div>
    </div>
  )
}

export default Header
