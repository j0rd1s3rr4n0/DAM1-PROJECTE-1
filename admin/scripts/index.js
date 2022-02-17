//Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import{
    getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc, setDoc,
    query, where,
    orderBy, serverTimestamp,
    getDocs, updateDoc
    
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'

import { 

} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js"

//admin page design

/*Empieza el js de Alex*/ 
function  displayventa{
const flexa1 = document.getElementById('flexa')
const ventas = document.getElementById('ventas')



}


/*Acaba el js de Alex*/ 
//Config  
const firebaseConfig = {
    apiKey: "AIzaSyA_fQCKaRmwhlDtnSXVMeUMhEGQKL2oaws",
    authDomain: "igcomponentes.firebaseapp.com",
    projectId: "igcomponentes",
    storageBucket: "igcomponentes.appspot.com",
    messagingSenderId: "796171512291",
    appId: "1:796171512291:web:d72a2312d0429fcf15d8d6"
  };

//Inicialitzar firebase
const app = initializeApp(firebaseConfig);

//Inicialitzar serveis
const db = getFirestore()

//referencia coleccions
const colProductos = collection(db,'productos')
const colCarrito= collection(db,'carrito')

//RECIBIR DB
getDocs(colCarrito)
  .then((snapshot) => {
      let productos = []
      snapshot.docs.forEach((doc) => {
          productos.push({ ...doc.data(), id: doc.id })
      })
      console.log(productos)
})

.catch(err => {
    console.log(err.message)
})

//add
const addProduct = document.getElementById('addProd')

addProduct.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc((colCarrito), {
        categoria: addProduct.prodName.value,
        idproducto: addProduct.prodId.valueAsNumber,
        nombre: addProduct.prodName.value,
        descripcion: addProduct.prodDesc.value,
        precio: addProduct.prodPrice.valueAsNumber,
        images: {
            0: addProduct.img1.value,
            1: addProduct.img2.value,
            2: addProduct.img3.value,
        }
      })
      .then(() => {
        addProduct.reset()
    })
})
/*CUSTOM ID
let productId = document.getElementById('prodId')

addProduct.addEventListener('submit', (e) => {
    e.preventDefault()

    setDoc(doc(db, "carrito", productId.value), {
        nombre: addProduct.prodName.value,
        descripcion: addProduct.prodDesc.value,
      })
      .then(() => {
        addProduct.reset()
    })
})
*/
//delete
const deleteProduct = document.getElementById('delProd')
deleteProduct.addEventListener('submit', (e) => {
    e.preventDefault
    const  deleteRef = doc(db, 'carrito', deleteProduct.delById.value)

    deleteDoc(deleteRef)
    .then(() => {
        deleteProduct.reset
    })
})

//update
/*arreglandolo, no me hace el update bien
const updateProduct = document.getElementById('updProd')
//dona un event al formulari
updateProduct.addEventListener('submit', (e) => {
    e.preventDefault
    const  updateRef = doc(db, 'carrito', updateProduct.fbId.value)

    updateDoc(updateRef, {
        categoria: updateProduct.updName.value,
        idproducto: updateProduct.updId.valueAsNumber,
        nombre: updateProduct.updName.value,
        descripcion: updateProduct.updDesc.value,
        precio: updateProduct.updPrice.valueAsNumber,
        images: {
            0: updateProduct.updimg1.value,
            1: updateProduct.updimg2.value,
            2: updateProduct.updimg3.value,
        }
    })
    //resetja el formulari un cop s'ha fet el submit
    .then(() => {
        updateProduct.reset
    })
    .catch((error) => {
        alert("ERROR" +error)
    })
    

})
*/