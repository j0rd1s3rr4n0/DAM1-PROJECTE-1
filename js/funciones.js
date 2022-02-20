const secciones_selector=document.getElementById("secciones-selector");
const ul_secciones=document.querySelector(".menu ul.menu-seccion");

let value=2;

function fatalError(Mensaje, Error){

    const emergent=document.createElement("DIV");

    emergent.classList.add("fatalError");
    
    const messaje=document.createElement("B");
    messaje.innerHTML=Mensaje + "<span style='width: 30px; height: 30px; background-image: url(images/triste.png); background-repeat: no-repeat; background-size: contain; background-position: cente; position: absolute; margin-left: 10px'></span>"

    messaje.classList.add("messaje");
    emergent.appendChild(messaje);

    const error=document.createElement("P");
    error.innerText=Error;
    error.classList.add("error");

    emergent.appendChild(error);

    openDialog(() => {}, emergent);

}

function addSection(name){

    const option=document.createElement("OPTION");
    option.value=value;

    option.innerText=name;

    secciones_selector.appendChild(option);

    const seccion=document.createElement("LI");
    const enlace=document.createElement("A");

    enlace.href=`search.html?section=${name}`;
    enlace.innerText=name

    seccion.appendChild(enlace);

    ul_secciones.appendChild(seccion);

    value++;

}

const addSections=seccions => seccions.forEach(s => addSection(s));

function putImageItem(idProducto, productosStock, itemContainer){
    const imagenes=productosStock[idProducto]["imagen"];

    let imgElements=[];

    imagenes.forEach(n => {

        const imagen=document.createElement("IMG");

        imagen.src=n;

        imagen.classList.add("slide_img");

        imagen.style.objectFit="contain";

        itemContainer.appendChild(imagen);

        imgElements.push(imagen);

    });

    return imgElements;
}

function createInfoItem(idProducto, productosStock, itemContainer){

    const precio=(productosStock[idProducto]["precio"]*1.21).toFixed(2);
    const producto=productosStock[idProducto]["nombre"];
    const descripcion=productosStock[idProducto]["descripcion"];

    const infoItem=document.createElement("DIV");

    infoItem.classList.add("infoItem");

    infoItem.innerHTML=`<span class="nameItem" title="${producto}">${producto}</span></br>
    <span class="priceItem">${precio}€</span>
    <span class="descriptionItem">${descripcion}</span>`;

    itemContainer.appendChild(infoItem);
}

function setRandomProducts(productos, productosId){

   // console.log({productos});

   // let productosStock=[]; 
   // let productosStockId=[];

    // for(let i in productos){

    //     //productos[i].forEach(n => console.log(n["stock"]));

    //     productosStock.push(productos[i].filter(n => n["stock"]>0));
        

    // }

    //productosStock=productosStock.flat(1);
    
    let productosStock=[]; 
    let productosStockId=[];

    for(i in productos){

        seccion=productos[i];
        let j=0;
        seccion.forEach(n => {
            if(n["imagen"].length==0) n["imagen"][0]="https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg";
            if(n["imagen"].length==1) n["imagen"].push(n["imagen"][0]);
            productosStock.push(n);
            productosStockId.push(productosId[i][j]);
            j++;
        });
    }

    console.log({productosStock});
    console.log({productosStockId});

    // productosStock.forEach(n => {
    //     if(n["imagen"].length==0) n["imagen"][0]="https://www.detallesmasbonitaqueninguna.com/server/Portal_0015715/img/products/no_image_xxl.jpg";
    //     if(n["imagen"].length==1) n["imagen"].push(n["imagen"][0]);
    // });

    //const itemsContainers=document.querySelectorAll(".productsItems > div");

    const itemsContainers=document.querySelectorAll(".productsItems > a");

    let productosObtenidos=[];

    for(let i=0; i<itemsContainers.length; i++){

        let idProducto;

        do{
            idProducto=parseInt(Math.random()*productosStock.length);
        }while(productosObtenidos.includes(idProducto));

        productosObtenidos.push(idProducto);

        itemsContainers[i].href="item.html?p=" + productosStockId[idProducto]

        createInfoItem(idProducto, productosStock, itemsContainers[i]);

        const imgElements=putImageItem(idProducto, productosStock, itemsContainers[i]);

        imgElements[0].style.display="";
        imgElements[0].style.animationName="enterSlideImg";
        imgElements[0].style.animationDuration="0";
        imgElements[0].style.animationFillMode="forwards";

        setTimeout(() => {

            moveImage(imgElements);

        }, Math.random()*3000);

        

        console.log(idProducto);

    }

}

