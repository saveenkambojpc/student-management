import React, { useState, useEffect } from "react";
import { useModalState } from "../misc/custom-hooks";
import { Modal, Button } from "flowbite-react";

import { doc, updateDoc } from "firebase/firestore";
import { database } from "../misc/firebaseConfig";

const ViewModal = ({ student }) => {
  const { open, handleOpen, handleClose } = useModalState();
 

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
    class:_class
  } = student;



  return (
    <>
      <ion-icon
        name="eye-outline"
        onClick={handleOpen}
        class="cursor-pointer"
      ></ion-icon>

      <Modal show={open} size="xl" popup={true} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">

            <div className="">
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Name</label>
                    <p>{firstname} {middlename} {lastname}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Roll No</label>
                    <p>{rollno}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Class</label>
                    <p>{_class}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Division</label>
                    <p>{division}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Address</label>
                    <p>{address1}, {address2}</p>
                </div>
           
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Landmark</label>
                    <p>{landmark ? landmark : "-"}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">City</label>
                    <p>{city}</p>
                </div>
                <div className="py-3 mb-1 bg-red-50 px-2 border rounded flex justify-between">
                    <label htmlFor="">Pincode</label>
                    <p>{pincode}</p>
                </div>

   

            </div>


            <div className="flex justify-center gap-4">
              <Button type="submit" color="failure" onClick={handleClose}>
                Close
              </Button>
         
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal


