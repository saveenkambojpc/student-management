import React from "react";
import { Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/profile.context";
import ManageStudent from "./ManageStudent";
import LogoutModal from "../components/LogoutModal";

export default function Home() {

  


  
  return (
    <div>
    

      <div className="main md:flex md:mt-20">
        <Sidebar />
        

        <Route exact  path="/">
          <AddStudent  />
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
