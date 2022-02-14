//importa funcions de firebase,js
import {addElement, getElement, onGetNew} from './firebase.js';

const CAMBIARCODIGO = document.getElementById('change');
let username = btoa('I\'m who');
// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
// Apply setCookie
setCookie('username', username, 30);



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
            setTimeout(() => IdPicker(idd),700);
            //IdPicker(idd);
            i++;
        }

    }, 1000);
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
        CAMBIARCODIGO.innerHTML = html;
        console.log('Procedo a eliminar el gif');
        document.getElementById('loading').style.display ="none";
        noinvi();
    });

}
//document.getElementById("change").addEventListener("DOM", () => llamarProductos());
llamarProductos();





