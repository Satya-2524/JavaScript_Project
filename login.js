  // Import Firebase core and auth modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRfH3fPHnM7QJfichDrkrP6tzhD4sIvBQ",
    authDomain: "recipe-app-4f602.firebaseapp.com",
    projectId: "recipe-app-4f602",
    storageBucket: "recipe-app-4f602.appspot.com", 
    messagingSenderId: "156368862644",
    appId: "1:156368862644:web:7e0f1b15a457bbdbb606e1",
    measurementId: "G-MQXHXBEKYZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  // Handle login form submission
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed in:", user);
      alert("Logged in successfully!");
      window.location.href = "./index.html";  // Redirect after login
    } catch (error) {
      console.error("Login error:", error);
      alert("Error: " + error.message);
    }
  });