function addItemsSearch(productos, productosId, loading=null){

    const viewProducts=document.querySelector(".viewProducts");

    const fragment=document.createDocumentFragment();

    let i=0;

    productos.forEach(n => {
        
        const contenedor=document.createElement("a");
        contenedor.href="item.html?p=" + productosId[i];
        contenedor.classList.add("itemProduct");

        const imageItem=document.createElement("DIV");
        imageItem.classList.add("image-item");

        // const priceItem=document.createElement("SPAN");
        // priceItem.classList.add("price-item");
        // priceItem.innerText=n["precio"] + "€";
        // imageItem.appendChild(priceItem);

        const image=document.createElement("IMG");
        image.src=n["imagen"][0];
        imageItem.appendChild(image);

        if(n["stock"]<=5){

            const stock=document.createElement("SPAN");
            stock.classList.add("stock");

            if(n["stock"]==0){
                stock.innerText="¡Sin stock!";
                stock.style.color="rgb(197, 0, 0)";
            }else{
                stock.innerText="Ultimas unidades";
                stock.style.color="rgb(236, 154, 0)";
            }

            imageItem.appendChild(stock);

        }
        
        const infoItem=document.createElement("DIV");
        infoItem.classList.add("info-item");
        
        const nameItem=document.createElement("SPAN");
        nameItem.classList.add("name-item");
        nameItem.innerText=n["nombre"];
        infoItem.appendChild(nameItem);

        const priceItem=document.createElement("SPAN");
        priceItem.classList.add("price-item");
        priceItem.innerText=(n["precio"]*1.21).toFixed(2) + "€";
        infoItem.appendChild(priceItem);

        const descriptionItem=document.createElement("SPAN");
        descriptionItem.classList.add("description-item");
        descriptionItem.innerText=n["descripcion"];
        infoItem.appendChild(descriptionItem);

        contenedor.appendChild(imageItem);
        contenedor.appendChild(infoItem);

        fragment.appendChild(contenedor);

        i++;

    });

    if(loading) viewProducts.removeChild(loading);

    viewProducts.appendChild(fragment);

}

function deleteItemsSearch(){

    const productos=Array.from(document.querySelectorAll(".viewProducts a"));

    const viewer=document.querySelector(".viewProducts");

    productos.forEach(n => viewer.removeChild(n));

}

let imageSelected;
let imageSelectId;
let imageBig
let imageItem;

let datosUsuario;
let user;

