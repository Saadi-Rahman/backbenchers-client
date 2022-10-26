// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCycwqDTBVPzYYaKva99JpXt0NuGWyUVQk",
  authDomain: "backbenchers-fd670.firebaseapp.com",
  projectId: "backbenchers-fd670",
  storageBucket: "backbenchers-fd670.appspot.com",
  messagingSenderId: "1029491061723",
  appId: "1:1029491061723:web:0836e20408d305fb8aedfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;