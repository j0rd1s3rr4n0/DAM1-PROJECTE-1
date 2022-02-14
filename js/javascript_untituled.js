function reverseit(aaa){
    alert("${aaa}");
}
function change(){
    a = document.getElementById('tb')
    try{
    a.innerHTML = `<div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                    </div>`;
    a.id="ta";
    }
    catch{
        a = document.getElementById('ta')
        a.innerHTML = `<div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                    </div>`;
    a.id="tb";

    }


}

document.getElementById("ta").addEventListener("click",change);
document.getElementById("tb").addEventListener("click",reverseit);

















/*************************************************************************

 WWWWW    WWWWW     WWW    WWWW    W   W    WWW    WWWWW    WWW     WWWWW
 W    W   W    W   W   W   W   W   W   W   W   W     W     W   W   WW    W
 WWWWW    WWWWW    W   W   W   W   W   W   W         W     W   W     WW
 W        W   W    W   W   W   W   W   W   W   W     W     W   W   W    WW
 W        W    W    WWW    WWWW     WWW     WWW      W      WWW     WWWWW

**************************************************************************/
function Randomizador(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var imagen = "https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png";


function getCoded(){
    return `<div class="col-md-3 col-sm-6 asd aqui" onclick="href.url('product.html?q=${id}');">
                  <div class="product-grid">
                      <div class="product-image">
                          <a href="#" class="image" style="background-color:#F3F3F3;">
                          <img class="pic-1" alt="${title}" src="${imagen}"><!--https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg-->
                          </a>
                      </div>
                      <div class="product-content">
                          <h3 class="title"><a href="#">${prod}</a></h3>
                              <div class="price">${preu}</div>
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
                          <a class="btn-outline-icon"><i class="fas fa-info"></i></a>
                          <a class="btn-outline-icon"><i class="fas fa-heart"></i></a>
                      </div>
                  </div>
              </div>`;
}

let i = 0;
let max = 23;
let ra = Randomizador(0,2);
let titulo ='AQUI VA EL TITOL';
let identi = 'AQUI VA EL ID';
let producto = 'AQUI VA EL PRODUCTO';
let price = 'AQUI VA EL PREU';
var Persona={
    imagen : ${imagen},
    title: ${title},
    id : ${id},
    prod: ${prod},
    price: ${preu}
};
let code = getCoded(Persona);
let t = false;
let imagenes = ["https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png","https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"];

while(i<max){
   let ra = Randomizador(0,2);
   //imagen = imagenes[1];
   console.log(imagen);
    code+=getCoded(imagen,titulo,identi,producto,price);
   i++;
   if(i=>max){
       t = true;
   }
}
if(t==true){
   document.getElementById('change').innerHTML = code;
}

else{
   //TODO
}