function loadProduct(item, idItem=null){

    const nameItem=document.querySelector(".name-item");
    const precioBase=document.querySelector(".precio-main .base");
    const precioCent=document.querySelector(".precio-main .cent");

    const envioValue=document.querySelector(".column .envio");

    const precioNoIva=document.querySelector(".precio-no-iva .precio");
    const stockValue=document.querySelector(".column .stock");
    const descripcionvalue=document.querySelector(".column .descripcion");

    nameItem.innerText=item["nombre"];

    let precioSinIva=item["precio"];

    let precioConIva=(precioSinIva*1.21).toFixed(2);

    precioBase.innerText=parseInt(precioConIva);
    precioCent.innerText=","+parseInt((precioConIva-parseInt(precioConIva))*100);

    precioNoIva.innerText=(precioSinIva+"").replace(".", ",") + "€";

    if(item["envio"])envioValue.innerText=`${item["envio"]} €`;
    else{
        envioValue.innerText="Envío GRATIS";
        envioValue.classList.add("free");
    }
    
    let stock=item["stock"];

    const nStock=document.getElementById("nStock");

    nStock.nextElementSibling.addEventListener("click", e => {if(parseInt(nStock.value)<stock) nStock.value=parseInt(nStock.value)+1});
    nStock.previousElementSibling.addEventListener("click", e => {if(parseInt(nStock.value)>1 && stock>0) nStock.value=parseInt(nStock.value)-1});

    nStock.value=1;

    nStock.addEventListener("change", e => checkStockProduct(e.target, stock));

    if(stock>5){

        stockValue.innerText="¡En stock!";
        stockValue.classList.add("aviableStock")

    }else if(stock>0 && stock<=5){

        stockValue.innerText="¡Últimas unidades!";
        stockValue.classList.add("littleStock")

    }else if(stock==0){
        nStock.value=0;
        nStock.disabled=true;
        stockValue.innerText="¡Sin stock!";
        stockValue.classList.add("notStock");

        document.querySelector("button.comprar").disabled=true;
    }

    descripcionvalue.innerText=item["descripcion"];


    imageBig=document.querySelector(".image-big");
    const imagesSmall=document.querySelector(".images-small");

    let image=document.createElement("IMG");
    image.src=item["imagen"][0];
    imageBig.appendChild(image);

    imageSelectId=0;

    const fragment=document.createDocumentFragment();

    imageItem=item["imagen"];

    let first=true;

    imageItem.forEach(n => {

        const div=document.createElement("DIV");
        const imagenSamll=document.createElement("IMG");
        imagenSamll.src=n;

        if(first){
            div.classList.add("selected");
            imageSelected=div;
        }

        div.appendChild(imagenSamll);
        fragment.appendChild(div);

        imagenSamll.addEventListener("click", selectImage)

        first=false;

    });

    imagesSmall.appendChild(fragment);

    document.querySelector(".image-big .control.next").addEventListener("click", nextImage);
    document.querySelector(".image-big .control.previous").addEventListener("click", previousImage);

    const twitter=document.querySelector(".compartir-item a.twitter");
    const facebook=document.querySelector(".compartir-item a.facebook");
    const mail=document.querySelector(".compartir-item a.mail");

    twitter.href=`https://twitter.com/intent/tweet?original_referer=${window.location}&text=${item["nombre"].replace(" ", "+")}+por+${item["precio"]}+euros+${window.location}&tw_p=tweetbutton&via=mercastore`;

    facebook.href=`http://www.facebook.com/sharer.php?u=${window.location}`;

    mail.href=`mailto:amigo@correo.es?subject=Mira%20lo%20que%20he%20visto%20en%20MercaStore&body=${item["nombre"].replace(" ", "%20")}%20por%20${item["precio"]}%20euros%20en%20${window.location}`;

    //SCROLL
    //TODO

    readUser(auth.currentUser.uid)
    .then(userData => {

        const itemsDeseo=userData["deseo"].map(n => n.id);
        const itemsCesta=userData["cesta"].map(n => n.id);

        if(itemsDeseo.includes(idItem)) document.querySelector("button.favorito .favorito-icono").style.backgroundImage="url('images/favorito_hover.png')"; 
        if(itemsCesta.includes(idItem)) {document.querySelector("button.carrito .carrito-icono").style.backgroundImage="url('images/carrito_hover.png')"; document.querySelector("button.carrito .arrow-down").style.backgroundImage="url('images/arrow_down_hover.png')";}

    })


}

function checkStockProduct(target, stock){
     
    if(parseInt(target.value)>stock) target.value=stock;
    else if(parseInt(target.value)<1) target.value=1;

}

function selectImage(e){

    const img=e.target;

    const container=e.target.parentElement;

    imageSelected.classList.remove("selected");
    
    container.classList.add("selected");

    imageSelected=container;

    imageBig.lastElementChild.src=img.src;  

}

let canMove=true;

function nextImage(e){

    if(canMove){

        const smallDivs=Array.from(document.querySelectorAll(".images-small > div"));

        canMove=false;

        smallDivs[imageSelectId].classList.remove("selected");

        imageSelectId++;

        if(imageSelectId==imageItem.length) imageSelectId=0;
    
        smallDivs[imageSelectId].classList.add("selected");

        const actualImage=imageBig.lastElementChild;
        actualImage.classList.add("exitLeft");
    
        const nextImage=document.createElement("IMG");
        nextImage.classList.add("enterLeft");
        nextImage.src=imageItem[imageSelectId];
        imageBig.appendChild(nextImage);
    
        removeImageEfect(actualImage, nextImage);

    }

}

function previousImage(e){

    if(canMove){

        const smallDivs=Array.from(document.querySelectorAll(".images-small > div"));

        canMove=false;

        smallDivs[imageSelectId].classList.remove("selected");

        imageSelectId--;

        if(imageSelectId==-1) imageSelectId=imageItem.length-1;
    
        smallDivs[imageSelectId].classList.add("selected");

        const actualImage=imageBig.lastElementChild;
        actualImage.classList.add("exitRight");
    
        const nextImage=document.createElement("IMG");
        nextImage.classList.add("enterRight");
        nextImage.src=imageItem[imageSelectId];
        imageBig.appendChild(nextImage);
    
        removeImageEfect(actualImage, nextImage);

    }


}

function removeImageEfect(actualImage, next_previousImage){
    
    setTimeout(() => {

        imageBig.removeChild(actualImage);

        next_previousImage.classList.toggle("enterLeft", false)
        next_previousImage.classList.toggle("enterRight", false);

        canMove=true;

    }, 1000);

}

