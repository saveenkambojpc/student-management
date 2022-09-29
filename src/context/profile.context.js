import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const profileContext = createContext();

export function ProfileProvider({ children }) {

  const [profile, setProfile] = useState(true);

  const auth = getAuth();

  const signoutHandle = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }



  useEffect(() => {
    console.log("inside profile context")
    const authUnsub = onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setProfile(true)
        console.log("logged in")
        // ...
      } else {
        setProfile(false)

      }
    });

    return () => {
      authUnsub();
    }
  }, [])
  const value = { profile, signoutHandle }

  return (<profileContext.Provider value={value}>
    {children}
  </profileContext.Provider>
  )
}

export const useProfile = () => useContext(profileContext);