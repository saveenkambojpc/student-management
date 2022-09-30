import React, { createContext, useContext, useEffect,  useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const profileContext = createContext();

export function ProfileProvider({ children }) {

  const [profile, setProfile] = useState(true);

  const [profileDetails, setProfileDetails] = useState({})
  

  const auth = getAuth();

  const signoutHandle = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error.message)
    });
  }






  useEffect(() => {
    const authUnsub = onAuthStateChanged(auth, (user) => {
      if (user) {

        setProfile(true)
        setProfileDetails(user)
        // ...
      } else {
        setProfile(false)

      }
    });

    return () => {
      authUnsub();
    }
  }, [auth])
  const value = { profile, signoutHandle, profileDetails }

  return (<profileContext.Provider value={value}>
    {children}
  </profileContext.Provider>
  )
}

export const useProfile = () => useContext(profileContext);