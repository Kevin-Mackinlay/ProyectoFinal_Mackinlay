import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBiyG9WLUx1mhintCncxTQQYnf_FSKFYu0",
  authDomain: "tienda-sports.firebaseapp.com",
  projectId: "tienda-sports",
  storageBucket: "tienda-sports.appspot.com",
  messagingSenderId: "925919581688",
  appId: "1:925919581688:web:8028aecc77f0303d80f20d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)