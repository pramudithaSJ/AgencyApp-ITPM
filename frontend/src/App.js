import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterForm from "./User/Registration";
import Login from "./User/Login";
import MyProfile from "./User/MyProfile";
import UpdateProfile from "./User/UpdateProfile";
import SingleAgencyView from "./Review/agencyView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Admin/dashboard";
import AllUsers from "./Admin/AllUsers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/register" exact element={<RegisterForm/>}/>
          <Route path = "/login" exact element={<Login/>}/>
          <Route path = "/myprofile" exact element={<MyProfile/>}/>
          <Route path = "/updateprofile" exact element={<UpdateProfile/>}/>
          <Route path = "/sidebar" exact element={<Sidebar/>}/>
          <Route path = "/allusers" exact element={<AllUsers/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
