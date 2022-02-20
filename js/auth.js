const auth = firebase.auth();

function iniciar_sesion(){
    console.log('login');
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}

function registrar(){
    console.log('register');
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let repassword = document.querySelector("#re-password").value;
    if((password === repassword )&&((email != '')||(email != null)||(email != undefined))){
        //BORRAR
        console.log(password,repassword,email);
        //BORRAR
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {alert('Hola, '+email);})
            .catch((error) => {alert('Algo salio mal')});
    }else{
        alert('Las contraseñas no coinciden');
        document.querySelector("#password").value = '';
        document.querySelector("#re-password").value = '';
    }
}

function salir(){
    document.cookie = "";
    auth.signOut().then(() => {
    // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

/* LLAMADA A LA ACCION DE TODOS LOS FORMULARIOS DE LOGIN/REGISTRO/RECUPERAR CONTRASEÑA / INFO USUARIO ETC ETC*/
function actionForm(){

    switch(document.querySelector("#loginBody > h2").innerText){

        case 'ACCEDER A UNA CUENTA' :
            console.log('Login');
            break;

        case 'REGISTRAR UNA CUENTA' :
            console.log('Registro');
            registrar()
            break;

        case 'TROUBLE LOGGING IN?' :
            console.log('Recuperar Contraseña');
            break;

        case 'MI CUENTA':
            console.log('Mi Cuenta:');
            break;

        default :
            console.log('DEFAULT');
            break;
    }
    let user = document.querySelector("#user").value;
	let pass = document.querySelector("#password").value;
    if(pass && user){
    	console.log(user+':'+pass);
    }else{console.log('NO HAY NADA')}

}

// BORRAR
if(document.cookie){
	alert(document.cookie);
}
//BORRAR