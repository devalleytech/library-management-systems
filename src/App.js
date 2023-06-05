import React from "react";
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Signup from './Components/Users/SignUp';
import Login from './Components/Users/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import Userlist from './Components/Users/List';
import Content from './Components/Pages/Content';
import Editrole from './Components/Users/Editrole';
import Bookadd from './Components/Books/Add';
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
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='/dashboard' element={<Content />} />
            <Route path='/dashboard/list' element={<Userlist />} />
            <Route path='/dashboard/addbook' element={<Bookadd />} />
            <Route path="/dashboard/editrole" element={<Editrole />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
       </div> 
     <Footer />
    </>
  );
}

export default App;
