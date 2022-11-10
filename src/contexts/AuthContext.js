import React, { useContext, useEffect, useState } from 'react'
import {auth} from "../firebase"
const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(true);
    function signup(email,password){
        setLoading(false)
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout()
    {
        return auth.signOut()
    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setLoading(false)
            setCurrentUser(user)
        })
        return  unsubscribe;
    },[])
    
    const value={
        currentUser,
        signup,
        login,
        logout
    }
    return(
        <div>
            <AuthContext.Provider value={value}>
                {!loading&&children}
            </AuthContext.Provider>
        </div>
    )
}