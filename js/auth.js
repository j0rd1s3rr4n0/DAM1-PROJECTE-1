const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    alert(uid);
    document.getElementById('').class
  } else {
  }
});

function iniciar_sesion(){
    console.log('login');
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var uid = user.uid;
        uid = btoa(uid);
        delcookie('username');
        setCookie('uid',uid,1);
        document.querySelector("#iconos > li:nth-child(2) > a > i").className = "fa-solid fa-user-bounty-hunte";
        window.location.href = 'index.html';
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}

function registrar(){
    console.log('register');
    document.querySelector("#email").style ="";
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let repassword = document.querySelector("#re-password").value;
    if (email != ''){
        if(password === repassword ){
            //BORRAR
            console.log(password,repassword,email);
            //BORRAR
            auth.createUserWithEmailAndPassword(email, password)

                .then((userCredential) => {
                    alert('Hola, '+email);
                    var uid = user.uid;
                    uid = btoa(uid);
                    delcookie('username');
                    setCookie('uid',uid,1);

                    window.location.href = 'index.html#login';
                })
                .catch((error) => {console.log('Puede que algo haya salido mal...')});
        }else{
            alert('Las contraseñas no coinciden');
            document.querySelector("#password").value = '';
            document.querySelector("#re-password").value = '';
            document.querySelector("#email").style ="border: 2px solid red";
        }
    }

}
function restore(){
    let email = document.querySelector("#email");
    auth.sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById('loginBody').innerHTML = '<h2>EMAIL DE RECUPERACION</h2><h6>REVISE EL CORREO ELECTRONICO. PUEDE SER QUE VAYA A LA SECCIÓN DE SPAM.</h6><a id="cerrar" href="#">×</a>';})
  .catch((error) => {
    alert('Email NO Valido');
    var errorCode = error.code;
    var errorMessage = error.message;

    // ..
  });
}
function salir(){
    document.cookie = "";
    auth.signOut().then(() => {
        delcookie('username');
        delcookie('uid');
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
            iniciar_sesion();
            break;

        case 'REGISTRAR UNA CUENTA' :
            console.log('Registro');
            registrar()
            break;

        case 'TROUBLE LOGGING IN?' :
            console.log('Recuperar Contraseña');
            restore();
            break;

        case 'MI CUENTA':
            console.log('Mi Cuenta:');
            break;

        default :
            console.log('DEFAULT');
            break;
    }

}

// BORRAR
if(document.cookie){
	console.log(document.cookie);
}
//BORRAR