import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

import userContext from './userContext';
import JoblyApi from './api';


//add more to docstring
/**Renders RoutesList and Navigation components */

function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));
  const [ token, setToken] = useState(localStorage.getItem('token'));

  console.log("App user status", user);

  /** AUTH  ********************************************************************/

  /** Calls api for login and sets state of user*/
  async function login({ username, password }) {
    console.log("App login >> username, password", username, password);
    const tokenFromAPI = await JoblyApi.login(username, password);
    console.log("App login >> token", tokenFromAPI);

    setToken(tokenFromAPI);
    localStorage.setItem('token', tokenFromAPI);
    getUserData(username);
  }

  /** Calls api for registering a user and sets state of user*/
  async function signup({ username, password, firstName, lastName, email }) {
    const tokenFromAPI =
      await JoblyApi.register(username, password, firstName, lastName, email);

      setToken(tokenFromAPI);
      getUserData(username);
  }

  /** Sets user state to null and removes token from localStorage */
  function logout() {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   *  Make API request for authed user
   */
  //change name of fn and add to docstring more
  async function getUserData(username) {
    console.log("App >> getUserData, username", username);
    const { firstName, lastName, email, isAdmin, jobs } =
      await JoblyApi.getUserData(username);

    console.log("App >> getUserData, email", email);
    localStorage.setItem('user',username);
    setUser(() => {
      return {
        username,
        firstName,
        lastName,
        email,
        isAdmin,
        jobs
      };
    });
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user, token }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
