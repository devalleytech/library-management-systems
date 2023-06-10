import { createContext, useContext, useEffect, useState } from "react";

const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {

    useEffect(() => {
        chekUserInfo();
    }, [])

    const [getUser, setUser] = useState([]);

    const setUserInfo = (users) => {
        localStorage.setItem('userInfo', JSON.stringify(users));
        chekUserInfo();
    }

    const chekUserInfo = () => {
        const getUser = JSON.parse(localStorage.getItem('userInfo'));
        setUser(getUser);
    }

    return (
        <UserInfoContext.Provider value={{ getUser, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    )
}

export const useUserInfoContext = () => {
    return useContext(UserInfoContext);
}