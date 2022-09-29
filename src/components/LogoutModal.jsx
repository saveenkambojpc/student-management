import React from "react";
import { useModalState } from "../misc/custom-hooks";
import { Modal, Button } from "flowbite-react";

import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../misc/firebaseConfig";
import { useProfile } from "../context/profile.context";

const LogoutModal = () => {
  const { open, handleOpen, handleClose } = useModalState();

  const { signoutHandle } = useProfile();

  return (
    <>
      <button onClick={handleOpen} className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:text-white hover:font-semibold hover:bg-red-500 dark:hover:bg-red-700">
        <ion-icon name="log-out-outline" className="text-2xl"></ion-icon>

        <span className="ml-3">Logout</span>
      </button>

      <Modal show={open} size="md" popup={true} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={signoutHandle}>
                Yes, Logout
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

export default LogoutModal;
