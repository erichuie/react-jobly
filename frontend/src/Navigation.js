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
    <div>
      <NavLink to={"/"}>
        Jobly
      </NavLink>
      <NavLink to={"/companies"}>
        Companies
      </NavLink>
      <NavLink to={"/jobs"}>
        Jobs
      </NavLink>
    </div>

  );
}
export default Navigation;