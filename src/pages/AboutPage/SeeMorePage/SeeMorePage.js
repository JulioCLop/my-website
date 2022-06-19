import React from "react";

import { Link } from 'react-router-dom';

import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import TranslateIcon from '@mui/icons-material/Translate';

import FooterComponent from "../../../components/FooterComponent";
import NavbarComponent from "../../../components/NavbarComponent";
import MobileNavigation from "../../../components/MobileNavigation";
import SchoolIcon from '@mui/icons-material/School';

import classes from "./SeeMorePage.module.css";

const SeeMorePage = () => {
  return (
    <>
      <NavbarComponent />
      <MobileNavigation />
      <div className={classes["see_more_container"]}>
        <section className={classes["see_more_section_one"]}>
          <div className={classes["see_more_inner_one"]}>
            <div >
                <h1>Technologies I've Worked With</h1>
            </div>
            <div>
            <p>I litte more about my suitable skills that I have developed to create attractive and clean interfaces.</p>
            </div>
          </div>
          <div className={classes["see_more_inner_two"]} >
            <div className={classes["see_inner_box_container"]}>
              <div>
          
            <CodeIcon className={classes['see-more-icons']}/>
                  <h2>Programming language</h2>
                  <p>Javascript</p>
              </div>
              <div>
              <LaptopIcon   className={classes['see-more-icons']}/>
                  <h2>Technologies I've<br/> worked with</h2>
                  <p>SQL,React, Express,Redux,Hooks, Context API</p>
              </div>
              <div>
              <SchoolIcon  className={classes['see-more-icons']}/>
                  <h2>School</h2>
                  <p>University of Cincinnati</p>
                  </div>
              <div>
              <TranslateIcon  className={classes['see-more-icons']}/>
                  <h2>Personal skills</h2>
                      <p>Bilingual</p>
              </div>
            </div>
            <div className={classes["see_inner_img"]}>
              <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E=" width='500' />
            </div>
          </div>
        </section>
        <section className={classes['see_more_section_three']}>
          <Link to='/about'>back</Link>
        </section>
      </div>
      <FooterComponent />
    </>
  );
};
export default React.memo(SeeMorePage);
