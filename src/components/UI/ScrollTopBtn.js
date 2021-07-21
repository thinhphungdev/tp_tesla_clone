import React, {useState} from 'react';
import EjectIcon from '@material-ui/icons/Eject';
import classes from './ScrollTopBtn.module.css';

const ScrollToTopBtn = () => {
   const [visible, setVisible] = useState(false);

   const toggleVisible = () => {
       const scrolled = document.documentElement.scrollTop;

       if (scrolled > 300) {
           setVisible(true);
       } else if (scrolled <= 300) {
           setVisible(false)
       }
   }

   const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })  
   }

   window.addEventListener('scroll', toggleVisible)

   return (
       <div
        onClick={scrollToTop} 
        className={classes.scrollBtn}
        style={{display: visible ? 'inline' : 'none'}}
       >
            <EjectIcon style={{fontSize: '2.2rem'}} />
       </div>

   )
}

export default ScrollToTopBtn;