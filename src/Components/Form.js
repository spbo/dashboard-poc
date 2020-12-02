import React, { useState,  useContext } from 'react';
import RequestedData from '../Context/RequestedData-context';

const Form = () => {
  
  const data  = useContext(RequestedData);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [error, setError] = useState({phoneError: "", emailError: "", pswError: ""});

  // handle user inputs - feed useStates
  const handleInput = e => {
    switch (e.target.name) {
      case "phone":
        return setPhone(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "psw":
        return setPsw(e.target.value);
    }
  };

  // initial validation rules
  const validation = {
    phone: /^(\+{1}[0-9]{2})?[2|6]{1}[0-9]{9}$/,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/,
    psw: /(?=.*[!@#$%^&*()_+])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  };

  const phoneRegex = new RegExp(validation.phone);
  const emailRegex= new RegExp(validation.email);
  const pswRegex = new RegExp(validation.psw);
  
  // handle Form submition
  const handleFormSubmition = e => {
    e.preventDefault();

    const intermediaryErrors = { phoneError: error.phoneError, emailError: error.emailError, pswError: error.pswError}

    if (phoneRegex.test(phone)) {
      intermediaryErrors.phoneError = "";
    } else {
      intermediaryErrors.phoneError = "Not valid phone number: Please provide a number of 10 digits strating with numbers 2 or 6. Also add you country prefix on start (i.e. +306912345678 )";
    }

    if (emailRegex.test(email)) {
      intermediaryErrors.emailError = "";
    } else {
      intermediaryErrors.emailError = "Not valid email: Please provide a valid email";
    }

    if (pswRegex.test(psw)) {
      intermediaryErrors.pswError = "";
    } else {
      intermediaryErrors.pswError = "Not valid password: Please provide a password with 8 digits or more and at least: 1 number, 1 capital letter, 1 low case letter and 1 symbol";
    }

    setPhone("");
    setEmail("");
    setPsw("");
    setError(intermediaryErrors);
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmition}>
        <input type="text" placeholder={data[0].sections[1].formLabels[0]} name="phone" value={phone || ''} onChange={e => handleInput(e)}/>
        <input type="text" placeholder="Your Email" name="email" value={email || ''} onChange={e => handleInput(e)}/>
        <input type="password" placeholder="Password" name="psw" value={psw || ''} onChange={e => handleInput(e)}/>
        <button className="form__button">Submit</button>
      </form>
      {error.phoneError && <p className="form__error">{error.phoneError}</p>}
      {error.emailError && <p className="form__error">{error.emailError}</p>}
      {error.pswError && <p className="form__error">{error.pswError}</p>}
    </div>
  );
};

export { Form as default };