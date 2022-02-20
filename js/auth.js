
function iniciar_sesion(){
    console.log('iniciar_sesion')
}
function registrar(){
    console.log('registrar')
}

/* LLAMADA A LA ACCION DE TODOS LOS FORMULARIOS DE LOGIN/REGISTRO/RECUPERAR CONTRASEÑA / INFO USUARIO ETC ETC*/
function actionForm(){

    switch(document.querySelector("#loginBody > h2").innerText){

        case 'ACCEDER A UNA CUENTA' :
            console.log('Login');
            break;

        case 'REGISTRAR UNA CUENTA' :
            console.log('Registro');
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
