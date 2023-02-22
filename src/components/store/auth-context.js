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

    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}   