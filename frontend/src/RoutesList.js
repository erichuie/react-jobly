import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";

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

function RoutesList({ login, signup }) {
  const { user } = useContext(userContext);

  console.log("RoutesList user:", user);

  if(user){
    console.log("Router - user routes reached:", user);
    return (

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/companies" element={<CompaniesList />}></Route>
        <Route path="/companies/:handle" element={<CompanyDetails />}></Route>
        <Route path="/jobs" element={<JobsList />}></Route>
        <Route path="/profile" element={<ProfileForm />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Routes>
    );
  }
  else{
    console.log("Router - no user routes:", user);
    return (
      <Routes>
        <Route path="/login" element={<LoginForm login={login}/>}></Route>
        <Route path="/signup" element={<SignupForm signup={signup} />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Routes>
    );
  }

  // return (
  //   <Routes>
  //     <Route path="/" element={<Homepage />}></Route>
  //     <Route path="/companies" element={<CompaniesList />}></Route>
  //     <Route path="/companies/:handle" element={<CompanyDetails />}></Route>
  //     <Route path="/jobs" element={<JobsList />}></Route>

  //     {"** USER ROUTES **"}
  //     <Route path="/login" element={<LoginForm />}></Route>
  //     <Route path="/signup" element={<SignupForm />}></Route>
  //     <Route path="/profile" element={<ProfileForm />}></Route>

  //     <Route path="*" element={<Homepage />}></Route>
  //   </Routes>
  // );
}

export default RoutesList;