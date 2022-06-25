import React, { useState, useContext } from "react";

import useInput from "../../hooks/use_input";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import ConfirmModal from "./ConfirmModal";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import { ThemeContext } from "../../context/Theme.Contexts";



import classes from "./ContactPage.module.css";
import MainHomePage from "../HomePage/MainHomePage";


const ContactPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHanlder,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim().length > 25);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredNameIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }


  const formSubmitHandler =  async(e) => {

       e.preventDefault();
      const response = await fetch('https://portfolio-email-81da0-default-rtdb.firebaseio.com/message.json', {
            method: 'POST',
            body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
          }),
          header: {
            'Content-Type': 'application/json'
          }
        });

        if(!response.ok){
          setError(true);
          setConfirm({
            title: `I'm sorry, we can't seem to find the page! ${response.status}`,
            message: "I leave you with this...",
            btnContent: 'Try again'
           });
          messageReset();
          resetNameInput();
          emailReset();
        };

        setConfirm({
          title: "Message Sent!!",
          message: `Great!!Thank you for leaving me a message 
        ${
          enteredName.slice(0, 1).toUpperCase() +
          enteredName.slice(1, enteredName.length)
        }. I'm excited to work together! I will get back to you as soon as possible.`,
           btnContent: 'Great!'
         });
         setModalAnimation(true);

         
      messageReset();
      resetNameInput();
      emailReset();
      };

  const onConfirm = () => {
    setError(false);
    setConfirm(false);
    setModalAnimation(true);
  };

 
  return (
    <MainHomePage>
    <div>
      { confirm &&  (
        <ConfirmModal
          modalAnimation={modalAnimation}
          error={error}
          name={enteredName}
          onConfirm={onConfirm}
          title={confirm.title}
          message={confirm.message}
          btnTexts={confirm.btnContent}
        />
      )}
      <div className={classes["contact-page"]}>
        <section className={classes["section-contact-1"]}>
          <div className={classes["contact-page-main-background"]}></div>
          <h1>get in touch!</h1>
        </section>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <section className={classes["section-contact-2"]}>
            <div>
              <div
                className={`${classes["name-input"]} ${
                  nameInputHasError ? classes.invalid : ""
                }`}
              >
                <label
                  htmlFor="name"
                  className={`${
                    nameInputHasError
                      ? classes["invalid-label"]
                      : classes["valid-label"]
                  } ${nameInputHasError && classes.NameTranHelp}`}
                >
                  {nameInputHasError ? "Enter valid name." : "Name"}
                </label>
                <Input
                  type="text"
                  id="name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHanlder}
                />
              </div>
              <div
                className={`${classes["email-input"]} ${
                  emailInputHasError ? classes.invalid : ""
                }`}
              >
                <label
                  htmlFor="email"
                  className={`${
                    emailInputHasError
                      ? classes["invalid-label"]
                      : classes["valid-label"]
                  } ${emailInputHasError && classes.NameTranHelp}`}
                >
                  {emailInputHasError ? "Enter valid Email." : "Email"}
                </label>
                <Input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
              </div>
              <div
                className={`${classes["message-input"]} ${
                  messageInputHasError ? classes.invalid : ""
                }`}
              >
                <label
                  style={
                    messageInputHasError ? { transform: "translateX(30%)" } : {}
                  }
                  htmlFor="message"
                  className={`${
                    messageInputHasError
                      ? classes["invalid-label"]
                      : classes["valid-label"]
                  } `}
                >
                  {messageInputHasError
                    ? "Enter at least 25 characters."
                    : "Message"}
                </label>
                <textarea
                  id="message"
                  onChange={messageChangeHandler}
                  value={enteredMessage}
                  onBlur={messageBlurHandler}
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
                      <LinkedInIcon className={classes.icons} />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="mailto: joeyclopez88@gmail.com"
                      target="_blank"
                    >
                      <EmailIcon className={classes.icons} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className={classes["contact-btn-container"]}>
            <Button
              type="submit"
              className={`${classes.button} `}
              disabled={!formIsValid}
            
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
    </MainHomePage>
  );
};

export default React.memo(ContactPage);
