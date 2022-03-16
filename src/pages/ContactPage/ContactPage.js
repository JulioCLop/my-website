import React, { useState , useEffect, useContext } from "react";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import FooterComponent from "../../components/FooterComponent";
import ErrorModal from "./ErrorModal";
import ConfirmModal from "./ConfirmModal";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import { ThemeContext } from "../../context/Theme.Contexts";

import classes from  "./ContactPage.module.css";


const ContactPage = () => {
  const {darkMode} = useContext(ThemeContext);
  const [isFormValid, setFormIsValid] = useState(false);
  const [error , setError] = useState(undefined);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState();
  const [enteredMessage, setEnteredMessage] = useState('');
  const [isMessageValid, setIsMessageValid] = useState();
  const [confirm, setConfirm] = useState(undefined);


  useEffect(()=> {
   const identifier = setTimeout(() => {
      setFormIsValid(enteredMessage.trim().length > 25 && enteredEmail.includes('@'));
    },500);

    return () => {
      clearTimeout(identifier);
    }
  }, [enteredMessage, enteredEmail]);

  
  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
   
  };

  const messageHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

const validateEmailHandler = () => {
  setIsEmailValid(enteredEmail.includes('@'));
}
const validateMessageHandler = () => {
setIsMessageValid(enteredMessage.trim().length > 25)
}
const validateNameHandler = () => {
setIsNameValid(enteredName.trim().length > 0)
}


  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0
    ) {
      setError({
        title: 'Enter Valid information',
        message: 'Please enter a valid name, email, and message.'
      })
      return;
    }else{
      setConfirm({
        title: 'Message Sent!!',
        message: 'Great!!Let\'s work together'
      })
    }
      setEnteredMessage(e.target.value ='');
      setEnteredName(e.target.value = '');
      setEnteredEmail(e.target.value = '');
  
    console.log(enteredEmail,enteredName,enteredMessage)
  };

  const onConfirm = () => {
    setError(null)
    setConfirm(false)
   
  }

  

  return (
    <div className={`${darkMode && classes['is-darkmode']}`}>
      <NavbarComponent />
      <MobileNavigation />
      {error && <ErrorModal onConfirm={onConfirm} title={error.title} message={error.message}/> }
      {confirm && <ConfirmModal onConfirm={onConfirm} title={confirm.title} message={confirm.message}/>}
      <div className={classes["contact-page"]}>
        <section className={classes["section-contact-1"]}>
          <div className={classes["contact-page-main-background"]}></div>
          <h1>get in touch!</h1>
        </section>
        <form onSubmit={formSubmitHandler}>
          <section className={classes["section-contact-2"]}>
            <div>
              <div className={`${classes["name-input"]} ${isNameValid === false ? classes.invalid : ""}`}>
                <label
                  htmlFor="name"
                  className={`${isNameValid === false ? classes['invalid-label']: classes['valid-label']}`}

                >
                  Name
                </label>
                <input
                  type='text'
                  id="name"
                  value={enteredName}
                   onChange={nameHandler}
                   onBlur={validateNameHandler}
                />
              </div>
              <div className={`${classes["email-input"]} ${isEmailValid === false ? classes.invalid : ''}`}>
                <label  className={`${isEmailValid === false ? classes['invalid-label']: classes['valid-label']}`} htmlFor="email" >Email</label>
                <input
                  type='email'
                  id="email"
                 
                  value={enteredEmail}
                 onChange={emailHandler}
                 onBlur={validateEmailHandler}
                />
              </div>
              <div className={`${classes["message-input"]} ${isMessageValid === false ? classes.invalid : ''}`}>
                <label
                  htmlFor="message"
                  className={`${isMessageValid === false ? classes['invalid-label']: classes['valid-label']}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  onChange={messageHandler}
                  value={enteredMessage}
                  onBlur={validateMessageHandler}
                ></textarea>
              </div>
              <div className={classes["message-input-2"]}>
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
                      <FacebookIcon className={classes.icons} />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/juliolopezdev/"
                      target="_blank"
                    >
                      <LinkedInIcon className={classes.icons}/>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="mailto: joeyclopez88@gmail.com"
                      target="_blank"
                    >
                      <EmailIcon className={classes.icons}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className={classes["contact-btn-container"]}>
            <button type="submit" className={`${!isFormValid ? classes['btn-invalid'] : ""}`} disabled={!isFormValid} >Submit</button>
          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
   
  );
};

export default ContactPage;
