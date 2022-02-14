 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 //importa funcions de firebase ja escrites
 import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyA_fQCKaRmwhlDtnSXVMeUMhEGQKL2oaws",
    authDomain: "igcomponentes.firebaseapp.com",
    projectId: "igcomponentes",
    storageBucket: "igcomponentes.appspot.com",
    messagingSenderId: "796171512291",
    appId: "1:796171512291:web:d72a2312d0429fcf15d8d6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
//Initialize database (firestore)
 const db = getFirestore()
 //crea i exporta (a index.js) la funció per afegir elements a la db mitjanÇant input
 export const addElement = (nom, quantitat, preu) => {
  addDoc(collection(db, "productos"), {nom, quantitat, preu})
}

 //crea i exporta (a index.js) la funció per aconseguir dades de la db
export const getElement = () => getDocs(collection(db,"productos"))
//crea i exporta una funció per no tenir que exportar onSnapshot, collection i db al index.js
export const onGetNew = (callback) => onSnapshot(collection(db,'productos'), callback )
