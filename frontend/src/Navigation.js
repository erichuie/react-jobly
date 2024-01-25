import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';

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
      <NavLink className="Navigation-link" to={"/profile"}>
        Profile
      </NavLink>
      <NavLink className="Navigation-link" to={"/login"}>
        Login
      </NavLink>
      <NavLink className="Navigation-link" to={"/signup"}>
        Signup
      </NavLink>
    </div>

  );

  //FIXME: react bootstrap kills our state
  // return (
  //   <Navbar expand="lg" className="bg-body-tertiary">
  //       <Stack direction="horizontal" gap={3}>
  //       <Navbar.Brand className="p-2" href="/">Jobly</Navbar.Brand>
  //       <div className="d-flex flex-row-reverse">
  //         <Nav.Link className="p-2 ms-auto" href="/companies">Companies</Nav.Link>
  //         <Nav.Link className="p-2" href="/jobs">Jobs</Nav.Link>
  //         <Nav.Link className="p-2" href="/login">login</Nav.Link>
  //       </div>
  //       </Stack>
  //     </Navbar>
  // );
}
export default Navigation;