const buttonSearch=document.querySelector(".search-button-display");
const searchWriter=document.getElementById("search");
const sectionsSelector=document.getElementById("secciones-selector");
const searchContainer=document.querySelector(".search-container");

let searcher;
let hover=false;
let isDialog=false;

if(buttonSearch) buttonSearch.addEventListener("mouseenter", e => {

    searcher=e.target.nextElementSibling;

    searcher.addEventListener("mouseenter", e => hover=true);
    searcher.addEventListener("mouseleave", e => {

        hover=false
        desaparecerBuscador();

    });

    aparecerBuscador();
    
});


if(searchWriter) searchWriter.addEventListener("focus", openSearch);
if(sectionsSelector) sectionsSelector.addEventListener("focus", openSearch);

function openSearch(){

    searcher.setAttribute("style", "box-shadow: 1px 1px 9px 8px rgba(255,255,255,0.93);");

    searcher.style.zIndex=500;

    openDialog(e => {

        closeDialog();
        closeSearch();
        desaparecerBuscador();

    });

}

function closeSearch(){

    searcher.style.zIndex=1;

    searcher.style.boxShadow="none";

}

let eventListener;

function openDialog(_eventListener, element=null){

    isDialog=true;

    const dialog=document.querySelector(".dialog-bc");
    dialog.style.display="";
    document.querySelector("body").style.overflow="hidden";

    if(eventListener) dialog.removeEventListener("click", eventListener);

    eventListener=_eventListener;

    dialog.addEventListener("click", eventListener);

    if(dialog.firstElementChild) dialog.removeChild(dialog.firstElementChild);

    if(element) dialog.appendChild(element);

}

function closeDialog(){

    isDialog=false;

    const dialog=document.querySelector(".dialog-bc");
    dialog.style.display="none";
    document.querySelector("body").style.overflow="";    

}


function aparecerBuscador(){
        
    buttonSearch.style.display="none";

    searcher.style.display="";
    searcher.style.animationName="aparecerBuscador";
    searcher.style.animationDuration=".5s";
    searcher.style.animationFillMode="forwards";
    //searchWriter.focus();
}

function desaparecerBuscador(){
    if(!isDialog && !hover){
        
        searcher.style.animationName="desaparecerBuscador";
        searcher.style.animationDuration=".5s";
        searcher.style.animationFillMode="forwards";
        
        setTimeout(() => {
            searcher.style.display="none"
            buttonSearch.style.display="";
            buttonSearch.style.animationName="aparecerButton";
            buttonSearch.style.animationDuration=".5s";
        }, 500);

    }
}

if(searchContainer) searchWriter.addEventListener("blur", e => {
    focusWriter=false

    setTimeout(desaparecerBuscador, 100);

});

if(sectionsSelector) sectionsSelector.addEventListener("blur", e => {
    focusSelector=false;

    setTimeout(desaparecerBuscador, 100);

});

