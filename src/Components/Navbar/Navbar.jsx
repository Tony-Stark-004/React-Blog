import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import topImage from '../../Assests/topImage.jpeg'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Menu = () => {
  return <>
            <li className="topListItems"><Link to='/' className='link'>Home</Link></li>
            <li className="topListItems"><Link to='/anime' className='link'>Anime</Link></li>
            <li className="topListItems"><Link to='/' className='link'>Technology</Link></li>
            <li className="topListItems"><Link to='/' className='link'>Hollywood</Link></li>
            <li className="topListItems"><Link to='/' className='link'>Fitness</Link></li>
            <li className="topListItems"><Link to='/' className='link'>Food</Link></li>

          </>
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
   <>
    <div className='top-heading'>
        <span className='top-heading-the'>The</span>
        <h1 className='top-heading-siren'>Siren</h1>
    </div>
    <div className='top'>
        <div className='top-left'>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-github"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='top-center'>
          <ul className="topList">
            <Menu />
          </ul>
        </div>
        <div className='top-right'>
          <img className='topImage' src={topImage} alt="" />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="top-menu">
            {
              toggleMenu?<RiCloseLine color='#000000' size={27} onClick={()=>setToggleMenu(false)}/>
                        :<RiMenu3Line color='#000000' size={27} onClick={()=>setToggleMenu(true)}/>
              
            }

            {
              toggleMenu && (
                <div className="top-menu-container scale-up-center">
                  <div className="top-menu-container-links">
                    <Menu />
                  </div>
                  <div className='top-right'>
                    <img className='topImage-media' src={topImage} alt="" />
                  </div>
                </div>
              )
            }
        </div>
      </div>
      <div className='top-empty'></div>
   </>
  )
}

export default Navbar