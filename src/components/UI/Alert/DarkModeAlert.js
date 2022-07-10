import React, {useEffect} from 'react'

 const DarkModeAlert = ({className, mode, removeAlert}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000)
        return () => clearTimeout(timeout);
      }, [removeAlert]);
  return <p className={className}>{mode}</p>
}


export default DarkModeAlert;