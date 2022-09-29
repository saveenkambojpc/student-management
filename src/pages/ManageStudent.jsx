import React, { useEffect, useState } from "react";
import { app, database } from "../misc/firebaseConfig";
import "../style/ManageStudent.style.css";

import { collection, getDocs } from "firebase/firestore";

const ManageStudent = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(database, "students");

  // Fetch Student from db
  const getData = () => {
    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" w-full border ">
      <div className="row flex justify-between md:px-2">
        <h5>Manage Student</h5>
        <span>25 July 2020 16:10</span>
      </div>
      <div id="table">
        <table className="w-full mt-5">
          <thead className="px-10 py-2 rounded-t flex items-center text-left justify-start font-semibold bg-red-500 text-white">
            <th class="md:w-1/4">Name</th>
            <th class="md:w-1/4">Class</th>
            <th class="md:w-1/4">Roll No.</th>
            <th class="md:w-1/4 text-end">View/Edit/Delete</th>
          </thead>
          <tbody className="">
            {data.map((student) => {
              return (
                <tr className="student-item px-10 flex justify-between  py-2">
                  <td class="md:w-1/4">{student.firstname} {student.lastname}</td>
                  <td class="md:w-1/4">{student.class}-{student.division}</td>
                  <td class="md:w-1/4">{student.rollno}</td>
                  <td class="md:w-1/4 text-end">Bruce Banner</td>
                </tr>
              );
            })} 
          </tbody>
        </table>

      
      </div>
    </div>
  );
};

export default ManageStudent;
