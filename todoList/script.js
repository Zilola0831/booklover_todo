import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
    set} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBruhUDwpFVknbwb0RaWwQ7trgHu9Ymd_I",
  authDomain: "user-info-a5c31.firebaseapp.com",
  projectId: "user-info-a5c31",
  storageBucket: "user-info-a5c31.appspot.com",
  messagingSenderId: "528031737053",
  appId: "1:528031737053:web:a0a641ba1cd5b9823fa734",
  measurementId: "G-Y9CRCJ4S0B"
};
const app=initializeApp(firebaseConfig);
const db=getDatabase();
set(ref(db, "todos/"),{
    ism: "Zilola",
    phone: "+998900731326"
})
