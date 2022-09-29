import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyC10MdtBV_2YubLL4hWpsclCKnW22TCido",
  authDomain: "student-management-78901.firebaseapp.com",
  projectId: "student-management-78901",
  storageBucket: "student-management-78901.appspot.com",
  messagingSenderId: "49076702414",
  appId: "1:49076702414:web:4d0923b6fc02ee7668149f"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)