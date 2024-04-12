import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css"

const navbar = ({setShow}) => {
  return (
    <nav>
      <div className='nav_box'>
        <span className='my_shop' onClick={()=>setShow(true)} >My Shopping Book</span>
        <div className='cart'onClick={()=> setShow(false)} >
            <span>
                <FaShoppingCart/>
            </span>
            <span>0</span>
        </div>
      </div>
    </nav>
  )
}

export default navbar
