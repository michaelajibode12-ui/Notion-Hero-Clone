import React from 'react'
import  './Navbar.css'
import Notion from '../../assets/Notion.png'

const Navbar = () => {
  return (
   <nav className='nav'>
    <img src={Notion} className='img1' alt="" />
        <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Individuals</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
   </nav>

    
  )
}

export default Navbar