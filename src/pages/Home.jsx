import React from "react";
import { Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/profile.context";
import ManageStudent from "./ManageStudent";

export default function Home() {

  const {handleSignout} = useProfile()

  
  // window.location = "/addstudent"
  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={handleSignout}>Signout</button>
      
      <div className="main flex">
        <Sidebar />

        <Route exact  path="/">
          <AddStudent />
        </Route>

        <Route exact  path="/addstudent">
          <AddStudent />
        </Route>

     
        <Route exact path="/managestudent">
          <ManageStudent />
        </Route>
      </div>
    </div>
  );
}
