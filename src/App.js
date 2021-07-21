import React, {useState} from 'react';
import Header from './components/Layouts/Header.js';
import Home from './components/Layouts/Home.js';
import BurgerNav from './components/Layouts/BurgerNav.js';
import ScrollToTopBtn from './components/UI/ScrollTopBtn.js';

const App = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const openNavBar = () => {
        setShowNavBar(true)
    }

    const closeNavBar = () => {
        setShowNavBar(false)
    }

    return (
        <React.Fragment>
            {showNavBar && <BurgerNav closeNavBar={closeNavBar} />}
            <Header openNavBar={openNavBar} />
            <Home />
            <ScrollToTopBtn />
        </React.Fragment>

    )
}

export default App
