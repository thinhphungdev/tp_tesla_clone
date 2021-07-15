import React from 'react';
import classes from './Section.module.css';

import DownImage from '../../images/down-arrow.svg';
import Fade from 'react-reveal/Fade';

// model image 
import modelS from '../../images/model-s.jpg';
import modelY from '../../images/model-y.jpg';
import model3 from '../../images/model-3.jpg';
import modelX from '../../images/model-x.jpg';
import solarPanel from '../../images/solar-panel.jpg';
import solarRoof from '../../images/solar-roof.jpg'
import accessories from '../../images/accessories.jpg'


const Section = ({ bgImage, leftBtn, rightBtn, title, description }) => {
    const url = '#';

    if (bgImage === 'modelS') bgImage = modelS
    else if (bgImage === 'modelY') bgImage = modelY
    else if (bgImage === 'model3') bgImage = model3
    else if (bgImage === 'modelX') bgImage = modelX
    else if (bgImage === 'solarPanel') bgImage = solarPanel
    else if (bgImage === 'solarRoof') bgImage = solarRoof
    else if (bgImage === 'accessories') bgImage = accessories

    return (
        <div
            style={{
                background: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className={classes['section-wrapper']}
        >
            <Fade left>
                <div className={classes['text-item']}>
                    <h1>{title}</h1>
                    {
                        !description && <p>Order Online for <a href={url} className={classes['underline-text']}>Touchless Delivery</a></p>
                    }
                    {
                        description && <p>{description}</p>
                    }
                </div>
            </Fade>

            <Fade bottom>
                <div className={classes.btnGroup}>
                    <div className={classes.btn}>{leftBtn}</div>
                    {
                        rightBtn &&
                        <div className={`${classes['right-btn']} ${classes.btn}`}>{rightBtn}</div>
                    }
                </div>
            </Fade>

            <img src={DownImage} alt="down arrow" className={classes['down-arrow']} />
        </div>
    )
}

export default Section
