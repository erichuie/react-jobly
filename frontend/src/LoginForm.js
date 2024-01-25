import { useState } from "react";

/**Renders a form for logging into application
 *
 * Props:
 * -login: function to set state of user to logged in
 *
 * State:
 * -formData
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({username:"", password:""});
  console.log("formData", formData);
  const [errorMessage, setErrorMessage] = useState(null);

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
    try{
      await login(formData);
    }
    catch(err){
      //map over err to display individual errors
      console.log("err", err);
      setErrorMessage(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          onChange={handleChange}
          value={formData?.username}
          placeholder="username">
        </input>

        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData?.password}
          placeholder="password">
        </input>
        <button>Login</button>
      </form>
      {/* //map over err to display individual errors */}
      { errorMessage &&
      <p>{'noooooooooooo'}</p>}
    </div>
  );
}

export default LoginForm;