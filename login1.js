// Initialize Firebase
var firebaseConfig = {
  aapiKey: "AIzaSyBJdcRPPluclsFGU47Qq6f5VYBmd4t8SBQ",
  authDomain: "login-and-register-fbf1d.firebaseapp.com",
  databaseURL: "https://login-and-register-fbf1d-default-rtdb.firebaseio.com",
  projectId: "login-and-register-fbf1d",
  storageBucket: "login-and-register-fbf1d.appspot.com",
  messagingSenderId: "209147316507",
  appId: "1:209147316507:web:0690ab1456bcca2f9f2bbe"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Function to register a user
function register() {
  const fullName = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const favouriteSong = document.getElementById("favourite_song").value;
  const milkBeforeCereal = document.getElementById("milk_before_cereal").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      const userId = userCredential.user.uid;

      database.ref("users/" + userId).set({
        full_name: fullName,
        email: email,
        favourite_song: favouriteSong,
        milk_before_cereal: milkBeforeCereal
      });

      console.log("User registered successfully.");
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
}

// Function to login a user
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User logged in successfully
      console.log("User logged in successfully.");
    })
    .catch((error) => {
      console.error("Error logging in user:", error);
    });
}