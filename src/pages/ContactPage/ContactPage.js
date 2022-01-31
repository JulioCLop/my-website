import React from "react";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import FooterComponent from "../../components/FooterComponent";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div>
      <NavbarComponent />
      <MobileNavigation />
      <div className="contact-page">
        <h1>contact page</h1>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ContactPage;
