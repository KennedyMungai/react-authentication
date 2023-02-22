import { createContext } from "react";

const AuthCOntext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})