import  React, {createContext, useState, useEffect, useRef} from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [sideNav, setSideNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    

    const handleTopClick = (topElement) => {
      topElement.current.scrollIntoView({ behavior: "smooth" });
    };

  
    useEffect(()=> {
     const timerId =  setTimeout(()=>{
        setIsLoading(false);
      }, 3000)
      return ()=>{
        clearTimeout(timerId)
      }
  
    },[]);
  



    const darkModeStyles = {
         backgroundColor: 'rgba(0, 0, 0, 0.9)',
         color: 'rgb(169,169,169)',
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
            lightModeStyles ,
            handleTopClick,
            }}>
        {props.children}
        </ThemeContext.Provider>
    )
}