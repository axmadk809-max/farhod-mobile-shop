import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyAOeIAWd_3GYc9Z4MmIpVIn5w3V1uQocrE",
authDomain: "farhod-mobile-shop.firebaseapp.com",
databaseURL: "https://farhod-mobile-shop-default-rtdb.firebaseio.com",
projectId: "farhod-mobile-shop",
storageBucket: "farhod-mobile-shop.firebasestorage.app",
messagingSenderId: "322049527568",
appId: "1:322049527568:web:3cad01fe1797378a739f95"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.saveProduct = function(){

const name=document.getElementById("name").value;
const price=document.getElementById("price").value;
const image=document.getElementById("image").value;

push(ref(db,"products"),{
name:name,
price:price,
image:image
});

document.getElementById("status").innerHTML="✅ Saqlandi";

document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("image").value="";
}