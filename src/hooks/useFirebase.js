import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// import { firebaseConfig } from "./firebaseConfig";

const providers = {
  google: new GoogleAuthProvider(),
  facebook: new FacebookAuthProvider()
}

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
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      })

      return () => unsubscribe();
    }
  }, [auth])

  const login = async provider => {
    await signInWithPopup(auth, providers[provider.toLowerCase()]);
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
