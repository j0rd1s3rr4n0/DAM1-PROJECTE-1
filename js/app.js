 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzvtHwBSTz1WntOeiu9c6At0TlC3Nx0pM",
    authDomain: "test-59f9a.firebaseapp.com",
    projectId: "test-59f9a",
    storageBucket: "test-59f9a.appspot.com",
    messagingSenderId: "788179962431",
    appId: "1:788179962431:web:79c32da408dd6ec740c68a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function escribirDatos(){
    firebase.database().ref("User").set({
      name: document.getElementById("nameField").value,
      age: document.getElementById("ageField").value
    });
  }