let productosCesta;
let cantidadCesta;
let productosFavorito;

function openPanelUser(){

    const container=document.createElement("DIV");
    container.classList.add("panel-user");

    let update=true;

    let googleAccount=false;

    function loginForUpdate(){

        return new Promise((resolve, reject) => {

            const userMail=getCookie("userMail")
            const userPass=getCookie("userPass")
        
            const inGoogle=getCookie("google");
            const idToken=getCookie("idToken");
        
            if(userMail && userPass) loginPassword(userMail, userPass)
                 .then(userCredential => resolve());
        
            else if(inGoogle=="true" && idToken){
        
                credential=firebase.auth.GoogleAuthProvider.credential(idToken);
        
                Promise.all([readUsers(new where("correo", "==", userMail)), firebase.auth().signInWithCredential(credential)])
                    .then(results => {
        
                        if(results[0][0]){
                            googleAccount=true;
                            resolve();
                        }
        
                    });
    
            }

        });       

    }

    function addData(label, input, typeInput, id){

        const containerData=document.createElement("DIV");
        containerData.classList.add("data");

        const labelElement=document.createElement("LABEL");
        labelElement.for=id;
        labelElement.innerText=(label + ":");

        const inputElement=document.createElement("INPUT");
        inputElement.type=typeInput;
        inputElement.id=id;
        inputElement.value=input;

        containerData.appendChild(labelElement);
        containerData.appendChild(inputElement);

        container.appendChild(containerData);

    }

    function setError(element, messaje){

        update=false;

        const parent=element.parentElement;
    
        const spanError=document.createElement("SPAN");
    
        spanError.classList.add("error");
    
        parent.appendChild(spanError);
    
        const messajeContainer=document.createElement("DIV");
        const messajeSpan=document.createElement("SPAN");
        messajeSpan.innerText=messaje;
        messajeContainer.appendChild(messajeSpan);
        messajeContainer.classList.add("messaje-container");
    
        //messajeContainer.style.display="none";
    
        parent.appendChild(messajeContainer);
    
    }


    function clearError(element){

        const parent=element.parentElement;
    
        if(parent.lastElementChild.classList.contains("messaje-container")) parent.removeChild(parent.lastElementChild);
        if(parent.lastElementChild.classList.contains("error")) parent.removeChild(parent.lastElementChild);
    
    }

    const validarMail = correo => /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo);

    loginForUpdate()
        .then(() => readUser(getCookie("userUID")))
        .then(data => {

            console.log(firebase.auth().currentUser.getIdToken(true));

            addData("Nombre", data["nombre"], "text", "nombre");
            addData("Apellido", data["apellido"], "text", "apellido");
            addData("Correo", data["correo"], "text", "correo");
            addData("Contraseña antingua", null, "password", "pass");
            addData("Contraseña nueva", null, "password", "newPass");    
            addData("Repite la contraseña nueva", null, "password", "repeatNewPass");                                                                                        
            
            document.getElementById("pass").disabled=googleAccount
            document.getElementById("newPass").disabled=googleAccount
            document.getElementById("repeatNewPass").disabled=googleAccount


            const saveLabel=document.createElement("SPAN");
            saveLabel.classList.add("button-save");
            saveLabel.innerText="Guardar Cambios";
        
            container.appendChild(saveLabel);

            const logOutLabel=document.createElement("SPAN");
            logOutLabel.classList.add("button-exit");
            logOutLabel.innerText="Cerrar Sesión";

            container.appendChild(logOutLabel);

            const removeCountLabel=document.createElement("SPAN");
            removeCountLabel.classList.add("button-exit");
            removeCountLabel.innerText="Eliminar Cuenta";

            container.appendChild(removeCountLabel);

            saveLabel.addEventListener("click", e => {

                const correo=document.getElementById("correo");

                const pass=document.getElementById("pass");
                const newPass=document.getElementById("newPass");
                const repeatNewPass=document.getElementById("repeatNewPass");

                clearError(correo);
                clearError(pass);
                clearError(newPass);
                clearError(repeatNewPass);

                update=true;

                if(newPass.value.trim()){

                    if(pass.value.trim()){

                        if(pass.value.trim()==getCookie("userPass")){

                            if(newPass.value.trim().length<6) setError(newPass, "La contrasenña debe tenir un mínimo de 6 caracteres");

                            else if(newPass.value.trim()!=repeatNewPass.value.trim()) setError(repeatNewPass, "Las contraseñas no coinciden");

                        }else setError(pass, "La contrasenña no es correcta")

                    }else setError(pass, "Introduce la contraseña antigua para cambiarla");

                }else if(!validarMail(correo.value)) setError(correo, "Introduce un correo válido");

                if(update){


                    const userUpdate=auth.currentUser;

                    let nombreNuevo=document.getElementById("nombre").value.trim() || data["nombre"];
                    let apellidoNuevo=document.getElementById("apellido").value.trim() || data["apellido"];
                    let emailNuevo=document.getElementById("correo").value.trim() || data["correo"];
                    let passNueva=newPass.value.trim() || getCookie("userPass");

                    console.log(userUpdate);

                    promisesAll=[userUpdate.updateProfile({displayName: `${nombreNuevo} ${apellidoNuevo}`}), userUpdate.updateEmail(emailNuevo)]

                    if(!googleAccount) promisesAll.push(userUpdate.updatePassword(passNueva));

                    data["nombre"]=nombreNuevo;
                    data["apellido"]=apellidoNuevo;
                    data["correo"]=emailNuevo;
                    if(!googleAccount) updateCookie("userPass", passNueva);
                    updateCookie("uesMail", correo);

                    console.log({data});
                    console.log({userUpdate});

                    Promise.all(promisesAll)
                        .then(() => updateUser(userUpdate, createDocUser(data)))
                        .then(() => {
                            closeDialog();
                            window.location.reload();
                        });

                }

            });

            logOutLabel.addEventListener("click", e => {

                logOut();

                closeDialog();

                window.location.reload();

            });

            removeCountLabel.addEventListener("click", e => {

                update=true;

                const pass=document.getElementById("pass");

                clearError(pass);                

                if(pass.value.trim()){

                    if(pass.value.trim()!=getCookie("userPass")) setError(pass, "La contraseña no es correcta");

                }else if(!googleAccount) setError(pass, "Introduce la contraseña para eliminar la cuenta");

                if(update){
                    //ELIMINAR

                    const userDelete=auth.currentUser;

                    removeAllCookies();

                    deleteUser(userDelete)
                        .then(userDelete.delete())
                        .then(() => {
                            closeDialog();
                            window.location.reload();
                        });
                }

            });

        });

    container.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    })

    openDialog(e => {
        e.target.removeChild(container);
        closeDialog();
    }, container);

}

