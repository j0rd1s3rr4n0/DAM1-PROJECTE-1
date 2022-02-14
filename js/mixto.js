//importa funcions de firebase,js
import {addElement, getElement, onGetNew} from './firebase.js';

const CAMBIARCODIGO = document.getElementById('change');



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function IdPicker(idda){
    if(idda){
        document.getElementById(idda).style.display='';
    }
    //document.getElementById(idda).removeAttr( 'style' );
}

// AQUESTA FUNCIO FA QUE ES MOSTRI VISIBLE CADA PRODUCTE CAD X SEGONS
function noinvi (){
    let i = 1;
    let max = 24;
    let idInterval=setInterval(() => {
        if(i==max) clearInterval(idInterval);
        else{
//            let idd = "invi"+i;
            let idd = i;
            //setTimeout(() => IdPicker(idd),2000);
            IdPicker(idd);
            i++;
        }

    }, 1800);
}


function getCoded(imagen,titulo,preu,identificador){
    return `<div class="col-md-3 col-sm-6 asd aqui invi" id="${identificador}" style="display:none;">
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
            html +=getCoded(producto.image[0],producto.nombre,producto.precio,num);
            num++;
        })
        //dins de l'string va codi html
        CAMBIARCODIGO.innerHTML = html
        noinvi();
    });

}
//document.getElementById("change").addEventListener("DOM", () => llamarProductos());
llamarProductos();






function vistoso(){
    document.getElementById('iconos').style.backgroundColor = 'rgba(216, 250, 8,0.3)';
    document.getElementById('iconos').style.borderRadius = '25px';
    document.getElementById('aa').innerHTML = '<i id="bb" class="fas fa-exclamation-triangle"></i>';
    console.log("VISTOSO");
}


function normalizarbtn(){
    document.getElementById('iconos').style.backgroundColor = '';
    document.getElementById('iconos').style.borderRadius = '0px';
 document.getElementById('aa').innerHTML = '<i id="bb" class="far fa-times-circle"></i>';
 console.log("NORMALIZADO");
}

function cambio(){
            document.getElementById('iconos').innerHTML = `
                    <li><a href=""><i class="fas fa-shopping-cart"></i> CARRITO</a></li>
                    <li><a href="#login"><i class="fas fa-user"></i> MI CUENTA</a></li>
                    <li id="tb" onclick="revo()"><a class="test"><i class="fas fa-search"></i></a></li>`;
};

function refresh(){
    let url = 'https://j0rd1s3rr4n0.github.io/DAM1-PROJECTE-1/';
    window.location.href = url;
    window.location.replace(url);
}
function password_recover(){
    document.getElementById('loginBody').innerHTML = `
                <h2>Trouble Logging In?</h2><h6>Enter your email, phone, or username and we\'ll send you a link to get back into your account.</h6>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
                    <form action="#" method="post">
                      <label for="email">EMAIL/USERNAME:</label><br>
                      <input type="email" id="email" name="email" placeholder="EMAIL">

                      <button id="entrarbtn" class="recover">RECOVER</button><br>
                      <br>
                      <a style="font-size: 12px;" onclick="tologin()"><i><u>¿Has cambiado de idea? ¡Accede a tu cuenta!</u></i></a>

                    </form>
                </div>
    `;

}


function revo(){
            document.getElementById('iconos').innerHTML = `
                    <li id="tb">
                        <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon">
                                <span class="input-group-text border-0" onclick="q.submit()" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                        </div>
                        </li>
                        <li id="aa" style="padding-left -1vw;" onclick="normalizarbtn();cambio();" onmouseenter="vistoso()" onmouseleave="normalizarbtn()" ><i id="bb" class="far fa-times-circle" ></i></a></li>
                        `;

};

function enteregister(){
document.getElementById('loginBody').innerHTML = `
                <h2>REGISTRAR UNA CUENTA</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
    <form action="#" method="post">
                          <label for="email">Email / Username:</label><br>
                          <input type="email" id="email" name="email" placeholder="name.surname@exchange.org"><br>
                          <br><label for="password">Password:</label><br>
                          <input type="password" id="password" name="password" placeholder="Password">

                          <input type="password" id="re-password" name="re-password" placeholder="REPEAT PASSWORD"><button id="entrarbtn" class="registro" onclick="registrar()">REGISTRAR</button><br>
                          <button id="registrarbtn" class="registro" onclick="tologin()">INICIAR</button><br>
                          <a onclick="register_load()" style="font-size: 12px;"><i></i></a>

                        </form>
            </div>`;

  /*
    <form action="#" method="post">
                          <label for="email">EmaiL:</label><br>
                          <input type="email" id="email" name="email" placeholder="name.surname@exchange.org"><br>
                          <br><label for="password">Password:</label><br>
                          <input type="password" id="password" name="password" placeholder="password">

                          <input type="password" id="re-password" name="re-password" placeholder="REPEAT PASSWORD"><button id="entrarbtn"class="registro" onclick="registrar()">REGISTRAR</button><br>
                          <button id="registrarbtn"  class="registro" onclick="tologin()">INICIAR</button><br>
                          <a onmouseover="this.Color = red;" onclick="register_load()" style="font-size: 12px;"><i></i></a>

                        </form>
    `;
    document.querySelector("#entrarbtn").classList.toggle("login");
    document.querySelector("#entrarbtn").classList.toggle("registro");
    document.querySelector("#registrarbtn").classList.toggle("login");
    document.querySelector("#registrarbtn").classList.toggle("registro");
*/
}
function tologin(){
  document.getElementById('loginBody').innerHTML = `
                <h2>ACCEDER A UNA CUENTA</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
                    <form action="#" method="post">
                      <label for="email">Email/Username:</label><br>
                      <input type="email" id="email" name="email" placeholder="name.surname@exchange.org"><br>
                      <label for="password">Password:</label><br>
                      <input type="password" id="password" name="password" placeholder="Password">

                      <button id="entrarbtn" class="login">ENTRAR</button><br>
                      <button id="registrarbtn" class="login" onclick="enteregister()">REGISTRAR</button><br>
                      <a onmouseover="this.Color = red;" style="font-size: 12px;" onclick="password_recover()"><i><u>¿Olvidaste la contraseña? ¡Recuperala aquí!</u></i></a>

                    </form>
                </div>`;
    /*
    document.querySelector("#entrarbtn").classList.toggle("login");
    document.querySelector("#entrarbtn").classList.toggle("registro");
    document.querySelector("#registrarbtn").classList.toggle("login");
    document.querySelector("#registrarbtn").classList.toggle("registro");*/
}

/*

function IdPicker(idda){
    document.getElementById(idda).style.display="";
}
function noinvi (){
    //document.getElementsByClassName('invi').style.visiblity;

    let idInterval=setInterval(() => {

        if(i==max) clearInterval(idInterval);
        else{
            let idd = "invi"+i;
            setTimeout(() => IdPicker(idd),2000);
            i++;
        }

    }, 2000);
    */


/* COMPRUEBA LA RESOLUCION DE PANTALLA Y EDITA CIERTOS PARAMETROS DE LA WEB SEGUN */
// EJEMPLO LA BARRA DE NAVEGACION EL MENU
function pantalla(){
    //console.log("El tamanno ha cambiado!");
    let anchoventana = window.innerWidth;
    if (anchoventana > 1111){
        document.getElementById('hamgurger').style.display='none';
        document.getElementById('iconos').style.display='';
    }
    else{
        document.getElementById('iconos').style.display='none';
        document.getElementById('hamgurger').style.display='';
    }
}

window.addEventListener('resize',function() {
  pantalla();
});


window.addEventListener('load',function() {
  pantalla();
});

