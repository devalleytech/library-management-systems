import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        let checkAuth = window.localStorage.getItem('userStatus');
        if (!checkAuth) {
            navigate('/login');
        }
    })
    return (
        <>
            <props.comp />
        </>
    )

}

export default ProtectedRoute;