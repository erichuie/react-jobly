import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

import userContext from './userContext';

/**Renders RoutesList and Navigation components */

function App() {
  return (
    <div className="App">
      <userContext.Provider value={{user:null}}>
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
