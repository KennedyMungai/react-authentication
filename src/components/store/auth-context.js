import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime) =>
{

}

export const AuthContextProvider = (props) =>
{
    const initialToken = localStorage.getItem('token')

    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const loginHandler = (token, expirationTime) =>
    {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logoutHandler = () =>
    {
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext