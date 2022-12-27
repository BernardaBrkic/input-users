import React from "react";
import useInput from "../hooks/use-input";
import classes from "./SimpleForm.module.css";

const SimpleForm = (props) => {
  const {
    value: firstname,
    isValid: isFirstnameValid,
    valueValidation: firstnameValidation,
    valueHandler: firstnameHandler,
    valueBlurHandler: firstnameBlurHandler,
    clear: clearFirstname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: isEmailValid,
    valueValidation: emailValidation,
    valueHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    clear: clearEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (isFirstnameValid && isEmailValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFirstnameValid) {
      return;
    }

    console.log(firstname, email);
    clearFirstname();
    clearEmail();
  };

  const firstnameClassName = firstnameValidation
    ? "input-field empty"
    : "input-field";

  const emailClassName = emailValidation ? "input-field empty" : "input-field";

  return (
    <React.Fragment>
      <div className={classes["min-form"]}>
        <h2>Firstname form</h2>
        <form onSubmit={submitHandler}>
          <div className={firstnameClassName}>
            <label htmlFor="firstname">Enter your firstname:</label>
            <input
              type="text"
              id="firstname"
              onChange={firstnameHandler}
              onBlur={firstnameBlurHandler}
              value={firstname}
            />
            {firstnameValidation && (
              <p className={classes.empty}>Input field can't be empty.</p>
            )}
          </div>
          <div className={emailClassName}>
            <label htmlFor="email">Enter your email address:</label>
            <input
              type="email"
              id="email"
              onChange={emailHandler}
              onBlur={emailBlurHandler}
              value={email}
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

export default SimpleForm;
