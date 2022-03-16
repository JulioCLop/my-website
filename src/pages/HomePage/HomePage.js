import React from "react";

import NavbarComponent from "../../components/NavbarComponent";
import DisplayContainer from "../../components/HomePage_Components/DisplayContainer";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";

import { ThemeContext } from "../../context/Theme.Contexts";

import "./HomePage.css";


const HomePage = () => {

  return (
<div className=" home-page">
      <NavbarComponent  />
      <MobileNavigation  /> 
      <main >
        <section className="section-flex">
          <DisplayContainer
            id="img-4"
            src="https://images.unsplash.com/photo-1641752084778-3e4f55a083e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
