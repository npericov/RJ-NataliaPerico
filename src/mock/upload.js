import MOCK_DATA  from "./data.json" assert { type: 'json'}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzXvhRBVSxq1rg5aMp-RHIaduCMsAblZw",
    authDomain: "rj-natalia-perico.firebaseapp.com",
    projectId: "rj-natalia-perico",
    storageBucket: "rj-natalia-perico.appspot.com",
    messagingSenderId: "740462202486",
    appId: "1:740462202486:web:4c4aab9ba8d677bc1d5957"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})

