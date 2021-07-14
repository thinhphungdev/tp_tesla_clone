import React from 'react'
import classes from './Home.module.css';

import Section from './Section.js';

function Home() {
    return (
        <div className={classes['home__container']}>
            <Section
                bgImage="modelS"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                title="Model S"
            />

            <Section
                bgImage="modelY"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                title="Model Y"
            />

            <Section
                bgImage="model3"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                title="Model 3"
            />

            <Section
                bgImage="modelX"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                title="Model X"
            />

            <Section
                bgImage="solarPanel"
                leftBtn="order now"
                rightBtn="learn more"
                description="Lowest Cost Solar Panels in America"
                title="Solar Panels"
            />

            <Section
                bgImage="solarRoof"
                leftBtn="order now"
                rightBtn="learn more"
                description="Produce Clean Energy From Your Roof"
                title="Solar Roof"
            />

            <Section
                bgImage="accessories"
                leftBtn="shop now"
                title="Accessories"
            />
        </div>
    )
}

export default Home
