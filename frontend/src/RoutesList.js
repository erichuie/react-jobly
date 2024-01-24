import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

function RoutesList(){
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  );
}

export default RoutesList;