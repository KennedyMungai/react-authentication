import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

const AuthContextProvider = (props) =>
{
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token

    const loginHandler = (token) =>
    {
        setToken(token)
    }

    const logoutHandler = () =>
    {
        setToken(null)
    }

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}   