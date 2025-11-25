import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    }
    )

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authData = {
        user,
        setUser,
        createUser,
        login,
        logOut,
        signInWithGoogle

    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>

};

export default AuthProvider;