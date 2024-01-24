import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";

function RoutesList(){
  console.log("RoutesList");
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/companies" element={<CompaniesList />}></Route>
    </Routes>
  );
}

export default RoutesList;