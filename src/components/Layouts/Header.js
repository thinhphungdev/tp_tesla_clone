import React from 'react';

import classes from './Header.module.css';

import logo from '../../images/logo.svg';


const Header = () => {
    return (
        <div className={classes.container}>
            {/* logo */}
            <a href="/">
                <img src={logo} alt="Tesla logo"
                />
            </a>

            {/* menu */}
            <ul className={classes.menu}>
                <li><a href="/">Model S</a></li>
                <li><a href="/">Model 3</a></li>
                <li><a href="/">Model X</a></li>
                <li><a href="/">Model Y</a></li>
                <li><a href="/">Solar Roof</a></li>
                <li><a href="/">Solar Panels</a></li>
            </ul>

            {/* right BURGER menu */}
            <div className={classes['right-menu']}>
              <a href="/">Shop</a>
              <a href="/">Account</a>
              <a href="/">Menu</a>
            </div>
        </div>
    )
}

export default Header
