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
        backgroundColor: 'rgba(0, 0, 0, 0.843)',
        color: 'rgb(189, 182, 182)'
    
    }


    return(
        <ThemeContext.Provider value={{
            darkModeStyles,
            sideNav,
            setSideNav,
            darkMode,
            setDarkMode,
            isLoading,
            setIsLoading
            }}>
        {props.children}
        </ThemeContext.Provider>
    )
}