import React, { useState } from "react";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import FooterComponent from "../../components/FooterComponent";
import ErrorModal from "./ErrorModal";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import "./ContactPage.css";


const ContactPage = () => {
  const [isValid, setIsValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error , setError] = useState(undefined);

  const invalid = "invalid";
  const invalidLabel = "invalid-label";
  const validLabel = "valid-label";

  const nameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
  
    }
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
      
    }
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
     
      
    }
    setMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setIsValid(false);
      setError({
        title: 'Enter Valid information',
        message: 'Please enter a valid name, email, and message.'
      })
      return;
    }
    setEmail('');
    setName('');
    setMessage('');
  };

  const onConfirm = () => {
    setError(null)
  }

  return (
    <div>
      <NavbarComponent />
      <MobileNavigation />
      {error && <ErrorModal onConfirm={onConfirm} title={error.title} message={error.message}/>}
      <div className="contact-page">
        <section className="section-contact-1">
          <div className="contact-page-main-background"></div>
          <h1>get in touch!</h1>
        </section>
        <form onSubmit={formSubmitHandler}>
          <section className="section-contact-2">
            <div>
              <div className="name-input">
                <label
                  htmlFor="name"
                  className={`${!isValid ? invalidLabel : validLabel}`}
                >
                  Name
                </label>
                <input
                  id="name"
                  className={!isValid && invalid}
                  value={name}
                  onChange={nameHandler}
                />
              </div>
              <div className="email-input">
                <label
                  htmlFor="email"
                  className={`${!isValid ? invalidLabel : validLabel}`}
                  style={{ color: !isValid && "rgb(75, 4, 4)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  className={!isValid && invalid}
                  value={email}
                  onChange={emailHandler}
                />
              </div>
              <div className="message-input">
                <label
                  htmlFor="message"
                  className={`${!isValid ? invalidLabel : validLabel}`}
                  style={{ color: !isValid && "rgb(75, 4, 4)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className={!isValid && invalid}
                  value={message}
                  onChange={messageHandler}
                ></textarea>
              </div>
              <div className="message-input-2">
                <h2>Contact Me!</h2>
                <p>
                  Have any questions? Send me message,and let's get talking!
                </p>
                <ul>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.facebook.com/julioclopezDev/"
                      target="_blank"
                    >
                      <FacebookIcon className="icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/juliolopezdev/"
                      target="_blank"
                    >
                      <LinkedInIcon className="icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="mailto: joeyclopez88@gmail.com"
                      target="_blank"
                    >
                      <EmailIcon className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="contact-btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
   
  );
};

export default ContactPage;
