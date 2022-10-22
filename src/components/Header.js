import React , { useState }from 'react';
import { Link } from "react-router-dom";
import IMG from '../images/logo-img.jpeg';
import './style-header.css';

function Header() {
    const [width, setwidth] = useState(false);
    const openNav = () => {
        setwidth("100%");
    };
    const closeNav = () => {
        setwidth("0%");
    }
    return (
            <div className='header'>
                <span className='pulse-1'></span>
                <span className='pulse-2'></span>
                <div className='app__logo' onClick={openNav}>
                <img
                src={IMG}
                className=''
                alt='personal logo'
                
                />
                </div>
                <div className='overlay' id='overlay' style={{width}}> 
                    <a 
                        href="javascript:void(0)" 
                        className="closebtn" 
                        onClick={closeNav}
                    >&times;</a>

                    <div className="overlay-content">
                        <Link to="/">Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/portfolio" >Portfolio</Link>
                        <Link to="/contact" >Contact</Link>
                    </div>
                </div>
            </div>
    )
}

export default Header