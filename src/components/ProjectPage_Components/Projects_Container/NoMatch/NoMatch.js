import {useLocation} from 'react-router';

import classes from './NoMatch.module.css';



const NoMatch = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div className={classes.nomatch}>
    <div>
    <p>This is not an active URL path: <span>juliolopez.io{location.pathname}</span> </p>
    </div>
    </div>
  )
}

export default NoMatch;