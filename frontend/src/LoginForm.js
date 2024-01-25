import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**Renders a form for logging into application
 *
 * Props:
 * -login: function to set state of user to logged in
 *
 * State:
 * -formData
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({});
  console.log("formData",formData);
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

    login(formData);
    //navigate("/");TODO: whyyyyy are we still going to the homepage on submit!?
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleChange}
        value={formData.username}>
      </input>

      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}>
      </input>
      <button>Login</button>
    </form>
  );
}

export default LoginForm;