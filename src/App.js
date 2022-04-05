import React,{useContext} from 'react';
import { ThemeContext } from './context/Theme.Contexts';

import {Routes, Route} from 'react-router-dom';




import LoadingPage from './pages/LoadingPage/LoadingPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './App.css';
import SeeMorePage from './pages/AboutPage/SeeMorePage/SeeMorePage';


const App = () => {
  const { isLoading } = useContext(ThemeContext);
  
  return (
    <>
    { isLoading ?
      <LoadingPage/>
    :
   ( 
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/see-more' element={<SeeMorePage/>}/>
    </Routes>
    )

    }
    </>
   
  );
}

export default App;
