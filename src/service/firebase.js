// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqrzci_gKy_xlHoMqYkCb_wyG4fGNpSRU",
  authDomain: "shopping-cart-coder.firebaseapp.com",
  projectId: "shopping-cart-coder",
  storageBucket: "shopping-cart-coder.appspot.com",
  messagingSenderId: "763402634705",
  appId: "1:763402634705:web:4faef9776110502b0c8cf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
