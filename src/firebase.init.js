// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6UYdbL4-3iTH78xe0h4tqEN-7Iib31Q",
  authDomain: "iot-dashboard-react.firebaseapp.com",
  projectId: "iot-dashboard-react",
  storageBucket: "iot-dashboard-react.appspot.com",
  messagingSenderId: "647605755898",
  appId: "1:647605755898:web:71ee1fe8bec83fa23d4e43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;