//Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import{
    getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc, setDoc,
    query, where,
    orderBy, serverTimestamp,
    getDocs, updateDoc, getDoc
    
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'

import { 
    getStorage, ref as sRef, uploadBytesResumable, getDownloadURL, 

} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js"

import {
    getAuth,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"

//admin page design
const container = document.getElementById('container')
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('apartado')) {
       //desplega el menu
        e.target.parentElement.classList.toggle('scale')
        //gira la icona de la fletxa
        e.target.children[1].classList.toggle('rotate')
        /*treu el border-radius a l'ultim apartat
        if(e.target.classList.contains('apartado', 'last-part')) {
            e.target.Element.toggle('unround')
        }  */  
    }
    })

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


//RECIBIR DB ------------------------------------------------------------------------------------------------------------
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





//ADD----------------------------------------------------------------------------------------------------------------------
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

    setDoc(doc(db, "productos", productId.value), {
        nombre: addProduct.prodName.value,
        descripcion: addProduct.prodDesc.value,
      })
      .then(() => {
        addProduct.reset()
    })
})
*/

//UPDATE-------------------------------------------------------------------------------------------------------------------
/*ESTE ES EL BUENO
document.getElementById("updBtn").addEventListener("click", updateFunction);
function updateFunction() {
  var updID = document.getElementById('fbId')
  var preu = document.getElementById('updPrice')
  //var updCategoria = document.getElementById('updCategoria')
  updateDoc(doc(db, "carrito", updID.value), {
        precio: preu.value,
        //categoria : updCategoria.value
  });

  updID.value = ''
  preu.value = ''
}
*/
document.getElementById("updBtn").addEventListener("click", updateFunction);
function updateFunction() {
  var firebaseID = document.getElementById('fbId')
  var updCategoria = document.getElementById('updCategoria')
  var updId = document.getElementById('updId')
  var updName = document.getElementById('updName')
  var updDesc = document.getElementById('updDesc')
  var updPreu = document.getElementById('updPrice')
  //var updImg1 = document.getElementById('updimg1')
  //var updImg2 = document.getElementById('updimg2')
  //var updImg3 = document.getElementById('updimg3')
  

    //CATEGORIA
    if(!updCategoria.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        categoria: updCategoria.value,
    });
    }
    //ID PRODUCTE
    if(!updId.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        idproducto: updId.value,
    });
    }

    //NOM PRODUCTE
    if(!updName.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        nombre: updName.value,
    });
    }
    //DESCRIPCIO
    if(!updDesc.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        descripcion: updDesc.value,
    });
    }

    //PREU
    if(!updPreu.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        precio: updPreu.value,
    });
    }
    
    /*IMATGES
    if(!updImg1.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        images: {
            0: updImg1.value,
        }
    });
    }
    if(!updImg2.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        images: {
            1: updImg2.value,
        }
    });
    }
    if(!updImg3.value.trim().length == 0){
        updateDoc(doc(db, "carrito", firebaseID.value), {
        images: {
            2: updImg3.value,
        }
    });
    }
    */

    else {
     console.log("all values are empty")
    }

firebaseID.value = ''
updCategoria.value = ''
updId.value = ''
updName.value = ''
updDesc.value = ''
updPreu.value = ''


}

//delete-------------------------------------------------------------------------------------------------------------------

document.getElementById("Delbtn").addEventListener("click", myFunction);
function myFunction() {
  var idDoc = document.getElementById('delById')
  deleteDoc(doc(db, "carrito", idDoc.value));
  idDoc.value = ''
}
//STORAGE---------------------------------------------------------------------------------------------------------------------
//variables i refs
var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');
var SelBtn = document.getElementById('selbtn');
var UpBtn = document.getElementById('upbtn');
var DownBtn = document.getElementById('downbtn');

var input = document.createElement('input');

input.type = 'file';

input.onchange = e => {
    files =e.target.files;
    var extention = GetFileExt(files[0]);
    var name= GetFileName(files[0]);

    namebox.value= name;
    extlab.innerHTML = extention;

    reader.readAsDataURL(files[0]);
}

reader.onload = function(){
    //agafa el link del lector i el posa al src de la imatge
    myimg.src = reader.result;
}

//SELECCIONAR
SelBtn.onclick = function(){
    input.click();
}

function GetFileExt(file){//poss err
    //agafa l'extensió separant l'string per el punt
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length-1), (temp.length));
    return '.' + ext[0];
} 

function GetFileName(file){
    var temp = file.name.split('.');
    var fname = temp.slice(0,-1).join('.');
    return fname;

}

//PENJAR imatge en l'storage
async function UploadProcess() {
    var ImgToUpload = files[0];
    var ImgName= namebox.value + extlab.innerHTML; //CHECK

    const metaData = {
        contentType : ImgToUpload.type
    }

    const storage= getStorage();

    const stroageRef = sRef (storage, "Images/" +ImgName);
    const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);

    //mostra el progres de l'upload y detecta si s'ha penjat correctament
UploadTask.on('state-changed', (snapshot)=> {
    var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    proglab.innerHTML = "Upload" + progess + "%";
},
(error) => {
    alert("error: image not uploaded!");
},

()=>{
    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
        console.log(downloadURL);
    });
}
);
}
UpBtn.onclick= UploadProcess;

//botó retrieve, posant l'id del document et retorna la imatge seleccionada


async function GetImageFromFirestore(){

    var ref = doc(db, "productos", 'B')

        const docSnap = await getDoc(ref);

    if(docSnap.exists()){
        myimg.src = docSnap.data().image2;
    }
}

UpBtn.onclick = UploadProcess;
DownBtn.onclick = GetImageFromFirestore;