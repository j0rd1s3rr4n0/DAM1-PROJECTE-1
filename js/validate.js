Array.from(document.querySelectorAll("input.loginUser")).forEach(n => {

    n.addEventListener("blur", e => {

        const element=e.target;

        if(element.value.trim()){

            element.nextElementSibling.classList.replace("into", "outo");

        }else{
            element.nextElementSibling.classList.toggle("into", true);
            element.nextElementSibling.classList.toggle("outo", false);
        }

    });

    n.addEventListener("focus", e => {

        setTimeout(() => e.target.nextElementSibling.classList.replace("into", "outo"), 500);

    });

});

let seePass=false;

Array.from(document.querySelectorAll('input[type="button"].seePass')).forEach(n => {

    n.addEventListener("click", e => {
        
        seePass=!seePass;

        e.target.nextElementSibling.type=seePass ? 'text' : 'password';
        
        if(seePass) e.target.classList.replace("no-ver", "ver")
        else e.target.classList.replace("ver", "no-ver");
});

});

function setError(element, messaje){

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

const password = document.getElementById("pass");
const repeatPassword=document.getElementById("pass-repeat");
const nombre = document.getElementById("name");
const apellido = document.getElementById("backname");
const email = document.getElementById("mail");

const validarMail = () => {
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)){ email.nextElementSibling.style.color="rgb(0, 128, 0)"; return true;}
    else if(email.value.trim()) email.nextElementSibling.style.color="rgb(156, 26, 26)";
    else email.nextElementSibling.style.color="black";
    return false;
};

const validarPass = () => {
    validarRepeatPass();
    if(password.value.length>=6){ password.nextElementSibling.style.color="rgb(0, 128, 0)"; return true;}
    else if(password.value.trim()) password.nextElementSibling.style.color="rgb(156, 26, 26)";
    else password.nextElementSibling.style.color="black";
    return false;
}

const validarRepeatPass = () => {
    if(repeatPassword.value===password.value && repeatPassword.value.trim()){ repeatPassword.nextElementSibling.style.color="rgb(0, 128, 0)"; return true;}
    else if(repeatPassword.value.trim()) repeatPassword.nextElementSibling.style.color="rgb(156, 26, 26)";
    else repeatPassword.nextElementSibling.style.color="black";
    return false;
}

// SignUp
const signUpForm = document.getElementById("registra");
if(signUpForm){

    email.addEventListener("keyup", validarMail);
    password.addEventListener("keyup", validarPass);
    repeatPassword.addEventListener("keyup", validarRepeatPass);

    signUpForm.addEventListener("submit", e => {
        e.preventDefault();
    
        register();    
    
    });

}

async function register(){

    const loading=document.createElement("DIV");
    loading.classList.add("loader");
    const gif=document.createElement("IMG");
    gif.src="../images/loading.gif";

    loading.appendChild(gif);
    
    const container=document.getElementById("registra");
    container.appendChild(loading);

    let createUser=true;


    let userExists=await readUsers(new where("correo", "==", email.value));

    userExists=userExists[0];

    Array.from(document.querySelectorAll(".loginUser")).forEach(n => {

        clearError(n);

        if(!n.value.trim()){
            createUser=false;
            setError(n, "El campo no puede estar vacio");

        }else if(n==email && !validarMail()){
            createUser=false;
            setError(email, "Introduce un correo válido");
        }else if(n==email && userExists){
            createUser=false;
            setError(email, "Este correo ya esta registrado");
        }else if(n==pass && !validarPass()){
            createUser=false;
            setError(password, "La contrasenya debe tener un mínimo de 6 caracteres");
        }else if(n==repeatPassword && !validarRepeatPass()){
            createUser=false;
            setError(repeatPassword, "La contrasenya no coincide");
        }

    });
    
    if(createUser){

        auth.languageCode = 'es';

        auth.createUserWithEmailAndPassword(email.value, password.value)
            .then(userCredential => userCredential.updateProfile({displayName: `${nombre.value} ${apellido.value}`}))
            .then(() => setUser(auth.currentUser))
            .then(() => auth.currentUser.sendEmailVerification())
            .then(() => {
                console.log("redirect");
                const user=auth.currentUser;
                const valueEmail=email.value;
                const valueName=nombre.value;  
                const valuePass=password.value;
                 
                setCookie("userPass", valuePass);
                setCookie("userUID", user.uid);             
                signUpForm.reset();
                window.location=`verified.html?mail=${valueEmail}&name=${valueName}`;
            })
            .catch(error => {
                window.location.href="#";
                fatalError("Algo ocurrió al registrarse", error.message + " : " + error.code);
                console.error(error);

                auth.currentUser.delete()
                    .then(() => console.log("User deleted"))
                    .catch(error => console.error(error));

            });

    }

    container.removeChild(loading);

}

