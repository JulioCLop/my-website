
import React, {useEffect, useState} from 'react';

import  classes from './FooterComponent.module.css';

import Logo from '../../assets/LoadingPage/newLogoNoBackround copy.png';



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


 const FooterComponent = () => {
  const [WindowDimensions, setWindowDimensions] = useState(getWindowDimensions)

useEffect(()=> {
  const handleResize = () =>{
    setWindowDimensions(getWindowDimensions)
  }
  window.addEventListener('resize', handleResize);
  return ()=> {
      window.removeEventListener('resize', handleResize);
  }
},[])


const getYear = () => {
  const date  = new Date();
 return  date.getFullYear()
  

}



const widthScreen = () => {
  

  if (WindowDimensions.width > 500) {
    return (
      <div className={classes.logo}>
      <img src={Logo} width='70' alt=''/>
    </div>
    
        )
  } else {
   return null
  }

}

  return (
  <footer className={classes.footer}>
  {widthScreen()}
   <div className={classes.socialmedia}>
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
