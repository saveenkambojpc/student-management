import React, { useState, useEffect } from "react";
import { useModalState } from "../misc/custom-hooks";
import { Modal, Button } from "flowbite-react";

import { doc, updateDoc } from "firebase/firestore";
import { database } from "../misc/firebaseConfig";

const EditModal = ({ student }) => {
  const { open, handleOpen, handleClose } = useModalState();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(student);
  }, []);

  const {
    firstname,
    lastname,
    middlename,
    division,
    address1,
    address2,
    landmark,
    rollno,
    city,
    pincode,
  } = data;

  const onChange = (event) => {
    console.log("On Change run");
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const updateData = (e) => {
    console.log("Update is called");
    e.preventDefault()
    const docToUpdate = doc(database, "students", student.id);
    updateDoc(docToUpdate, data)
      .then(() => {
        handleClose()
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <ion-icon
        name="create-outline"
        onClick={handleOpen}
        class="cursor-pointer"
      ></ion-icon>

      <Modal show={open} size="5xl" popup={true} onClose={handleClose}>
      <Modal.Header>
            Edit a Student
            </Modal.Header>
        <Modal.Body>
          <form className="text-center" onSubmit={updateData}>
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
                  value={firstname}
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
                  value={middlename}
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
                  value={lastname}
                />
              </div>
              <div className="form-item md:w-1/3 w-full mb-4 md:px-2">
                <select
                  onChange={(e) => onChange(e)}
                  name="class"
                  required
                  id=""
                  value={student.class}
                  className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
                >
                  <option value="" disabled >
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
                  required
                  className="text-[#6b728f] focus:ring-red-500 focus:border-red-500 border-gray-300 rounded w-full"
                  value={division}
                >
                  <option value="" disabled>
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
                  value={rollno}
                  id=""
                  onInput={(e) => e.target.value = e.target.value.slice(0, 4)}
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
                  value={address1}
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
                  value={address2}
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
                  value={landmark}
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
                  value={city}
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
                  value={pincode}
                  id=""
                  className="border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500"
                  placeholder="Pincode"
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button type="submit" color="failure">
                Update
              </Button>
         
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
