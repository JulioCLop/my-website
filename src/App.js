import React,{useContext, Suspense} from 'react';

import { ThemeContext } from './context/Theme.Contexts';

import {Routes, Route} from 'react-router-dom';



import LoadingPage from './pages/LoadingPage/LoadingPage';
import HomePage from './pages/HomePage/HomePage';
// import MainView from './components/UI/MainView/MainView';
// import NavbarComponent from './components/NavbarComponent';
// import MobileNavigation from './components/HomePage_Components/MobileNavigation';
// import FooterComponent from './components/FooterComponent';


import './App.css';
import NoMatch from './components/ProjectPage_Components/Projects_Container/NoMatch/NoMatch';


const SeeMorePage = React.lazy(()=> import('./pages/AboutPage/SeeMorePage/SeeMorePage'));
const ProjectPage = React.lazy(()=> import('./pages/ProjectPage/ProjectPage'));
const AboutPage = React.lazy(()=> import('./pages/AboutPage/AboutPage'));
const ContactPage = React.lazy(()=> import('./pages/ContactPage/ContactPage'));



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
