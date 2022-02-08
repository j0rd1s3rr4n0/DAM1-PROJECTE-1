
url_img='https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png';

img_title='Titulo';

id='1';

nom_producte='NomProducte';

descripcio = 'descripcio';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let fifi = '<div class="producto"><img src="'+url_img+'" class="producte" alt="'+img_title+'producte" id="'+id+'"><h3>'+nom_producte+'</h3><p>'+descripcio+'</p><div class="rate"><input type="radio" id="star5" name="rate" value="5" /><label for="star5" title="text">5 stars</label><input type="radio" id="star4" name="rate" value="4" /><label for="star4" title="text">4 stars</label><input type="radio" id="star3" name="rate" value="3" /><label for="star3" title="text">3 stars</label><input type="radio" id="star2" name="rate" value="2" /><label for="star2" title="text">2 stars</label><input type="radio" id="star1" name="rate" value="1" /><label for="star1" title="text">1 star</label></div></div>';
for(let i = 0;i < 16;i++){
    contenedor = document.getElementById("prod");
    errcontenedor = document.createElement("div");
    errcontenedor.classList.add("alert", "alert-danger");
    errcontenedor.setAttribute("role", "alert");
    errcontenedor.innerHTML=fifi;
    contenedor.appendChild(errcontenedor);
sleep(10000);
}


