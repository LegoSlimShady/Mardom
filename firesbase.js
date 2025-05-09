// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-auth.js';

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

function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log('Signed up as:', user.email);
        })
        .catch((error) => {
            console.error('Sign up error:', error.message);
        });
}
// click register button 
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('registerButton');
  button.addEventListener('click', () => {
    alert('Button clicked!');
    signUp();
  });
});
