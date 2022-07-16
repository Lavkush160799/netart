import React from 'react'
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div>
         <div className="logo-div">
        <img className="logo" src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Header