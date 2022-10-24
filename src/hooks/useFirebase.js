import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

// import { firebaseConfig } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export default function useFirebase(config) {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const app = initializeApp(config);
    setAuth(getAuth(app));
  }, [config])

  useEffect(() => {
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged(authUser => {
        console.log(authUser);
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      })

      return () => unsubscribe();
    }
  }, [auth])

  const login = async () => {
    await signInWithPopup(auth, googleProvider);
  }

  const logout = async () => {
    await signOut(auth);
  }

  return {
    user,
    firebase: {
      auth: {
        login,
        logout
      }
    }
  };
}
