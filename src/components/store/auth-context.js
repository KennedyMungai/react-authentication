import { createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

const AuthContextProvider = (props) =>
{
    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}   