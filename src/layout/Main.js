import React from "react";
import Signup from '../component/Users/Signup';
import Login from '../component/Users/Login';
import ListUsers from '../component/Users/ListUsers';
import UserProfile from '../component/Users/UserProfile';
import { Routes, Route } from "react-router-dom";

import './main.css';

const Main = () => {
 return (
    <>
        <div className="container main">
        <Routes>
            <Route index path="/" element={<ListUsers />} />
            <Route  exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<UserProfile />} />
        </Routes>
        </div>
    </>
 )
}

export default Main;