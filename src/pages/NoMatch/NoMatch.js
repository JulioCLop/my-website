
import classes from './NoMatch.module.css';



const NoMatch = () => {
  return (
    <div className={classes.nomatch}>
    <div className={classes['nomatch-container']}>
     <h2>404 <span>|</span></h2>
      <h4>page not found!</h4>
    </div>
    </div>
  )
}

export default NoMatch;