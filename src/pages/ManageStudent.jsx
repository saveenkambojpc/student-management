import React, { useEffect, useState } from "react";
import { app, database } from "../misc/firebaseConfig";
import "../style/ManageStudent.style.css";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { useModalState } from "../misc/custom-hooks";

import { collection, getDocs } from "firebase/firestore";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";

const ManageStudent = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(database, "students");
  const { open, handleOpen, handleClose } = useModalState();

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
  }, [data]);

  return (
    <div className=" w-full border ">
      
      <div className="row flex justify-between md:px-2">
        <h5>Manage Student</h5>
        <span>25 July 2020 16:10</span>
      </div>
      <div id="table">
        <table className="w-full mt-5">
          <thead>
            <tr className="px-10 py-2 rounded-t flex items-center text-left justify-start font-semibold bg-red-500 text-white">
              <th className="md:w-1/4">Name</th>
              <th className="md:w-1/4">Class</th>
              <th className="md:w-1/4">Roll No.</th>
              <th className="md:w-1/4 text-end">View/Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, i) => {
              return (
                <tr
                  key={student.id}
                  className="student-item px-10 flex justify-between  py-2"
                >
                  <td className="md:w-1/4">
                    {student.firstname} {student.lastname}
                  </td>
                  <td className="md:w-1/4">
                    {student.class}-{student.division}
                  </td>
                  <td className="md:w-1/4">{student.rollno}</td>
                  <td className="md:w-1/4  flex justify-end space-x-6  text-2xl text-red-500">
                    <ion-icon
                      name="eye-outline"
                      className="cursor-pointer"
                    ></ion-icon>

                    <EditModal student={student} />

                

                    <DeleteModal id={student.id} />
                  </td>
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