function readDataUser(){

    console.log("cargando usuario");

    userCredential=auth.currentUser;
    user=userCredential;

    if(!user.emailVerified){
        logOut(); 
        return;
    }

    const miCuenta=document.querySelector("#button > a");
    miCuenta.href="#";
    miCuenta.innerText=userCredential.displayName;
    miCuenta.title=userCredential.displayName;

    const btnCuenta=document.getElementById("button");

    btnCuenta.classList.add("login");

    document.getElementById("button").addEventListener("click", e => openPanelUser());

    document.querySelector("span.userAccount-item").style.display='';
    const btnCesta=document.querySelector("span.cesta-item");
    btnCesta.style.display='';
    const btnFavorito=document.querySelector("span.favorito-item");
    btnFavorito.style.display='';

    const listaCesta=document.querySelector("nav .cestaUser");
    const listFavorito=document.querySelector("nav .favoritoUser");

    btnCesta.addEventListener("mouseenter", e => listaCesta.style.transform="translate(0)");
    btnCesta.addEventListener("mouseleave", e => listaCesta.style.transform="");

    btnFavorito.addEventListener("mouseenter", e => listFavorito.style.transform="translate(0)");
    btnFavorito.addEventListener("mouseleave", e => listFavorito.style.transform="");

    readUser(userCredential.uid)
        .then(userData => {

        datosUsuario=userData;

        productosCesta=userData["cesta"];
        cantidadCesta=userData["cestaCantidad"];
        productosFavorito=userData["deseo"];

        console.log("LISTA DE DESEOS:")

        console.log({cantidadCesta});

        function readList(productos, list, cantidad=null){

            let productosGuardados=[];
            let productosIdGuardados=[];

            
            let allPromise=[];

            productos.forEach(n => {
                allPromise.push(readProduct(n.id));
                productosIdGuardados.push(n.id);
            });
            
            Promise.all(allPromise)
                .then(productos => {

                    productosGuardados=productos.map(n => n.data());

                    listaGuardado(productosGuardados, productosIdGuardados, list, cantidad);

                });

        }
        
        readList(productosFavorito, "favoritoUser");
        readList(productosCesta, "cestaUser", cantidadCesta);

        //listaGuardado(productosGuardados, productosIdGuardados, "cestaUser");


        document.querySelector(".cestaUser .comprar-cesta").disabled=!productosCesta[0];
        document.querySelector(".cestaUser .comprar-cesta").addEventListener("click", e => window.location.href="buy.html?p=all");

        });

}

