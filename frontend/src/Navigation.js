import { NavLink } from "react-router-dom";

/**Displays Navbar to other routes
 *
 * Prop:
 * -None
 *
 * State:
 * -None
 *
 * App -> Navigation
 */

function Navigation() {
  console.log("Navigation");
  return (
    <div className="Navigation">
      <NavLink className="Navigation-link" to={"/"}>
        Jobly
      </NavLink>
      <NavLink className="Navigation-link" to={"/companies"}>
        Companies
      </NavLink>
      <NavLink className="Navigation-link" to={"/jobs"}>
        Jobs
      </NavLink>
    </div>

  );
}
export default Navigation;