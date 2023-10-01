import "./App.css";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    newsletter: true,
  });

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmedPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("passwords do not match");
      return;
    }
    if (formData.newsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmedPassword"
          onChange={handleChange}
          value={formData.confirmedPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="newsletter"
            onChange={handleChange}
            checked={formData.newsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  );
}
