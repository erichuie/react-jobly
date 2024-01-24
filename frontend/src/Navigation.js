import { NavLink } from "react-router-dom";

function Navigation(){
  console.log("Navigation");
  return(
    <NavLink to={"/"}>
      Jobly
    </NavLink>
  )
}
export default Navigation;