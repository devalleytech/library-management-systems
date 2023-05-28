import React from "react";
import Signup from '../component/Users/Signup';
import Login from '../component/Users/Login';
import ListUsers from '../component/Users/ListUsers';
import { Routes, Route } from "react-router-dom";

import './main.css';

const Main = () => {
 return (
    <>
        <div className="container">
        <Routes>
            <Route index path="/" element={<ListUsers />} />
            <Route  exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
        </div>
    </>
 )
}

export default Main;