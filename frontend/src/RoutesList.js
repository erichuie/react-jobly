import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import JobsList from "./JobsList";

//MAYBE HERE?TODO:
import { useContext } from "react";
import userContext  from "./userContext"

/**Handles routing for application
 *
 * Prop:
 * -None
 *
 * State:
 * -None
 *
 * App -> RoutesList -> Homepage, CompaniesList, CompanyDetails, JobsList...
 */

function RoutesList() {
  console.log("RoutesList");

  // userContext here?
  const { user } = useContext(userContext);

  //if(user...){ ... }

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/companies" element={<CompaniesList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetails />}></Route>
      <Route path="/jobs" element={<JobsList />}></Route>

      {"** USER ROUTES **"}
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>

      <Route path="*" element={<Homepage />}></Route>
    </Routes>
  );
}

export default RoutesList;