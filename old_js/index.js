//importa funcions de firebase,js
//import {addElement, getElement, onGetNew} from './js/firebase.js';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
const cartContainer = document.getElementById('cart-container');
let i = 0;
let max = 0;
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
            max = num;
        })
        //dins de l'string va codi html
        cartContainer.innerHTML = html
        noinvi();
    });

}
const botonSyncCart = document.getElementById("syncButtonCart");
if (botonSyncCart){
botonSyncCart.addEventListener("click", () => llamarProductos());
}
/*window.addEventListener('DOMContentLoaded', async() => {
   //onSnapshot (permet que no hagi de refrescar la pàgina quan entri un nou objecte) 
   //es queda "escoltant" a l'espera de noves entrades

   llamarProductos();
    

});*/
//agafa el formulari
const cartForm = document.getElementById('cart-form')
//crea un event al clickar el botó enviar
cartForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
    //agafa els inputs (els declara com a constants)
    const nom = cartForm['cart-name']
    const quantitat = cartForm['cart-quantity']
    const preu = cartForm['cart-preu']
    //indica a la funcio addElement que agafi els valors dels inputs
    //(el que escriu l'usuari és el valor)
    addElement(nom.value,quantitat.value,preu.value)
    //Reseteja el contingut del formulari (neteja les caixes on s'escriu)
    cartForm.reset()
})

