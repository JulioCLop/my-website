import React, {useEffect, useState} from 'react';

import {Routes, Route} from 'react-router-dom';

import { ThemeProvider } from './context/Theme.Contexts';

import LoadingPage from './pages/LoadingPage/LoadingPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';



import './App.css';
import SeeMorePage from './pages/AboutPage/SeeMorePage/SeeMorePage';


const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(()=> {
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
  },[]);

  return (
    <>
<div>
    { isLoading ?
      <LoadingPage/>
    :
   ( 
     <ThemeProvider>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/see-more' element={<SeeMorePage/>}/>
    </Routes>
    </ThemeProvider>
    )

    }
    </div>
    </>
   
  );
}

export default App;
