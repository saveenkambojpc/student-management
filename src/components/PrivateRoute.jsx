import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

import { useProfile } from "../context/profile.context";

export default function PrivateRoute({ children, ...routeProps }) {

  const {profile} = useProfile();

  console.log('profile is ', profile)


  if (!profile) {
    return <Redirect to="/login" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}
