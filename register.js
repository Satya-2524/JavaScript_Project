// Import Firebase core and auth modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRfH3fPHnM7QJfichDrkrP6tzhD4sIvBQ",
  authDomain: "recipe-app-4f602.firebaseapp.com",
  projectId: "recipe-app-4f602",
  storageBucket: "recipe-app-4f602.appspot.com",  // ✅ Fixed typo here
  messagingSenderId: "156368862644",
  appId: "1:156368862644:web:7e0f1b15a457bbdbb606e1",
  measurementId: "G-MQXHXBEKYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Handle form submission
const form = document.getElementById("registerForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Account created successfully!");
      window.location.href="./login.html";
      form.reset();  // Optional: Clear the form
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error:", error);
      alert("Error: " + errorMessage);
    });
});
