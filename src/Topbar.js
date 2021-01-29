import React from 'react';
import classes from './Topbar.module.css';
const Topbar=()=>{
    return(
        <header>
        <nav className={classes.Topbar}>
        <img src="https://www.lankabangla.com/wp-content/uploads/2019/12/air-bringr-logo.jpg" alt="AirBringr Logo"/>
      </nav>
      </header>
    );
}

export default Topbar;