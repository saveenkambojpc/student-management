import React, {useState} from "react";
import { app, database } from "../misc/firebaseConfig";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Firebase Database
import { collection, addDoc } from "firebase/firestore";

const AddStudent = () => {
  const [data, setData] = useState({});
  const auth = getAuth();

  const collectionRef = collection(database,'students')


  const onChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
    console.log(data)
  };

  const addData = () =>{
    addDoc(collectionRef,data)
    .then(()=>{
      alert("Data added")
    })
    .catch(error => {
      alert(error.message)
    })
  }


  return (
    <div className=" w-full border md:px-10">
      <div className="row flex justify-between md:px-2">
        <h5>Add Student</h5>
        <span>25 July 2020 16:10</span>
      </div>

      <div className="form   ">
        <div className="mt-5 flex flex-wrap justify-between">
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              type="text"
              name="firstname"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="First Name"
              onChange={e=>onChange(e)}
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              type="text"
              name="middlename"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Middle Name"
              onChange={e=>onChange(e)}

            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2 focus:ring-red-500 focus:border-red-500">
            <input
              type="text"
              name="lastname"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Last Name"
              onChange={e=>onChange(e)}

            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <select
              onChange={e=>onChange(e)}
              name="class"
              id=""
              className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
            >
              <option value="" disabled selected>
                Select Class
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <select
              onChange={e=>onChange(e)}
              name="division"
              id=""
              className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
            >
              <option value="" disabled selected>
                Select Division
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="rollno"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Roll Number in Digits"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-between">
          <div className="form-item md:w-1/2 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="address1"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Address Line 1"
            />
          </div>

          <div className="form-item md:w-1/2 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="address2"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Address Line 2"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="landmark"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Landmark"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="city"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="City"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={e=>onChange(e)}

              type="text"
              name="pincode"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Pincode"
            />
          </div>
 
        </div>
        <div className="mt-5 flex flex-wrap justify-between">
        <div className="form-item md:w-1/3 w-full mb-4 md:px-2 ">
            <button onClick={addData} className="w-full bg-red-500 py-2 rounded text-white text-semibold hover:bg-red-700">
              Add Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
