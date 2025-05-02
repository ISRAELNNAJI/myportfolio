import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPP0w0vHjCwHCENEoF9omW0DU7rdrcNSc",
  authDomain: "israelportfolio-7ec62.firebaseapp.com",
  projectId: "israelportfolio-7ec62",
  storageBucket: "israelportfolio-7ec62.firebasestorage.app",
  messagingSenderId: "272211209413",
  appId: "1:272211209413:web:493a4f02d419af58ce54ac",
  measurementId: "G-VRFLDKNGVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
