

function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let imagen = "https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png";

function getCoded(imagen){
    return `<div class="col-md-3 col-sm-6 asd aqui">
                  <div class="product-grid">
                      <div class="product-image">
                          <a href="#" class="image" style="background-color:#F3F3F3;">
                          <img class="pic-1" src="${imagen}"><!--https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg-->
                          </a>
                      </div>
                      <div class="product-content">
                          <h3 class="title"><a href="#">Product Name</a></h3>
                          <!--
                              <div class="price">$21.60</div>
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
                          <a class="btn-outline-icon"><i class="fas fa-info"></i></a>
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
     code+=getCoded(imagen);
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
                    <li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#login"><i class="fas fa-user"></i></a></li>
                    <li id="tb" onclick="revo()"><a class="test"><i class="fas fa-search"></i></a></li>`;
};

function revo(){
            document.getElementById('iconos').innerHTML = `
                    <li id="tb" value="0">
                        <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon">
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                        </div>
                        </li>
                        <li id="aa" style="padding-left -1vw;" onclick="normalizarbtn();cambio();" onmouseenter="vistoso()" onmouseleave="normalizarbtn()" ><i id="bb" class="far fa-times-circle" ></i></a></li>

                        `;

};
