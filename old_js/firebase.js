 //// Import the functions you need from the SDKs you need
 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 ////importa funcions de firebase ja escrites
 //import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
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
 const addElement = (nom, quantitat, preu) => {
  addDoc(collection(db, "productos"), {nom, quantitat, preu})
}

/*productos
  _____  _____   ____   _____ _    _ _______ ____   _____
 |  __ \|  __ \ / __ \ / ____| |  | |__   __/ __ \ / ____|
 | |__) | |__) | |  | | |    | |  | |  | | | |  | | (___
 |  ___/|  _  /| |  | | |    | |  | |  | | | |  | |\___ \
 | |    | | \ \| |__| | |____| |__| |  | | | |__| |____) |
 |_|    |_|  \_\\____/ \_____|\____/   |_|  \____/|_____/


 */
//crea i exporta (a index.js) la funció per aconseguir dades de la db
const getElement = () => getDocs(collection(db,"productos"))
//crea i exporta una funció per no tenir que exportar onSnapshot, collection i db al index.js
const onGetNew = (callback) => onSnapshot(collection(db,'productos'), callback )


/*auth
          _    _ _______ _    _
     /\  | |  | |__   __| |  | |
    /  \ | |  | |  | |  | |__| |
   / /\ \| |  | |  | |  |  __  |
  / ____ \ |__| |  | |  | |  | |
 /_/    \_\____/   |_|  |_|  |_|

*/


//import {getAuth,createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
//inicialitzar auth
const auth = getAuth()

// REGISTRAR
function registrar_now(){

    const email = registre.correu.value
    const password = registre.contra.value

    createUserWithEmailAndPassword(auth, email, password)
    //user credentials
    .then((cred) => {
        console.log('Nou usuari:', cred.user)
        registre.reset()
    })
    //missatge error
    .catch((err) => {
        console.log(err.message)
    })
}


//COMPROBACIO REPETICIO CONTRASEÑA
var samepass = Boolean(true);
if (document.querySelector('#signout')){
const registre = document.querySelector('#signout')

registre.addEventListener('submit', (e) => {
    e.preventDefault()
    if(samepass == true){
        registrar_now();
    }
    else{
        alert('Contraseñas No Coinciden');
    }
}
);
}


// TANCA SESSIÓ
if(document.querySelector('#logout')){
const logoutButton = document.querySelector('#logout')
logoutButton.addEventListener('click', () =>{
    signOut(auth)
        .then(() => {
            console.log('Has tancat sessió')
        })
    .catch((err) => {
        console.log(err.message)
    })
})
}
//LOGIN
if(document.querySelector('#signin')){
const iniciSessio = document.querySelector('#signin')
iniciSessio.addEventListener('click', (e) => {
    e.preventDefault()

    const email = iniciSessio.emailog.value
    const password = iniciSessio.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('Has entrat al teu compte:', cred.user)
    })
    .catch((err) => {
        console.log(err.message)
    })
})
}

//RECOVER
if(document.querySelector('#recovery')){
  const recoveracct = document.querySelector('#recovery')
}