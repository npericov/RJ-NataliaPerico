import React from "react";
import  { createContext, useState } from "react";



export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        email: 'usuario@gmail.com',
        token: 'asdlfkj3l12'
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    };