// SignIn
const signInForm = document.getElementById("inicia");
if(signInForm) signInForm.addEventListener("submit", (e) => {
    console.log("signin");
    e.preventDefault();

    const email = document.getElementById("mail");
    const password = document.getElementById("pass");

    let login=true;

    [email, password].forEach(n => {
        clearError(n);
        if(!n.value.trim()){ 
            setError(n, "Introduce los datos para entrar")
            login=false;
        }
    });

    readUsers(new where("correo", "==", email.value))
        .then(userExist => {

            if(userExist[0] && login){

                auth.signInWithEmailAndPassword(email.value, password.value)
                    .then(userCredential => {
                                         
                        if(userCredential.emailVerified){

                            let promise;

                            let datosUser=userExist[0].data();
                            if(datosUser["verificado"]!=userCredential.emailVerified){
                                datosUser["verificado"]=userCredential.emailVerified;
                                promise=updateUser(userCredential, createDocUser(datosUser));
                            }

                            if(promise) promise.then(() => createCookiesAndRedirect());
                            else createCookiesAndRedirect();

                            function createCookiesAndRedirect(){

                                setCookie("userMail", email.value);
                                setCookie("userPass", password.value);
                                setCookie("userUID", userCredential.uid);             
                                
                                window.location='index.html';
                            
                                signInForm.reset();

                            }

                        }else{
                            setError(email, "Verifique la dirección de correo para entrar");
                            auth.signOut();
                        }

                    })
                    .catch(err => {
                        //CONTRASEÑA INCORRECTA
                        console.error(err);
                        setError(pass, "Contraseña incorrecta")
                    });

            }else setError(email, "El correo no existe")

        });

});

// SignUp google
const googlebutton = document.getElementById("googlelogin");

googlebutton.addEventListener("click", (e) => {

    e.preventDefault();

    //if(signInForm) signInForm.reset();
    //else if(signUpForm) signUpForm.reset();
    
    let provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('email');

    auth.languageCode = 'es';

   
    // provider=auth.currentUser.providerData;
    
    console.log(provider);

    let idToken

    auth.signInWithPopup(provider)
        .then(result => {
            idToken=result.credential.idToken;
            return readUsers(new where("correo", "==", result.user.email))
        })
        .then(userExist => {

            let user=auth.currentUser;

            console.log(user);

            let promise;

            if(userExist[0]){

                //actualizar verificaion

                let datosUser=userExist[0].data();
                datosUser["verificado"]=user.emailVerified;
                const displayName=user.displayName;

                const nombre=displayName.substring(0, displayName.lastIndexOf(" "));
                const apellido=displayName.substring(displayName.lastIndexOf(" ")+1, displayName.length);

                datosUser["nombre"]=nombre
                datosUser["apellido"]=apellido;

                promise=updateUser(user, createDocUser(datosUser));


            }else promise=setUser(user);

            promise.then(() => {

                setCookie("google", "true")
                setCookie("userUID", user.uid);
                setCookie("idToken", idToken);
                setCookie("userMail", user.email);
                removeCookie("userPass");

                window.location.href="index.html";

                //console.log("redirect");

                //añadir cookies y redireccionar

            });

        })
        .catch(error => {

            //fatalError("Algo ocurrió al registrarse", error.message + " : " + error.code);

            console.error(error);


        });
    
});

