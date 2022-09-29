import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useProfile } from "../context/profile.context";

export default function PublicRoute({ children, ...routeProps }) {

  
  const {profile} = useProfile();

 

  if (profile) {
    console.log("inside if");
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}
