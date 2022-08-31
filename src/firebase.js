import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQIayzsk0SKPN7ISSMjJV2Wu3XYlSOtS0",
  authDomain: "react-restaurant-a6ee0.firebaseapp.com",
  projectId: "react-restaurant-a6ee0",
  storageBucket: "react-restaurant-a6ee0.appspot.com",
  messagingSenderId: "755296408049",
  appId: "1:755296408049:web:51deb48d6d3e8ede26f450",
  measurementId: "G-YGNRNN9E9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
