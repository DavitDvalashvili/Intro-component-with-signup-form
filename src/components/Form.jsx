import "./Form.css";
import { useState } from "react";
import errorIcon from "../asset/icon-error.svg";

export default function Form(props) {
  const [userName, setUsername] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  return (
    <form>
      <div className="firstName inputBox">
        <label htmlFor="firstName"></label>
        <input
          className={`${isNameInvalid ? "inputValidation" : ""}`}
          name="firstName"
          placeholder="First Name"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
            setIsNameInvalid(false);
          }}
        />
        {isNameInvalid ? (
          <img className="errorIcon" src={errorIcon} alt="errorIcon" />
        ) : (
          ""
        )}
        {isNameInvalid ? (
          <p className="errorMessage">First Name cannot be empty</p>
        ) : (
          ""
        )}
      </div>

      <div className="lastName inputBox">
        <label htmlFor="lastName"></label>
        <input
          className={`${isLastNameInvalid ? "inputValidation" : ""}`}
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={(event) => {
            setlastname(event.target.value);
            setIsLastNameInvalid(false);
          }}
        />
        {isLastNameInvalid ? (
          <img className="errorIcon" src={errorIcon} alt="errorIcon" />
        ) : (
          ""
        )}
        {isLastNameInvalid ? (
          <p className="errorMessage">Last Name cannot be empty</p>
        ) : (
          ""
        )}
      </div>

      <div className="email inputBox">
        <label htmlFor="email"></label>
        <input
          className={`${isEmailValid ? "inputValidation" : ""}`}
          name="email"
          placeholder="Email Address"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
            setIsEmailValid(false);
          }}
        />
        {isEmailValid ? (
          <img className="errorIcon" src={errorIcon} alt="errorIcon" />
        ) : (
          ""
        )}
        {isEmailValid ? (
          <p className="errorMessage">Looks like this is not an email</p>
        ) : (
          ""
        )}
      </div>

      <div className="password inputBox">
        <label htmlFor="password"></label>
        <input
          className={`${isPasswordValid ? "inputValidation" : ""}`}
          name="password"
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
            setIsPasswordValid(false);
          }}
        />
        {isPasswordValid ? (
          <img className="errorIcon" src={errorIcon} alt="errorIcon" />
        ) : (
          ""
        )}
        {isPasswordValid ? (
          <p className="errorMessage">
            Password must contain at least 5 letters
          </p>
        ) : (
          ""
        )}
      </div>

      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (userName.length < 1) {
            setIsNameInvalid(true);
          }
          if (lastName.length < 1) {
            setIsLastNameInvalid(true);
          }
          if (!emailRegex.test(email)) {
            setIsEmailValid(true);
          }
          if (password.length < 5) {
            setIsPasswordValid(true);
          }
        }}
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="agreement"><span>By clicking the button, you are agreeing to our</span> <span>Terms and Services</span> </p>
    </form>
  );
}
