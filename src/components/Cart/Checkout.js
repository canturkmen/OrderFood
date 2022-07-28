import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isFiveCharacters = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const [formInputsValidty, setFormInputsValidty] = useState({
    name: true,
    adress: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const adressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("is submitted.");

    const enteredName = nameInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAdressIsValid = !isEmpty(enteredAdress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveCharacters(enteredPostalCode);

    setFormInputsValidty({
      name: enteredNameIsValid,
      adress: enteredNameIsValid,
      city: enteredNameIsValid,
      postalCode: enteredNameIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAdressIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      adress: enteredAdress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name"></input>
        {!formInputsValidty.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="adress">Adress</label>
        <input ref={adressInputRef} type="text" id="adress"></input>
        {!formInputsValidty.adress && <p>Please enter a valid adress</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal"></input>
        {!formInputsValidty.postalCode && (
          <p>Please enter a valid postcal code (must be 5 characters)</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city"></input>
        {!formInputsValidty.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
