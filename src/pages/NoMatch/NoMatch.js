import { useLocation } from 'react-router';

import classes from './NoMatch.module.css';



const NoMatch = () => {
    const location = useLocation();

  return (
    <div className={classes.nomatch}>
    <p>This is not an active URL path: <span>juliolopez.io{location.pathname}</span> </p>
    </div>
  )
}

export default NoMatch;