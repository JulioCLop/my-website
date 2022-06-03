
import React from 'react';

import  classes from './FooterComponent.module.css';

 const FooterComponent = () => {

  return (
  <footer className={classes.footer}>
    <div className={classes['footer-inner-container']}>
        <p>Built by <span>Julio Lopez</span></p>
    </div>
  </footer>
  );
}

export default React.memo(FooterComponent);
