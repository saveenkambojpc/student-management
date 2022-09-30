import React, { useEffect, useState } from "react";
import { app, database } from "../misc/firebaseConfig";
import "../style/ManageStudent.style.css";
// import { collection, getDocs } from "firebase/firestore";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import ViewModal from "../components/ViewModal";

import { ref, onValue } from "firebase/database";

const ManageStudent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    const Ref = ref(database, "students/");
    onValue(Ref, (snapshot) => {
      const res = snapshot.val();
      if (res) {
        const dat = Object.keys(res).map((item) => {
          return { ...res[item], id: item };
        });
        setData(dat);
      } else {
        setData([]);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderSpiner = () => {
    return (
      <div className=" w-full flex justify-center mt-20" role="status">
        <svg
          className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <div className=" w-full md:pr-5 px-3">
      <div className="font-semibold row flex justify-between">
        <h5 className="text-lg">Manage Student</h5>
        <span>25 July 2020 16:10</span>
      </div>
      {loading && renderSpiner()}

      {!loading && data.length == 0 && (
        <div className="text-center mt-10">
          Nothing to Show. Please first add student ...
        </div>
      )}

      {!loading && data.length > 0 && (
        <div id="table">
          <table className="w-full mt-5 ">
            <thead>
              <tr className="md:px-10 px-2  py-2 rounded-t flex items-center text-left justify-start font-semibold bg-red-500 text-white">
                <th className="w-1/4">Name</th>
                <th className="w-1/4">Class</th>
                <th className="w-1/4">Roll No.</th>
                <th className="w-1/4 text-end">View/Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, i) => {
                return (
                  <tr
                    key={student.id}
                    className="student-item md:px-10 px-2  flex justify-between  py-2"
                  >
                    <td className="md:w-1/4">
                      {student.firstname} {student.lastname}
                    </td>
                    <td className="md:w-1/4">
                      {student.class}-{student.division}
                    </td>
                    <td className="md:w-1/4">{student.rollno}</td>
                    <td className="md:w-1/4  flex justify-end md:space-x-6 space-x-3  text-2xl text-red-500">
                      <ViewModal student={student} />

                      <EditModal student={student} />

                      <DeleteModal id={student.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageStudent;
