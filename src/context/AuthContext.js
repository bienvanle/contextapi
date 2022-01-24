import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);

    const changeAuthStatus = () => {
        setisLogin({ isLogin: !isLogin })
    }
    return (
        <AuthContext.Provider value={{ ...isLogin, changeAuthStatus: changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;