function loadUserData(){

    const userMail=getCookie("userMail")
    const userPass=getCookie("userPass")

    const inGoogle=getCookie("google");
    const idToken=getCookie("idToken");

     if(userMail && userPass) loginPassword(userMail, userPass)
         .then(userCredential => readDataUser())
         .catch(error => {
             
             fatalError("No se puedo inicar sesión", error);

             removeCookie("userMail");
             removeCookie("userPass");

         });

    else if(inGoogle=="true" && idToken && userMail){

        credential=firebase.auth.GoogleAuthProvider.credential(idToken);

        Promise.all([readUsers(new where("correo", "==", userMail)), firebase.auth().signInWithCredential(credential)])
            .then(results => {

                if(results[0][0]) readDataUser();
                else setError("El usuario no existe")

            }).catch(error => setError(error))

        function setError(error){
            fatalError("No se puedo inicar sesión", error);

            removeCookie("inGoogle");
            removeCookie("idToken");
        }
    }
}

function addItemList(list, itemRef, cantidad=null, listCantidad=null, force=false){
    
    let include;

    for(n of datosUsuario[list]){
        include=n.id==itemRef.id;
        if(include) break;
    }

    if(!include || force){

        datosUsuario[list].push(itemRef);
        if(listCantidad) datosUsuario[listCantidad].push(cantidad);

        updateUser(user, createDocUser(datosUsuario))
            .then(() => window.location.reload());

    }

    return include;

}

function removeItemList(list, itemRef, listCantidad=null, force=false){

    //TODO
    //ELIMINAR ITEM DESDE LA LISTA

    let i=0;

    while(datosUsuario[list][i].id!=itemRef.id && i<datosUsuario[list].length) i++;

    if(datosUsuario[list][i].id==itemRef.id){
         datosUsuario[list].splice(i,1);
         if(listCantidad) datosUsuario[listCantidad].splice(i, 1);
    }

    updateUser(user, createDocUser(datosUsuario))
        .then(() => window.location.reload());

}

function removeItemListById(list, id, listCantidad=null, force=false){

    let i=0;

    while(datosUsuario[list][i].id!=id && i<datosUsuario[list].length) i++;

    if(datosUsuario[list][i].id==id) {
        datosUsuario[list].splice(i,1);
        if(listCantidad) datosUsuario[listCantidad].splice(i, 1);
    }

    updateUser(user, createDocUser(datosUsuario))
        .then(() => window.location.reload());

}

/*function addItemDeseo(itemRef, force=false){

    let include;

    for(n of datosUsuario["deseo"]){
        include=n.id==itemRef.id;
        if(include) break;
    }

    if(!include || force){

        datosUsuario["deseo"].push(itemRef);

        updateUser(user, createDocUser(datosUsuario))
            .then(() => window.location.reload());

    }

    return include;

}*/

/*function addItemCarrito(itemRef, force=false){

    let include;

    for(n of datosUsuario["cesta"]){
        include=n.id==itemRef.id;
        if(include) break;
    }
    
    if(!include || force){

        datosUsuario["cesta"].push(itemRef);


    }

    return include;

}*/

/*function removeItemDeseo(itemRef){

    //TODO
    //ELIMINAR ITEM DESDE LA LISTA

    let i=0;

    while(datosUsuario["deseo"][i].id!=itemRef.id && i<datosUsuario["deseo"].length) i++;

    if(datosUsuario["deseo"][i].id==itemRef.id) datosUsuario["deseo"].splice(i,1);

    updateUser(user, createDocUser(datosUsuario))
        .then(() => window.location.reload());

}*/

