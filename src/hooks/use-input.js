import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const isValueValid = validateValue(value);
  const valueValidation = !isValueValid && enteredValueTouched;

  const valueHandler = (event) => {
    setValue(event.target.value);
  };
  const valueBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const clear = () => {
    setValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: value,
    isValid: isValueValid,
    valueValidation,
    valueHandler,
    valueBlurHandler,
    clear,
  };
};

export default useInput;
