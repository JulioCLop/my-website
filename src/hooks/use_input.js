import {useState} from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid  && isTouched;
     
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);

  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
    // setIsValid(enteredValue.trim().length > 0);

  }
  const reset = () =>{
    setEnteredValue('');
    setIsTouched(false);
  }

 

return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    inputBlurHandler,
    valueChangeHandler,
    reset
};
};

export default useInput;