function listaGuardado(productos, productosId, clase, cantidad=null){

    const lista=document.querySelector(`nav .${clase} > ul`);

    const fragment=document.createDocumentFragment();

    let precioTotal=0;

    productos.forEach(n => {

        const item=document.createElement("LI");

        let newCantidad=cantidad ? (cantidad[productos.indexOf(n)] <= n["stock"] ? cantidad[productos.indexOf(n)] : n["stock"]) : null;

        const productContainer=document.createElement("A");
        productContainer.classList.add("product-container");
        productContainer.href="item.html?p=" + productosId[productos.indexOf(n)] + (cantidad ? "&n=" + newCantidad : "");

        const imageItem=document.createElement("DIV");
        imageItem.classList.add("image-item");
        imageItem.style.backgroundImage=`url('${n["imagen"][0]}')`;

        if(n["stock"]==0){

            const stock=document.createElement("SPAN");
            stock.classList.add("stock", "notStock");
            stock.innerText="¡Sin stock!";
            imageItem.appendChild(stock);

        }else if(n["stock"]<5){

            const stock=document.createElement("SPAN");
            stock.classList.add("stock", "litleStock");
            stock.innerText="¡Últimas unidades!";
            imageItem.appendChild(stock);

        }

        productContainer.appendChild(imageItem);

        const infoItem=document.createElement("DIV");
        infoItem.classList.add("info-item");
        infoItem.innerHTML=`
        <span class="name-product">${n["nombre"]}</span>
        <span class="price-product">${(n["precio"]*1.21).toFixed(2)}€</span>`
        + (cantidad ? `<span class="cantidad-product"><b>Cantidad:</b>&nbsp;${newCantidad}</span>` : ``);

        productContainer.appendChild(infoItem);

        const option=document.createElement("SPAN");
        option.classList.add("option");
        option.innerText="· · ·";

        const deleteContainer=document.createElement("SPAN");
        deleteContainer.classList.add("delete-container");
        deleteContainer.innerText="Eliminar";

        deleteContainer.addEventListener("click", e => {

            e.preventDefault();
            e.stopPropagation();

            let url=e.target.parentElement.href.split('?');

            const id=loadUrlData("?"+url[1])['p'];

            const claseToList={
                "favoritoUser":"deseo",
                "cestaUser":"cesta"
            };

            const claseToCantidad={
                "cestaUser":"cestaCantidad"
            }

            removeItemListById(claseToList[clase], id, claseToCantidad[clase]);

        });

        productContainer.appendChild(option);
        productContainer.appendChild(deleteContainer);

        item.appendChild(productContainer);
        fragment.appendChild(item);

        precioTotal+=(parseFloat((n["precio"]*1.21).toFixed(2))*(cantidad ? newCantidad : 1));

        p=parseFloat((n["precio"]*1.21).toFixed(2));

    });

    precioTotal=parseFloat(precioTotal.toFixed(2));

    if(clase==="cestaUser") {
        document.querySelector(".cestaUser > h1 > span").innerText=precioTotal;
    }

    lista.appendChild(fragment);


}

