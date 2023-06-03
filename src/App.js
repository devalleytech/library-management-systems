import React, {useState, useEffect} from "react";
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Signup from './component/Users/SignUp';
import Login from './component/Users/SignIn';
import MemberProfile from './component/Users/Member';
import { Routes, Route } from "react-router-dom";


function App() {

  const [userStatus, setUserStatus] = useState(false);

   useEffect(() => {
      setUserStatus(localStorage.getItem("userStatus"));
   }, [userStatus]);
    
  return (
    <>
      <Header  />
      <div className="container main">
        <Routes>
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<MemberProfile />} />
        </Routes>
       </div> 
     <Footer />
    </>
  );
}

export default App;
