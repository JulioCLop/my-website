import React, { useState , useEffect, useContext, useMemo } from "react";

import NavbarComponent from "../../components/NavbarComponent";
import MobileNavigation from "../../components/HomePage_Components/MobileNavigation";
import FooterComponent from "../../components/FooterComponent";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import ConfirmModal from "./ConfirmModal";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import { ThemeContext } from "../../context/Theme.Contexts";

import classes from  "./ContactPage.module.css";



const ContactPage = () => {
  const {darkMode} = useContext(ThemeContext);
  const [isFormValid, setFormIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState();
  const [enteredMessage, setEnteredMessage] = useState('');
  const [isMessageValid, setIsMessageValid] = useState();
  const [confirm, setConfirm] = useState(undefined);
  


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
  setIsNameValid(enteredName.trim().length > 0);
  
}



  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0
    ) {
      return;
    }else{
      setConfirm({
        title: 'Message Sent!!',
        message: `Great!!Thank you for leaving me a message 
        ${enteredName.
          slice(0,1).
          toUpperCase() + 
          enteredName.slice(1,enteredName.length
            )}. I'm excited to work together! I will get back to you as soon as possible.`
      })
    }
      setEnteredMessage(e.target.value ='');
      setEnteredName(e.target.value = '');
      setEnteredEmail(e.target.value = '');
  
  };

  const onConfirm = () => {
    setConfirm(false)
  }


  useEffect(()=> {
    const identifier = setTimeout(() => {
        setFormIsValid(enteredMessage.trim().length > 25 && enteredEmail.includes('@'));
     },500);
     return () => {
       clearTimeout(identifier);
     }
   }, [enteredMessage, enteredEmail]);
 
  
  return (
    <div className={`${darkMode && classes['is-darkmode']}`}>
      <NavbarComponent />
      <MobileNavigation />
      {confirm && <ConfirmModal name={enteredName} onConfirm={onConfirm} title={confirm.title} message={confirm.message}/>}
      <div className={classes["contact-page"]}>
        <section className={classes["section-contact-1"]}>
          <div className={classes["contact-page-main-background"]}></div>
          <h1>get in touch!</h1>
        </section>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <section className={classes["section-contact-2"]}>
            <div>
              <div className={`${classes["name-input"]} ${isNameValid === false ? classes.invalid : ""}`}>
                <label
                  htmlFor="name"
                  className={`${isNameValid === false ? classes['invalid-label'] : classes['valid-label']} ${!isNameValid && classes.NameTranHelp}`}

                >
                 { isNameValid === false ?  "Enter valid name." : "Name" }
                </label>
                <Input
                   type='text'
                   id="name"
                   value={enteredName}
                   onChange={nameHandler}
                   onBlur={validateNameHandler}
                />
             
              </div>
              <div className={`${classes["email-input"]} ${isEmailValid === false ? classes.invalid : ''}`}>
                <label  className={`${isEmailValid === false ? classes['invalid-label']: classes['valid-label']} ${!isEmailValid && classes.NameTranHelp}`} htmlFor="email" >
                { isEmailValid === false ?  "Enter valid Email." : "Email" }
                </label>
                <Input
                  type='email'
                  id="email"
                  value={enteredEmail}
                  onChange={emailHandler}
                  onBlur={validateEmailHandler}
                />
              </div>
              <div className={`${classes["message-input"]} ${isMessageValid === false ? classes.invalid : ''}`}>
                <label
                style={isMessageValid === false ? {transform:"translateX(25%)"} : {}}
                  htmlFor="message"
                  className={`${isMessageValid === false ? classes['invalid-label']: classes['valid-label']} `}
                >
                { isMessageValid === false ?  "Must enter 25 charactors." : "Message"}
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
            <Button type="submit" className={`${classes.button} ${!isFormValid && classes["inactive-cursor"]} ${!isFormValid ? classes['btn-invalid'] : ""} `} disabled={!isFormValid} >Submit</Button>
          </div>
        </form>
        
      </div>
      <FooterComponent />
    </div>
   
  );
};

export default ContactPage;
