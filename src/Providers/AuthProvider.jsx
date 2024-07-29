import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext=createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unsubsCribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubsCribe();
        }
    },[])

    const CreateUser=(email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password);
    }
    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const SignOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const AuthInfo={
        user,loading,CreateUser,SignIn,SignOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;