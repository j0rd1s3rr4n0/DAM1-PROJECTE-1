 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 //importa funcions de firebase ja escrites
 import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCqNTOh06l96NATsITOvRO8paxNX4G5NGg",
   authDomain: "ecom-projecte.firebaseapp.com",
   projectId: "ecom-projecte",
   storageBucket: "ecom-projecte.appspot.com",
   messagingSenderId: "725675347573",
   appId: "1:725675347573:web:908afefa91384fa064323c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
//Initialize database (firestore)
 const db = getFirestore()
 //crea i exporta (a index.js) la funció per afegir elements a la db mitjanÇant input
 export const addElement = (nom, quantitat, preu) => {
     addDoc(collection(db, "carrito"), {nom, quantitat, preu})
 }

 //crea i exporta (a index.js) la funció per aconseguir dades de la db
export const getElement = () => getDocs(collection(db,"carrito"))
//crea i exporta una funció per no tenir que exportar onSnapshot, collection i db al index.js
export const onGetNew = (callback) => onSnapshot(collection(db,'carrito'), callback )
