import React from "react";
import useInput from "../hooks/use-input";
import classes from "./Form.module.css";

const Form = (props) => {
  let formIsValid = false;

  // firstname
  const {
    value: firstname,
    isValid: isFirstnameValid,
    valueValidation: firstnameValidation,
    valueHandler: firstnameHandler,
    valueBlurHandler: firstnameBlurHandler,
    clear: clearFirstname,
  } = useInput((value) => value.trim() !== "");

  // lastname
  const {
    value: lastname,
    isValid: isLastnameValid,
    valueValidation: lastnameValidation,
    valueHandler: lastnameHandler,
    valueBlurHandler: lastnameBlurHandler,
    clear: clearLastname,
  } = useInput((value) => value.trim() !== "");

  // email
  const {
    value: email,
    isValid: isEmailValid,
    valueValidation: emailValidation,
    valueHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    clear: clearEmail,
  } = useInput((value) => value.includes("@"));

  if (isFirstnameValid && isLastnameValid && isEmailValid) {
    formIsValid = true;
  }

  // form submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFirstnameValid || !isLastnameValid || !isEmailValid) {
      return;
    }

    console.log(firstname, lastname, email);
    clearFirstname();
    clearLastname();
    clearEmail();
  };

  const firstnameClassName = firstnameValidation
    ? "input-field empty"
    : "input-field";

  const lastnameClassName = lastnameValidation
    ? "input-field empty"
    : "input-field";

  const emailClassName = emailValidation ? "input-field empty" : "input-field";

  return (
    <React.Fragment>
      <div className={classes["form"]}>
        <h2>Firstname form</h2>
        <form onSubmit={submitHandler}>
          <div className={firstnameClassName}>
            <label htmlFor="firstname">Enter your firstname:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={firstnameHandler}
              onBlur={firstnameBlurHandler}
            />
            {firstnameValidation && (
              <p className={classes.empty}>Input field can't be empty.</p>
            )}
          </div>
          <div className={lastnameClassName}>
            <label htmlFor="lastname">Enter your lastname:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={lastnameHandler}
              onBlur={lastnameBlurHandler}
            />
            {lastnameValidation && (
              <p className={classes.empty}>Input field can't be empty.</p>
            )}
          </div>
          <div className={emailClassName}>
            <label htmlFor="email">Enter your email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailHandler}
              onBlur={emailBlurHandler}
            />
            {emailValidation && (
              <p className={classes.empty}>Please enter valid email address</p>
            )}
          </div>
          <div className={classes["button-field"]}>
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
