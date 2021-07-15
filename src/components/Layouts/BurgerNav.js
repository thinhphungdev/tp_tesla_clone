import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './BurgerNav.module.css';

import Slide from 'react-reveal/Slide';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector } from 'react-redux';

const Overlay =({closeNavBar}) => {
    return <div onClick={() => closeNavBar()} className={classes.overlay} />
}

const Sidebar = ({closeNavBar}) => {
    const cars = useSelector(state => state.cars);

    return <Slide right>
        <ul className={classes.sidebar}>
        
           <div onClick={() => closeNavBar()} className={classes['custom-closed']}>
                <CloseIcon />
           </div> 

            {cars && cars.map((car, i) => <li key={i}><a href="/">{car}</a></li>)}
            <li><a href="/">Existing Inventory</a></li>
            <li><a href="/">Used Inventory</a></li>
            <li><a href="/">Trade-In</a></li>
            <li><a href="/">Powerwall</a></li>
            <li><a href="/">Commercial Energy</a></li>
            <li><a href="/">Utilities</a></li>
            <li><a href="/">Charging</a></li>
            <li><a href="/">Find Us</a></li>
            <li><a href="/">Support</a></li>
        </ul>
    </Slide>
}

const BurgerNav = ({closeNavBar}) => {
    const overlayEl = document.getElementById('overlay-root');
    const sidebarEl = document.getElementById('sidebar-root');

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay closeNavBar={closeNavBar} />, overlayEl)}
            {ReactDOM.createPortal(<Sidebar closeNavBar={closeNavBar} />, sidebarEl)}
        </React.Fragment>
    )
}

export default BurgerNav
