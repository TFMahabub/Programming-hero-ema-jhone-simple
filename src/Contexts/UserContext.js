import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const Auth = getAuth(app)





//--------------------------------------------
const UserContext = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  //create-user-
  const signUpUser = (email, password) =>{
    return createUserWithEmailAndPassword(Auth, email, password);
  }

  //signIn-user-
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  }

  //signOut-user-
  const signOutUser = () => {
    return signOut(Auth)
  }

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(Auth, currentUser =>{
      console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscrib();
  },[])

  const authInfo = { user, loading, setLoading, signUpUser, logInUser, signOutUser }
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;