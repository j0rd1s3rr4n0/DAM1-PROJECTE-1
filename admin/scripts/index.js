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



//QUERIES------------------------------------------------------------------------------------------------------------------

const showById = document.getElementById('showIdForm')

const showByCategory = document.getElementById('showCtgForm')


const docRef = doc(db, 'carrito', showById.getById.value,)




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

    setDoc(doc(db, "carrito", productId.value), {
        nombre: addProduct.prodName.value,
        descripcion: addProduct.prodDesc.value,
      })
      .then(() => {
        addProduct.reset()
    })
})
*/
//delete-------------------------------------------------------------------------------------------------------------------
const deleteProduct = document.getElementById('delProd')
deleteProduct.addEventListener('submit', (e) => {
    e.preventDefault
    const  deleteRef = doc(db, 'carrito', deleteProduct.delById.value)

    deleteDoc(deleteRef)
    .then(() => {
        deleteProduct.reset
    })
})

//UPDATE---------------------------------------------------------------------------------------------------------------------
const updateProduct = document.getElementById('updProd')
//dona un event al formulari
updateProduct.addEventListener('submit', (e) => {
    e.preventDefault
    const  updateRef = doc(db, 'carrito', fbId.value)

    
    var InputCategoria = document.getElementById('updCategoria')
    var InputId = document.getElementById('updId')
    var InputNombre = document.getElementById('updName')
    var InputDesc = document.getElementById('updDesc')
    var InputPrecio = document.getElementById('updPrice')
    var InputImg1 = document.getElementById('updimg1')
    var InputImg2 = document.getElementById('updimg2')
    var InputImg3 = document.getElementById('updimg3')


    //UPDCATEGORIA
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            categoria: updateProduct.updCategoria.value, 
        })
    }
    //UPDID
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            idproducto: updateProduct.updId.valueAsNumber, 
        })
    }
    //UPDNOMBRE
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            nombre: updateProduct.updName.value, 
        })
    }
    //UPDDESCRIPCION    

    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            descripcion: updateProduct.updDesc.value, 
        })
    }
    //UPDPRECIO
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            precio: updateProduct.updPrice.valueAsNumber, 
        })
    }

    //UPDIMAGEN1
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            images: {
                0: updateProduct.updimg1.value,
            }
        })
    }
    //UPDIMAGEN2
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            images: {
                1: updateProduct.updimg2.value,
            }
        })
    }
    //UPDIMAGEN3
    if(InputNombre.value.trim().length == 0) {
        console.log('emptyField')

    }
    else {
        updateDoc (updateRef, {
            images: {
                2: updateProduct.updimg3.value,
            }
        })
        
    }
   /* 
    .then(() => {
        updateProduct.reset
    })
    .catch((error) => {
        alert("ERROR" +error)
    })
*/

})


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

    var ref = doc(db, "carrito", 'B')

        const docSnap = await getDoc(ref);

    if(docSnap.exists()){
        myimg.src = docSnap.data().image2;
    }
}

UpBtn.onclick = UploadProcess;
DownBtn.onclick = GetImageFromFirestore;