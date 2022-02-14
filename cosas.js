

function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let imagen = "https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png";

function getCoded(imagen,titulo,preu,identificador){
    return `<div class="col-md-3 col-sm-6 asd aqui invi" style="/*display:none;*/">
                  <div class="product-grid">
                      <div class="product-image">
                          <a href="#" class="image" style="background-color:#F3F3F3;">
                          <img class="pic-1" src="${imagen}"><!--https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg-->
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
                          <a class="btn-outline-icon"><i class="fas fa-shopping-cart"></i></a>
                          <a class="btn-outline-icon" href="producto.html#${identificador}"><i class="fas fa-info"></i></a>
                          <a class="btn-outline-icon"><i class="fas fa-heart"></i></a>
                      </div>
                  </div>
              </div>`;
}

let i = 0;
let max = 23;
let ra = Randomizador(0,2);
let code = getCoded(imagen);
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


function vistoso(){
    document.getElementById('iconos').style.backgroundColor = 'rgba(216, 250, 8,0.3)';
    document.getElementById('iconos').style.borderRadius = '25px';
    document.getElementById('aa').innerHTML = '<i id="bb" class="fas fa-exclamation-triangle"></i>';
}


function normalizarbtn(){
    document.getElementById('iconos').style.backgroundColor = '';
    document.getElementById('iconos').style.borderRadius = '0px';
 document.getElementById('aa').innerHTML = '<i id="bb" class="far fa-times-circle"></i>';
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