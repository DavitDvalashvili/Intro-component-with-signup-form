import "./Form.css";
import { useState } from "react";
import InputBox from "./InputBox";

export default function Form(props) {
  const [userName, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function handleClick(event) {
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
  }

  return (
    <form>
      <InputBox
        className="fistName inputBox"
        htmlFor="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
        setUsername={setUsername}
        setIsNameInvalid={setIsNameInvalid}
        isNameInvalid={isNameInvalid}
        errorText="First Name cannot be empty"
      />
      <InputBox
        className="LastName inputBox"
        htmlFor="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
        setUsername={setLastName}
        setIsNameInvalid={setIsLastNameInvalid}
        isNameInvalid={isLastNameInvalid}
        errorText="Last Name cannot be empty"
      />
      <InputBox
        className="email inputBox"
        htmlFor="email"
        name="email"
        placeholder="Email Address"
        type="email"
        setUsername={setEmail}
        setIsNameInvalid={setIsEmailValid}
        isNameInvalid={isEmailValid}
        errorText="Looks like this is not an email"
      />
      <InputBox
        className="password inputBox"
        htmlFor="password"
        name="password"
        placeholder="Password"
        type="password"
        setUsername={setPassword}
        setIsNameInvalid={setIsPasswordValid}
        isNameInvalid={isPasswordValid}
        errorText=" Password must contain at least 5 letters"
      />
      <button
        type="submit"
        onClick={(event) => {
          handleClick(event)
        }}
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="agreement">
        <span>By clicking the button, you are agreeing to our</span>{" "}
        <span>Terms and Services</span>{" "}
      </p>
    </form>
  );
}
