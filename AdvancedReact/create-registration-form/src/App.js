import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const validatePassword = (password) => password.value && password.value.length >= 8 && password.isTouched;

const PasswordErrorMessage = (props) => {
  return !validatePassword(props.password) ? (
    <p className="FieldError">Password should have at least 8 characters</p>
  ) : null;
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("empty");

  const getIsFormValid = () => {
    return (
      firstName && 
      validateEmail(email) &&
      validatePassword(password) &&
      role !== "empty"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("empty");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input 
              id="firstName" 
              placeholder="First name" 
              value={firstName}
              onChange={ e => setFirstName(e.currentTarget.value) }
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input 
              id="lastName"
              placeholder="Last name" 
              value={lastName}
              onChange={ e => setLastName(e.currentTarget.value) }
            />
          </div>
          <div className="Field">
            <label htmlFor="emailAddress">
              Email address <sup>*</sup>
            </label>
            <input 
              id="emailAddress"
              placeholder="Email address" 
              value={email}
              onChange={ e => setEmail(e.currentTarget.value) }
            />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="Password"
              value={password.value}
              onChange={e => {
                setPassword({
                  ...password, 
                  value: e.currentTarget.value
                });
              }}
              onBlur={ e => {
                setPassword({
                  ...password,
                  isTouched: true
                });
              }}
            />
            <PasswordErrorMessage password={password} />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={ e => setRole(e.currentTarget.value) }>
              <option value="empty"></option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
