import React, { useRef, useState } from "react";
import "../styles/App.css";

const App = () => {
  const inputUsernameRef = useRef("");
  const inputEmailRef = useRef("");
  const inputPasswordRef = useRef("");
  const inputMoNumberRef = useRef("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [moNumberError, setMoNumberError] = useState(false);
  const [isSubmitable, setIsSubmitable] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const username = inputUsernameRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    const moNumber = inputMoNumberRef.current.value;
    console.log(username, email, password, moNumber);

    if (username === "") {
      setUsernameError(true);
    }

    if (email === "") {
      setEmailError(true);
    }

    if (password.length < 4) {
      setPasswordError(true);
    }

    if (moNumber.length !== 10) {
      setMoNumberError(true);
    }

    if (
      usernameError === false &&
      emailError === false &&
      moNumberError === false &&
      passwordError === false
    ) {
      setIsSubmitable(true);
      inputUsernameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputMoNumberRef.current.value = "";
      inputPasswordRef.current.value = "";
    }
  };

  return (
    <div id="main">
      {isSubmitable && (
        <h3 className="success-alert">Registered Successfullly</h3>
      )}
      <form onSubmit={formSubmitHandler}>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name="username" ref={inputUsernameRef} />
          {usernameError && (
            <p className="username-error">{"Invalid- Username"}</p>
          )}
          <label>Email</label>
          <input type="email" name="email" ref={inputEmailRef} />
          {emailError && <p className="email-error">{"Invalid-Email"}</p>}
          <label>Password</label>
          <input type="password" name="password" ref={inputPasswordRef} />
          {passwordError && (
            <p className="password-error">{"Invalid-Password"}</p>
          )}
          <label>Contact Number</label>
          <input type="number" name="contactNo" ref={inputMoNumberRef} />
          {moNumberError && (
            <p className="contactNo-error">{"Invalid-Mobile number"}</p>
          )}
          <button>Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;
