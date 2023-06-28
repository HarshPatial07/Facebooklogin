import { useContext, createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, signInWithPopup,onAuthStateChanged,  signOut } from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState({})
    const logOut = () => {
        signOut(auth)
    }
    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);
            console.log('User', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ facebookSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}