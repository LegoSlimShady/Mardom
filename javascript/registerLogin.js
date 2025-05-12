import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM41cuICXy5UwcO67f8H8_8EdszRe0FFo",
  authDomain: "mardom-mar5.firebaseapp.com",
  projectId: "mardom-mar5",
  storageBucket: "mardom-mar5.firebasestorage.app",
  messagingSenderId: "446946894119",
  appId: "1:446946894119:web:33db8668ed97fc56060902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



//from geeksforgeeks https://www.geeksforgeeks.org/getting-started-with-firebase-email-password-authentication/
function logIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('Signed in as:', user.email);
            alert('Signed in as:'+ user.email);

            window.location.assign("index.html");

        })
        .catch((error) => {
            console.error('Sign in error:', error.message);
            alert('Sign in error:'+ error.message);

        });
}


function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !username || !password || !confirmPassword) {
        alert("INPUT ERROR: Content is empty, please try again");
        return;
    }

    if (password !== confirmPassword) {
        alert("Confirmation password must match password");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log('Signed up as:', user.email);
            alert('Signed up as:' + user.email);

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    email: email,
                    username: username
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

            window.location.assign("login.html");
        })
        .catch((error) => {
            console.error('Sign up error:', error.message);
            alert('Sign up error:' + error.message);
        });
}

document.addEventListener('DOMContentLoaded', () => {
  // click register button 
  const registerButton = document.getElementById('registerButton');
  if (registerButton) {
    registerButton.addEventListener('click', () => {
      alert('Register button clicked!');
      register();
    });
  }
// click login button 
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      alert('Login button clicked!');
      logIn();
    });
  }
});

