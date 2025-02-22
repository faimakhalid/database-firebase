
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  const firebaseConfig = {
    apiKey: "AIzaSyDQuSDF8RDEcOZIzS4dbqFhOS57F2-9UVU",
    authDomain: "fir-601e3.firebaseapp.com",
    projectId: "fir-601e3",
    storageBucket: "fir-601e3.firebasestorage.app",
    messagingSenderId: "1035488143978",
    appId: "1:1035488143978:web:4153938b1259db7147f813",
    measurementId: "G-ZGP71ZWPG3"
  };

 
  const app = initializeApp(firebaseConfig);
 const db = getDatabase(app)
document.getElementById("Submit").addEventListener("click",function(event) {
    event.preventDefault()
    set(ref(db,'student data/' + document.getElementById("nameInput").value),{
        username:document.getElementById("name").value,
       phonenumber:document.getElementById("number").value,
        email:document.getElementById("email").value
    })
    alert('data saved successfully');

})
