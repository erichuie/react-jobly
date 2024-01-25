import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

import userContext from './userContext';
import JoblyApi from './api';

/**Renders RoutesList and Navigation components */

function App() {
  const [user, setUser] = useState(null);

  console.log("App user status", user);

/** AUTH  ********************************************************************/
  /** Calls api for login and sets state of user*/
  async function login({ username, password }) {
    console.log("App login >> username, password", username, password);
    const tokenFromAPI = await JoblyApi.login(username, password);
    console.log("App login >> token", tokenFromAPI);
    //JoblyApi.token = tokenFromAPI;

    // setUser({
    //   username: username
    // });

    getUserData(username);
  }

  /** Calls api for registering a user and sets state of user*/
  async function signup({ username, password, firstName, lastName, email }) {
    const tokenFromAPI =
      await JoblyApi.register(username, password, firstName, lastName, email);
    //JoblyApi.token = tokenFromAPI;
    // setUser({
    //   username: username
    // });

    getUserData(username);
  }

  /** Sets user state to null */
  function logout() {
    setUser(null);
  }
/** useEffect for returning Token with future requests ************************/

  // useEffect(function fetchAndSetUserData() {
  //   async function getUserData() {
  //     const { firstName, lastName, email, isAdmin, jobs} =
  //       await JoblyApi.getUserData(user?.username);

  //     setUser(() => {
  //       return {
  //         ...user,
  //         firstName,
  //         lastName,
  //         email,
  //         isAdmin,
  //         jobs
  //       };
  //     });
  //   }
  //   getUserData();
  // }, [user?.token]); //end useEffect

  /**
   *  Make API request for authed user
   */
  async function getUserData(username) {
    console.log("App >> getUserData, username", username);
    const { firstName, lastName, email, isAdmin, jobs } =
      await JoblyApi.getUserData(username);

    console.log("App >> getUserData, email", email);

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
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
