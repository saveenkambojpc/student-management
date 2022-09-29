import React from "react";
import { useModalState } from "../misc/custom-hooks";
import { Modal, Button } from "flowbite-react";


import { doc, deleteDoc,  } from "firebase/firestore";
import { database } from "../misc/firebaseConfig";

const DeleteModal = ({id}) => {
  const { open, handleOpen, handleClose } = useModalState();


  const deleteData = (e) => {
    console.log("Update is called");
    e.preventDefault()
    const docToDelete = doc(database, "students", id);
    deleteDoc(docToDelete)
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
        name="trash-outline"
        onClick={handleOpen}
        class="cursor-pointer"
      ></ion-icon>

      {/* <Button onClick={handleOpen}>Toggle modal</Button> */}



      <Modal show={open} size="md" popup={true} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to remove this student?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteData}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={handleClose}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteModal;
