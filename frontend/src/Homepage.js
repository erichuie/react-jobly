import { useContext } from "react";
import userContext from "./userContext";

/**Renders homepage of application
 *
 * Props:
 * -None
 *
 * State:
 * -jobsData: array of job objects
 *
 * App -> Homepage
*/

function Homepage() {
  const { user } = useContext(userContext);
  console.log("Homepage");
  return (
    <div>
      { !user &&
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place</p>
      </div>
      }
      { user &&
      <div>
        <h1>Jobly</h1>
        <p>Hi, {user.name}</p>
      </div>
      }
    </div>
  );
}

export default Homepage;