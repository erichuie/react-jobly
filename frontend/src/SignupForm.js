import { useState } from "react";

//update docstring
/**Renders a form for Registering a new user
 *
 * Props:
 * -login: function to set state of user to logged in
 *
 * State:
 * -formData
 */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState({});
  console.log("SignupFormData", formData);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("errorMessage", errorMessage);

  //add docstrings
  function handleChange(evt) {
    const input = evt.target;
    setFormData(() => {
      return {
        ...formData,
        [input.name]: input.value
      };
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
    }
    catch (err) {
      console.log("err", err);
      setErrorMessage("Username has already been taken");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          onChange={handleChange}
          value={formData.username}
          placeholder="username">
        </input>

        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="password">
        </input>

        <input
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          placeholder="firstname">
        </input>

        <input
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          placeholder="lastname">
        </input>

        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="email">
        </input>
        <button>Signup!</button>
      </form>
      {errorMessage &&
        <p>{errorMessage}</p>}
    </div>
  );
}

export default SignupForm;