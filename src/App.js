import React,{useContext, Suspense} from 'react';

import { ThemeContext } from './context/Theme.Contexts';

import {Routes, Route} from 'react-router-dom';

import LoadingPage from './pages/LoadingPage/LoadingPage';
import './App.css';




const SeeMorePage = React.lazy(()=> import('./pages/AboutPage/SeeMorePage/SeeMorePage'))
const ProjectPage = React.lazy(()=> import('./pages/ProjectPage/ProjectPage'))
const AboutPage = React.lazy(()=> import('./pages/AboutPage/AboutPage'))
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const ContactPage = React.lazy(()=> import('./pages/ContactPage/ContactPage'));



const App = () => {
  const { isLoading } = useContext(ThemeContext);
  
  return (
    <>
    <Suspense fallback={<LoadingPage/>}>
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
    </Suspense>
    </>
   
  );
}

export default App;
