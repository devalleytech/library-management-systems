import React, {useState, useEffect} from "react";
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Signup from './Components/Users/SignUp';
import Login from './Components/Users/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import List from './Components/Users/List';
import Content from './Components/Dashboard/Content';
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
            <Route path='/dashboard/list' element={<List />} />
            </Route>
        </Routes>
       </div> 
     <Footer />
    </>
  );
}

export default App;
