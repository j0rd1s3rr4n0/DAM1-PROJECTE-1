

function crypto(frase){
    let a = btoa(frase);
    return a;

}
function decrypto(frase){
    let b = atob(frase);
    return b;
}
/*
function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let imagen = "https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png";
//https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg
function getCoded(imagen,titulo,preu,identificador){
    return `<div class="col-md-3 col-sm-6 asd aqui invi" style="/*display:none;">
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

let i = 0;
let max = 8;
let ra = Randomizador(0,2);
let code = "";
let t = false;
let imagenes = ["https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png","https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"];

while(i<max){
    let ra = Randomizador(0,2);
    imagen = imagenes[1];
    console.log(imagen);
    let tit = 'Naranja Premium Bluetooth 8K 144Hz 1TB SSD';
    let pree = 30.00;
    let identi = 'nkjbnasd(bkabd';
    code+=getCoded(imagen,tit,pree,identi);


    i++;
    if(i=>max){
        t = true;
    }
}

if(t==true){
    document.getElementById('change').innerHTML = code;
}
*/


function IdPicker(idda){
    if(idda){
        document.getElementById(idda).style.display='inline';
    }
    //document.getElementById(idda).removeAttr( 'style' );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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

function vistoso(){
    //document.getElementById('iconos').style.backgroundColor = 'rgba(216, 250, 8,0.3)';
    //document.getElementById('iconos').style.borderRadius = '25px';
    //document.getElementById('aa').innerHTML = '<i id="bb" class="fas fa-exclamation-triangle"></i>';
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
    <li><a href="#login"><i class="fas fa-user" onclick="tologin();alert(1);"></i> MI CUENTA</a></li>
    <li id="tb" onclick="revo()"><a class="test"><i class="fas fa-search"></i></a></li>`;
};

function refresh(){
    let url = 'https://j0rd1s3rr4n0.github.io/DAM1-PROJECTE-1/';
    window.location.href = url;
    window.location.replace(url);
}

function enteregister(){
document.getElementById('loginBody').innerHTML = `
                <h2>REGISTRAR UNA CUENTA</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
    <form action="#" method="post" id="signout">
                          <label for="email">Email / Username:</label><br>
                          <input type="email" id="email" name="email" placeholder="name.surname@exchange.org"><br>
                          <br><label for="password">Password:</label><br>
                          <input type="password" id="password" name="password" placeholder="Password">

                          <input type="password" id="re-password" name="re-password" placeholder="REPEAT PASSWORD"><button id="entrarbtn" class="registro" onclick="registrar()">REGISTRAR</button><br>
                          <button id="registrarbtn" class="registro" onclick="tologin()">INICIAR</button><br>
                          <a onclick="register_load()" style="font-size: 12px;"><i></i></a>

                        </form>
            </div>`;
        }
function password_rec(){
    console.log('Hi');
    /*document.getElementById('loginBody').innerHTML = `
                <h2>Trouble Logging In?</h2><h6>Enter your email and we\'ll send you a link to get back into your account.</h6>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
                    <form action="#" method="post" id="recovery">
                      <label for="email">EMAIL/USERNAME:</label><br>
                      <input type="email" id="email" name="email" placeholder="EMAIL">

                      <button id="entrarbtn" class="recover">RECOVER</button><br>
                      <br>
                      <a style="font-size: 12px;" onclick="tologin()"><i><u>¿Has cambiado de idea? ¡Accede a tu cuenta!</u></i></a>

                    </form>
                </div>
    `;*/

}
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
if(document.cookie){
    let cook = document.cookie.split('=');
    console.log(cook[0]);
    cook[1]=cook[1].replace('$','=').replace('$','=');
    console.log(cook[1]);
}

function tologin(){
    let uid = '1';
    let admin = 'YWRtaW4$';
    if(uid == admin){
        document.getElementById('loginBody').innerHTML = `
                <h2>ACCIONES A REALIZAR</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
    <form action="#" method="post" id="signout">
                          <button id="logout" class="logout" onclick="logout()">ADMINISTRAR</button><br>
                          <button id="logout" class="logout" onclick="logout()">Cerrar Sesion</button><br>
                        </form>
            </div>
            `;
        }
    else if (uid != undefined && UID != admin){
        document.getElementById('loginBody').innerHTML = `
                <h2>ACCIONES A REALIZAR</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
    <form action="#" method="post" id="signout">
                          <button id="logout" class="logout" onclick="logout()">ULTIMAS COMPRAS</button><br>
                          <button id="logout" class="logout" onclick="logout()">Cerrar Sesion</button><br>
                        </form>
            </div>`;
        }
        else{
            document.getElementById('loginBody').innerHTML = `
                <h2>ACCEDER A UNA CUENTA</h2>
                <a id="cerrar" href="#">×</a>
                <div id="log-in" class="loginContent">
                    <form action="#" method="post" id="signin">
                      <label for="email">Email/Username:</label><br>
                      <input type="email" id="email" name="email" placeholder="name.surname@exchange.org"><br>
                      <label for="password">Password:</label><br>
                      <input type="password" id="password" name="password" placeholder="Password">

                      <button id="entrarbtn" class="login">ENTRAR</button><br>
                      <button id="registrarbtn" class="login" onclick="enteregister()">REGISTRAR</button><br>
                      <a onmouseover="this.Color = red;" style="font-size: 12px;" onclick="password_rec()"><i><u>¿Olvidaste la contraseña? ¡Recuperala aquí!</u></i></a>

                    </form>
                </div>`;
        }
    /*
    document.querySelector("#entrarbtn").classList.toggle("login");
    document.querySelector("#entrarbtn").classList.toggle("registro");
    document.querySelector("#registrarbtn").classList.toggle("login");
    document.querySelector("#registrarbtn").classList.toggle("registro");*/
}

/*

function aaa(idda){
    document.getElementById(idda).style.display="";
}
function noinvi (){
    //document.getElementsByClassName('invi').style.visiblity;

    let idInterval=setInterval(() => {

        if(i==max) clearInterval(idInterval);
        else{
            let idd = "invi"+i;
            setTimeout(() => aaa(idd),2000);
            i++;
        }

    }, 2000);
    */

function sun(){
    document.getElementById('sun').style.display="inline";
    document.getElementById('moon').style.display="none";
    document.getElementById('modoswitch').classList.toggle("sun");
    document.getElementById('modoswitch').classList.toggle("moon");
    document.querySelector('body').classList.toggle("dark");
    document.querySelector('body').classList.toggle("light");
    document.querySelector("#logo").src = './img/logo/LogoTituloNar.png';
    document.querySelector("body > footer > div.footer > div.content > div:nth-child(2) > a").innerHTML = `
        <svg style="filter:invert(1);
    " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
    `;
}
function moon(){
   document.getElementById('sun').style.display="none";
   document.getElementById('moon').style.display="inline";
   document.getElementById('modoswitch').classList.toggle("sun");
   document.getElementById('modoswitch').classList.toggle("moon");
   document.querySelector('body').classList.toggle("dark");
   document.querySelector('body').classList.toggle("light");
   document.querySelector("#logo").src = './img/logo/LogoTituloAzul.png';
   document.querySelector("body > footer > div.footer > div.content > div:nth-child(2) > a").innerHTML = `
    <svg style="filter:invert(0);
    " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
   `;
}


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

function animateNow(){
    document.getElementById('modoswitch').classList.toggle('moon');
}




                    function funcioncitaderepuesto() {
                                     if (document.getElementById("iconos").style.display != "none") {
                                       document.getElementById("iconos").style.display = "none";
                                     } else {
                                       document.getElementById("iconos").style.display="";
                                     }
                    }
                    function faq(){
                        let faq = document.getElementById("faq");
                        let plus4 = document.getElementById("plus4").innerHTML;
                        if (faq.style.display === "none") {
                                        faq.style.display = "block";
                                        document.getElementById("plus4").innerHTML = plus4.replace("+" , "-");
                                    }
                                    else{
                                        faq.style.display = "none";
                                        document.getElementById("plus4").innerHTML = "+";
                                    }
                                }


                    function displaypregunta1() {
                        let x = document.getElementById("p1");
                        let plus1 = document.getElementById("plus1").innerHTML;
                                    if (x.style.display === "none") {
                                        x.style.display = "block";
                                        document.getElementById("plus1").innerHTML = plus1.replace("+" , "-");
                                    }else{
                                        x.style.display = "none";
                                        document.getElementById("plus1").innerHTML = "+";
                                    }
                                        }

                     function displaypregunta2(){
                        let y = document.getElementById("p2");
                        let plus2 = document.getElementById("plus2").innerHTML;
                                    if (y.style.display === "none") {
                                        y.style.display = "block";
                                        document.getElementById("plus2").innerHTML = plus2.replace("+" , "-");
                                    }
                                    else{
                                        y.style.display = "none";
                                        document.getElementById("plus2").innerHTML = "+";
                                    }
                                                }

                    function displaypregunta3(){
                        let z = document.getElementById("p3");
                        let plus3 = document.getElementById("plus3").innerHTML;
                                    if (z.style.display === "none") {
                                        z.style.display = "block";
                                        document.getElementById("plus3").innerHTML = plus3.replace("+" , "-");
                                    }
                                    else{
                                        z.style.display = "none";
                                        document.getElementById("plus3").innerHTML = "+";
                                    }


                                             }



window.addEventListener('load',function() {pantalla();animateNow();});