import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./User/Signup";
import Login from "./User/Login";
import UserDashboard from "./User/UserDashoard";
import SeeUsers from "./User/SeeUsers";
function App() {
  return (
    <>
      <Home />
      <Routes>
 <Route    path="/Signup"  element={<Signup/>}   />     
 <Route    path="/Login"  element={<Login/>}   />     
 <Route    path="/UserDashboard"  element={<UserDashboard/>}   />     
 <Route    path="/SeeUsers"  element={<SeeUsers/>}   />     
    
      </Routes>
    </>
  );
}

export default App;
