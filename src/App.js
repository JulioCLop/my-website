import React,{useContext, Suspense} from 'react';

import { ThemeContext } from './context/Theme.Contexts';

import {Routes, Route} from 'react-router-dom';

import LoadingPage from './pages/LoadingPage/LoadingPage';
import HomePage from './pages/HomePage/HomePage';
import NoMatch from './components/ProjectPage_Components/Projects_Container/NoMatch/NoMatch';
import  SeeMorePage  from './pages/AboutPage/SeeMorePage/SeeMorePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import  AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'

import './App.css';


const App = () => {
  const { isLoading } = useContext(ThemeContext);
  
  return (
    <React.Fragment>
    <Suspense fallback={<LoadingPage/>}>
    { isLoading ?
      <LoadingPage/>
    :
   ( 
     <React.Fragment>
     <Routes>
     <Route  path='/' element={<HomePage />}/>
      <Route path='/about' element={ <AboutPage />}/>
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/see-more' element={<SeeMorePage/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </React.Fragment>
    )

    }
    </Suspense>
    </React.Fragment>
   
  );
}

export default App;
