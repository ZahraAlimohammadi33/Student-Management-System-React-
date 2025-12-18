import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthContextProvider = (props)=>{
    const [authenticated, setAuthenticated]= useState(localStorage.getItem('user'))
    const login=()=>{
        setAuthenticated(true)
        localStorage.setItem('user', JSON.stringify({authenticated: true}))
    }

    const logout= ()=>{
        setAuthenticated(false)
        localStorage.removeItem('user')
    }
    return (
        <AuthContext.Provider value={{authenticated, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider}