import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import JobsList from "./JobsList";

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
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/companies" element={<CompaniesList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetails />}></Route>
      <Route path="/jobs" element={<JobsList />}></Route>

      <Route path="*" element={<Homepage />}></Route>
    </Routes>
  );
}

export default RoutesList;