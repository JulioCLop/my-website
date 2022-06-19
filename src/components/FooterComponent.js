
import React from 'react';

import  classes from './FooterComponent.module.css';

import Logo from '../assets/LoadingPage/newLogoNoBackround.png';
import {GrFacebookOption} from 'react-icons/gr';
import {ImLinkedin2} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';

 const FooterComponent = () => {

const getYear = () => {
  const date  = new Date();
 return  date.getFullYear()
  

}


  return (
  <footer className={classes.footer}>
   <div className={classes.logo}>
      <img src={Logo} width='70' alt=''/>
      <p>Front-end Developer</p>
   </div>
   <div className={classes.socialmedia}>
   <ul>
     <li className='icon-facebook'><a href='https://www.facebook.com'><GrFacebookOption  className={`${classes.icon}`} /></a></li>
     <li className='icon-linkedin'><ImLinkedin2 className={classes.icon}/></li>
     <li className='icon-instagram'><BsInstagram className={classes.icon}/></li>
     <li className='icon-github'><FiGithub className={classes.icon}/></li>
   </ul>
   </div>
   <div className={classes["copyright-container"]}>
    <div className="copyright">
      <p>Copyright {`${'\u00A9'}`} <span>{getYear()}</span> Julio Lopez. All Rights Reserved.</p>
    </div>
   </div>
  </footer>
  );
}

export default React.memo(FooterComponent);
