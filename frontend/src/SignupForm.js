import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  console.log("SignupFormData",formData);
  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;
    setFormData(() => {
      return {
        ...formData,
        [input.name]: input.value
      };
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    signup(formData);
    //navigate("/");TODO: whyyyyy are we still going to the homepage on submit!?
  }

  return (
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
  );
}

export default SignupForm;