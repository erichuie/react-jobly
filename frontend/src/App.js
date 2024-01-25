import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

import userContext from './userContext';
import JoblyApi from './api';

/**Renders RoutesList and Navigation components */

function App() {
  const [user, setUser] = useState(null);
  console.log("App user status", user);

  async function login({username, password}) {
    const tokenFromAPI = await JoblyApi.login(username, password);
    setUser({
      name:username,
      token:tokenFromAPI
    });
  }

  async function signup({username, password, firstName, lastName, email }) {
    const tokenFromAPI =
      await JoblyApi.register(username, password, firstName, lastName, email );

    setUser({
      name:username,
      token:tokenFromAPI
    });
  }

  return (
    <div className="App">
      <userContext.Provider value={{user}}>
        <BrowserRouter>
          <Navigation />
          <RoutesList login={login} signup={signup}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
