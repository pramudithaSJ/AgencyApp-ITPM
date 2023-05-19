import {BrowserRouter,Routes,Route} from 'react-router-dom' 

import RegisterForm from './User/Registration';
import Login from './User/Login';
import MyProfile from './User/MyProfile';
import UpdateProfile from './User/UpdateProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/register" exact element={<RegisterForm/>}/>
          <Route path = "/login" exact element={<Login/>}/>
          <Route path = "/myprofile" exact element={<MyProfile/>}/>
          <Route path = "/updateprofile" exact element={<UpdateProfile/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
