import { createContext, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime) =>
{
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()

    const remainingTime = adjExpirationTime - currentTime

    return remainingTime
}

const retrieveStoredToken = () =>
{
    const storedToken = localStorage.getItem('token')
    const storedExpirationDate =  
}

export const AuthContextProvider = (props) =>
{
    const initialToken = localStorage.getItem('token')

    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const logoutHandler = () =>
    {
        setToken(null)
        localStorage.removeItem('token')

        if (logoutTimer)
        {
            clearTimeout(logoutTimer)
        }
    }

    const loginHandler = (token, expirationTime) =>
    {
        setToken(token)
        localStorage.setItem('token', token)

        const remainingTime = calculateRemainingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
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