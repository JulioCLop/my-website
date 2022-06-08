import  React, {createContext, useState, useEffect} from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [sideNav, setSideNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(()=> {
     const timerId =  setTimeout(()=>{
        setIsLoading(false);
      }, 3000)
      return ()=>{
        clearTimeout(timerId)
      }
  
    },[]);
  



    const darkModeStyles = {
        backgroundColor: 'black',
        color: 'rgb(189, 182, 182)',
         transition: '0.5s all'
    
    }
    const lightModeStyles = {
      transition: '0.5s all'
    }


    return(
        <ThemeContext.Provider value={{
            darkModeStyles,
            sideNav,
            setSideNav,
            darkMode,
            setDarkMode,
            isLoading,
            setIsLoading,
            lightModeStyles 
            }}>
        {props.children}
        </ThemeContext.Provider>
    )
}