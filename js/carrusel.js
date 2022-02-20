

window.addEventListener("load", () =>  moveImage(Array.from(document.querySelectorAll(".slide .slide_img"))));

async function moveImage(images){

    let i=0;

    while(true){

        await enterImage(images[i]);
        exitImage(images[i]);

        i++;

        if(i==images.length) i=0;

    }

    //CAMBIAR A UN setInterval()
 

}

function enterImage(element){

    return new Promise((resolved, reject) => {

        element.style.display="";

        element.style.animationName="enterSlideImg";
        element.style.animationDuration="1s";
        element.style.animationFillMode="forwards";

        setTimeout(() => resolved(), 3000);

    });

}

function exitImage(element){
    return new Promise((resolved, reject) => {

        element.style.animationName="exitSlideImg";
        element.style.animationDuration="1s";
        element.style.animationFillMode="forwards";

        setTimeout(() => {
            element.style.display="none";
            resolved()
        }, 1000);

    });
}

