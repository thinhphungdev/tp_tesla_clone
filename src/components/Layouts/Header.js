import React from 'react';

import classes from './Header.module.css';

import logo from '../../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';

const Header = ({openNavBar}) => {
    const cars = useSelector(state => state.cars);

    return (
        <div className={classes.container}>
            {/* logo */}
            <a href="/">
                <img src={logo} alt="Tesla logo"
                />
            </a>

            {/* menu */}
            <ul className={classes.menu}>
                {cars && cars.map((car, i) => <li key={i}><a href="/">{car}</a></li>)}
            </ul>

            {/* right BURGER menu */}
            <div className={classes['right-menu']}>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <MenuIcon style={{cursor: 'pointer'}} onClick={() => openNavBar()} className={classes['right-menu-icon']} />
            </div>
        </div>
    )
}

export default Header