function setItemsBuying(items, cantidades, itemsId){

    const listItems=document.querySelector(".list-items");

    let precioTotal=0;
    let precioEnvio=0;


    const preciosProductos=document.querySelector(".resumen-compra > div.list-prices > div.factura > div.coste-productos > div.precios");
    const preciosEnvios=document.querySelector(".resumen-compra > div.list-prices > div.factura > div.coste-envio > div.precios");

    console.log({items});
    console.log({cantidades});

    let productosNotStock=[];

    for(item of items) {

        console.log(item);

        if(item["stock"]==0){
           // itemsId.splice(items.indexOf(item),1);
           // cantidades.splice(items.indexOf(item),1);
           // items.splice(items.indexOf(item), 1);
            productosNotStock.push(itemsId[items.indexOf(item)]);
            continue;
        }

        const envio=item["envio"] || "GRATIS";

        const itemContainer=document.createElement("DIV");
        itemContainer.classList.add("item-container");

        const imageContainer=document.createElement("DIV");
        imageContainer.classList.add("image-container");
        
        const imageItem=document.createElement("IMG");
        imageItem.src=item["imagen"][0];

        const infoContainer=document.createElement("DIV");
        infoContainer.classList.add("info-container");

        let cantidadProducto=cantidades[items.indexOf(item)];

        infoContainer.innerHTML=`
            <span class="name-item">${item["nombre"]}</span>
            <span class="price-item">${(item["precio"]*1.21).toFixed(2)}€</span>
            <span class="cantidad"><b>Cantidad:</b>&nbsp;${cantidadProducto}</span>
            <span class="envio ${envio=='GRATIS' ? 'free' : ''}"><b>Envío:</b>&nbsp;<span>${envio}</span>${envio=='GRATIS' ? '' : '€'}</span>
        `;

        imageContainer.appendChild(imageItem);
        itemContainer.appendChild(imageContainer);
        itemContainer.appendChild(infoContainer);

        listItems.appendChild(itemContainer);


        let precioItem=(parseFloat((item["precio"]*1.21).toFixed(2))*cantidadProducto).toFixed(2);

        precioTotal+=parseFloat(precioItem);

        const preciosProducto=document.createElement("DIV");
        
        const nombre=document.createElement("SPAN");
        nombre.classList.add("nombre-producto");
        nombre.innerText=item["nombre"];

        const precio=document.createElement("SPAN");
        precio.classList.add("precio-producto");
        precio.innerText=precioItem + "€";

        preciosProducto.appendChild(nombre);
        preciosProducto.appendChild(precio);

        preciosProductos.appendChild(preciosProducto);

        if(envio!="GRATIS") precioEnvio+=envio;


        const preciosEnvio=document.createElement("DIV");

        const nombreEnvio=document.createElement("SPAN");
        nombreEnvio.classList.add("nombre-producto");
        nombreEnvio.innerText=item["nombre"];

        const precioEnvioValor=document.createElement("SPAN");
        precioEnvioValor.classList.add("precio-envio");
        precioEnvioValor.innerText=envio + (envio=="GRATIS" ? "" : "€");
        if(envio=="GRATIS") precioEnvioValor.classList.add("free");

        preciosEnvio.appendChild(nombreEnvio);
        preciosEnvio.appendChild(precioEnvioValor);

        preciosEnvios.appendChild(preciosEnvio);

    }

    const totalPrecioContainer=document.createElement("DIV");
    const totalPrecioTitulo=document.createElement("SPAN");
    totalPrecioTitulo.classList.add("total");
    totalPrecioTitulo.innerText="Total";

    const totalPrecioProductos=document.createElement("SPAN");
    totalPrecioProductos.classList.add("total-valor");
    totalPrecioProductos.innerText=(precioTotal.toFixed(2)) + "€";

    totalPrecioContainer.appendChild(totalPrecioTitulo);
    totalPrecioContainer.appendChild(totalPrecioProductos);

    preciosProductos.appendChild(totalPrecioContainer);


    const totalPrecioEnvioContainer=document.createElement("DIV");
    const totalPrecioEnvioTitulo=document.createElement("SPAN");
    totalPrecioEnvioTitulo.classList.add("total");
    totalPrecioEnvioTitulo.innerText="Total";

    const totalPrecioEnvios=document.createElement("SPAN");
    totalPrecioEnvios.classList.add("total-valor");
    totalPrecioEnvios.innerText=(precioEnvio.toFixed(2)) + "€";

    totalPrecioEnvioContainer.appendChild(totalPrecioEnvioTitulo);
    totalPrecioEnvioContainer.appendChild(totalPrecioEnvios);

    preciosEnvios.appendChild(totalPrecioEnvioContainer);


    let totalFinal=((precioTotal + precioEnvio).toFixed(2)).toString();

    if(!totalFinal.split('.')[1]) totalFinal+='.00';
    if(totalFinal.split('.')[1].length<2) totalFinal+='0';

    document.querySelector(".resumen-compra > div.list-prices > div.factura > div.total-final > span.valor-total").innerText=totalFinal + "€";
    
    document.querySelector("button.comprar").addEventListener("click", e => {

        //RESTAR UNIDADES

        const loading=document.createElement("DIV");
        loading.classList.add("loader");
        const gif=document.createElement("IMG");
        gif.src="../images/loading.gif";
    
        loading.appendChild(gif);
        
        const container=document.querySelector("body");
        container.appendChild(loading);

        let promisesAll=[];

        for(let i in itemsId){

            items[i]["stock"]-=cantidades[i];

            promisesAll.push(updateProduct(itemsId[i], createDocProduct(items[i])));

        }

        const user=auth.currentUser;

        promisesAll.push(readUser(user.uid));

        Promise.all(promisesAll)
            .then(results => {                

                let userData=results[results.length-1];

                let cesta=userData["cesta"];
                let cestaCantidad=userData["cestaCantidad"];

                let newCesta=[];
                let newCestaCantidad=[];

                /*for(let j in cesta){

                    if(!itemsId.includes(cesta[j].id)){

                        newCesta.push(cesta[j]);
                        newCestaCantidad.push(cestaCantidad[j]);

                    }

                }*/

                productosNotStock.forEach(productoRetener => {

                    let posicion=itemsId.indexOf(productoRetener);

                    newCesta.push(cesta[posicion]);
                    newCestaCantidad.push(cestaCantidad[posicion]);

                })

                userData["cesta"]=newCesta;
                userData["cestaCantidad"]=newCestaCantidad;

                return updateUser(user, createDocUser(userData));

            })
            .then(() => {
                window.location.href="index.html";
                container.removeChild(loading);
            });

        console.log({itemsId})
        console.log({cantidades});

    });

}