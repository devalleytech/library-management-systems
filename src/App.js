import React from "react";
import Footer from './layout/Footer';
import Header from './layout/Header';
import Signup from './Components/Users/SignUp';
import Login from './Components/Users/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import Userlist from './Components/Users/List';
import Content from './Components/Pages/Content';
import Editrole from './Components/Users/Editrole';
import Bookadd from './Components/Books/Add';
import ProtectedRoute from './Utility/Auth/Protected';
import Notfound from './Components/Pages/Notfound';
import { Routes, Route } from "react-router-dom";
import './App.css';


function App() {
    
  return (
    <>
      <Header  />
      <div className="container main">
        <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          <Route path="/dashboard" element={< ProtectedRoute comp={Dashboard} />} >
            <Route path='/dashboard' element={< ProtectedRoute comp={Content} />} />
            <Route path='/dashboard/list' element={< ProtectedRoute comp={Userlist} />} />
            <Route path='/dashboard/addbook' element={< ProtectedRoute comp={Bookadd} />}  />
            <Route path="/dashboard/editrole" element={< ProtectedRoute comp={Editrole} />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
       </div> 
     <Footer />
    </>
  );
}

export default App;
