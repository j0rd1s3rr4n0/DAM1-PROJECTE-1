////importa funcions de firebase,js
//import {addElement, getElement, onGetNew} from './firebase.js';

const CAMBIARCODIGO = document.getElementById('change');

function delcookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Set a Cookie

function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        let cook = document.cookie.split('=');
        console.log(cook[0]);
        cook[1]=cook[1].replace('$','=').replace('$','=');
        console.log(cook[1]);
}
function generarCookieRandom(length,type) {
    switch(type){
        case 'num':
            characters = "0123456789";
            break;
        case 'alf':
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'rand':
            //FOR ↓
            break;
        default:
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
    }
    var pass = "";
    for (i=0; i < length; i++){
        if(type == 'rand'){
            pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
        }else{
            pass += characters.charAt(Math.floor(Math.random()*characters.length));   
        }
    }
    return pass;
}
// Apply setCookie
if(!document.cookie){
    let b = generarCookieRandom(11); //TIENE 3.684227838451159e+64 combinaciones es temporal
    let username = btoa(b).replace('=','$').replace('=','$');
    setCookie('username', username, 30);
}
else{
    if(document.cookie=''){
    let b = generarCookieRandom(11,'num');
    let username = btoa(b).replace('=','$').replace('=','$');
    setCookie('username', username, 30);
    }
}


function IdPicker(idda){
    if(idda){
        document.getElementById(idda).style.display='inline';
    }
    //document.getElementById(idda).removeAttr( 'style' );
}
// AQUESTA FUNCIO FA QUE ES MOSTRI VISIBLE CADA PRODUCTE CAD X SEGONS
function noinvi (){
    let i = 1;
    let max = 25;
    let idInterval=setInterval(() => {
        if(i==max) clearInterval(idInterval);
        else{
            //let idd = "invi"+i;
            let idd = i;
            console.log('Mostrando '+idd)
            setTimeout(() => IdPicker(idd),200);
            //IdPicker(idd);
            i++;
        }

    }, 100);
}


function getCoded(imagen,titulo,preu,identificador,idd){
    return `<div class="col-md-3 col-sm-6 asd aqui invi" id="${idd}" style="display:none;">
                  <div class="product-grid">
                      <div class="product-image">
                          <a href="#" class="image" style="background-color:#F3F3F3;">
                          <div class="img" style="background-image: url(${imagen});"></div>
                          </a>
                      </div>
                      <div class="product-content">
                          <h3 class="title"><a href="#">${titulo}</a></h3>
                          <div class="price">${preu}€</div>
                          <!--
                              <ul class="rating">
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star disable"></li>
                              </ul>-->
                      </div>
                      <div class="action-buttons">
                          <a class="btn-outline-icon" onlcick="alcarrito(${identificador})"><i class="fas fa-shopping-cart"></i></a>
                          <a class="btn-outline-icon" href="producto.html#${identificador}"><i class="fas fa-info"></i></a>
                          <a class="btn-outline-icon" onlcick="favoritos(${identificador})"><i class="fas fa-heart heart"></i></a>
                      </div>
                  </div>
              </div>`;
}


/* REHACER
function llamarProductos(){

    onGetNew((querySnapshot) => {
        // variable 'html' cada cop que la recorrerem mostrem un objecte de firebase com a html
        let html = '';
        let num = 1;
        //bucle per cada document de la base de dades crea un div que conté tots els camps
        querySnapshot.forEach(doc => {
            const producto = doc.data()
            console.log(num);
            console.log(producto.id);
            let identificadore = btoa(doc.id);
            html +=getCoded(producto.image[0],producto.nombre,producto.precio,identificadore,num);
            num++;
        })
        //dins de l'string va codi html
        if(CAMBIARCODIGO){
        CAMBIARCODIGO.innerHTML = html;
        console.log('Procedo a eliminar el gif');
        document.getElementById('loading').style.display ="none";
        noinvi();
        }
    });

}
llamarProductos();
*/


function selectWhere(collection,field,operator,value){
    return new Promise((resolve,reject) => {
        collection.Where(field,operator,value).get()
        .then((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
                docs.push(docs);
            });
            resolve(docs);
        })
        .catch(reject);
    });
}

/*db.collection('cafes').where('city','==','manchester').get().then(snapshot)=>{
        snapshot.docs.foreach(doc => {
           renderCafe(doc);
        })
    }*/


