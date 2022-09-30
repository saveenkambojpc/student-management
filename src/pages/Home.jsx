import React from "react";
import { Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/profile.context";
import ManageStudent from "./ManageStudent";

export default function Home() {

  const {profileDetails} = useProfile()

  


  
  return (
    <div>
      <header className="px-5 py-10">
        <div className="row flex justify-between items-center">
          <div className="text-gray-700 md:text-5xl text-3xl font-semibold">LOGO</div>
          <div className="border rounded md:px-10 px-5 py-2 md:mr-32">
          <ion-icon name="person-outline"></ion-icon>
            <span>{profileDetails.email}</span>
          </div>
        </div>
      </header>
    

      <div className="main md:flex ">
        <Sidebar  />
        

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
