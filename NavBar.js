import React from 'react';
import react_logo from "/Users/suhaansridhar/Desktop/React/reactbeginning/src/Images/ReactLogo.svg";


const NavBar = () => {
  return (
    <div className='NavBar'>
        <div>
            <img src={react_logo} alt="react-logo" className='react_logo'/>
        </div>
        <div> 
            <h2>React</h2>
        </div>
        <div className='second_bar'>
            <p>Pricing</p>
            <p>About</p>
            <p>Contact us</p>
        </div>
    </div>
  )
}

export default NavBar