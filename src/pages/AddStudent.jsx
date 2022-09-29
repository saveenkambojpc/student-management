import React, { useState } from "react";
import { app, database } from "../misc/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Firebase Database
import { collection, addDoc } from "firebase/firestore";

const AddStudent = () => {
  const [data, setData] = useState({});
  const auth = getAuth();
  const [success, setSuccess] = useState(false);

  const collectionRef = collection(database, "students");

  const onChange = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const addData = (e) => {
    e.preventDefault();
    addDoc(collectionRef, data)
      .then(() => {
        setSuccess(true);
        setInterval(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className=" w-full  md:pr-5 pr-0 mx-">
      <div className="row flex justify-between md:px-2">
        <h5 className="text-lg font-semibold">Add Student</h5>
        <span className="font-semibold">25 July 2020 16:10</span>
      </div>

      <form className="form   " onSubmit={addData}>
        <div className="mt-5 flex flex-wrap justify-between">
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              type="text"
              name="firstname"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="First Name"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              type="text"
              name="middlename"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Middle Name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2 focus:ring-red-500 focus:border-red-500">
            <input
              type="text"
              name="lastname"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Last Name"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <select
              onChange={(e) => onChange(e)}
              name="class"
              required
              id=""
              defaultValue={"default"}
              className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
            >
              <option value="default" disabled>
                Select Class
              </option>

              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <select
              onChange={(e) => onChange(e)}
              name="division"
              id=""
              defaultValue={"default"}
              required
              className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
            >
              <option value="default" disabled>
                Select Division
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
          </div>

          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              required
              type="number"
              name="rollno"
              id=""
              onInput={(e) => (e.target.value = e.target.value.slice(0, 4))}
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Roll Number in Digits"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-between">
          <div className="form-item md:w-1/2 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              required
              type="text"
              name="address1"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Address Line 1"
            />
          </div>

          <div className="form-item md:w-1/2 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              name="address2"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Address Line 2"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              name="landmark"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Landmark"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              required
              type="text"
              name="city"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="City"
            />
          </div>
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
            <input
              onChange={(e) => onChange(e)}
              required
              type="number"
              name="pincode"
              id=""
              className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
              placeholder="Pincode"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap ">
          <div className="form-item md:w-1/3 w-full mb-4 md:px-2 ">
            <button
              type="submit"
              className="w-full bg-red-500 py-2 rounded text-white font-semibold hover:bg-red-700"
              value=""
            >
              Add Data
            </button>
          </div>

          {success && (
            <div className="form-item md:w-1/3 w-full mb-4 md:px-2 ">
              <div
                className="w-full text-red-500 uppercase font-semibold text-center py-2  "
                value=""
              >
                Successfull Added
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
