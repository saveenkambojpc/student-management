import React from "react";
import { Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/profile.context";
import ManageStudent from "./ManageStudent";

export default function Home() {
  const { signoutHandle } = useProfile();
  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={signoutHandle}>Signout</button>

      <div className="main flex">
        <Sidebar />
        <Route exact path="/addstudent">
          <AddStudent />
        </Route>
        <Route exact path="/managestudent">
          <ManageStudent />
        </Route>
      </div>
    </div>
  );
}
