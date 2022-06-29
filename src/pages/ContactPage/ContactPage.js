import React, { useState, useContext } from "react";

import useInput from "../../hooks/use_input";

import Input from "../../components/UI/Input/Input";

import ConfirmModal from "./ConfirmModal";

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
  } = useInput((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );
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

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://portfolio-email-81da0-default-rtdb.firebaseio.com/message.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      setError(true);
      setConfirm({
        title: `I'm sorry, we can't seem to find the page! ${response.status}`,
        message: "I leave you with this...",
        btnContent: "Try again",
      });
      messageReset();
      resetNameInput();
      emailReset();
    }

    setConfirm({
      title: "Message Sent!!",
      message: `Great!!Thank you for leaving me a message 
        ${
          enteredName.slice(0, 1).toUpperCase() +
          enteredName.slice(1, enteredName.length)
        }. I'm excited to work together! I will get back to you as soon as possible.`,
      btnContent: "Great!",
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
        {confirm && (
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
                    {nameInputHasError && "Enter valid name."}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHanlder}
                    placeholder='Your name'
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
                    {emailInputHasError && "Enter valid Email."}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    placeholder='Your email'
                  />
                </div>
                <div
                  className={`${classes["message-input"]} ${
                    messageInputHasError ? classes.invalid : ""
                  }`}
                >
                  <label
                    htmlFor="message"
                    className={`${
                      messageInputHasError
                        ? classes["invalid-label"]
                        : classes["valid-label"]
                    } `}
                  >
                    {messageInputHasError && "Enter at least 25 characters."}
                  </label>
                  <textarea
                    id="message"
                    onChange={messageChangeHandler}
                    value={enteredMessage}
                    onBlur={messageBlurHandler}
                    placeholder='Leave me a message...'
                  ></textarea>
                </div>
                <div className={classes["message-input-2"]}>
                  <p>
                    Have any questions? Send me message,and let's get talking!
                  </p>
                </div>
              </div>
            </section>
            <div className={classes["contact-btn-container"]}>
              <button
                type="submit"
                className={`${classes.button} `}
                disabled={!formIsValid}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainHomePage>
  );
};

export default React.memo(ContactPage);
