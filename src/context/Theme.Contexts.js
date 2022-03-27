import  React, {createContext, useState} from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [sideNav, setSideNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

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
            setDarkMode
            }}>
        {props.children}
        </ThemeContext.Provider>
    )
}