let nameSections=[];

let objectSections=[];

let productos={};
let productosId={};

async function readSection(){

    try{

        let secciones=await getAll(db.collection("secciones"));

        secciones.forEach(s => {

            nomSeccio=s.data()["nombre"];

            nameSections.push(nomSeccio);

            productos[nomSeccio]=new Array();
            productosId[nomSeccio]=new Array();

            objectSections[nomSeccio]=s;


        });

        addSections(nameSections);

    }catch(Error){
         fatalError("Algo ocurrió al cargar con el servidor", Error);
    }

}

function setCookie(clave, valor){

    const fecha=new Date();
    let expiracion=new Date(fecha.getFullYear()+1, fecha.getMonth(), fecha.getDay(), fecha.getHours()).toUTCString();

    document.cookie=`${clave}=${valor}; expires=${expiracion}`;
    
}

function updateCookie(clave, valor){

    const fecha=new Date();
    let expiracion=new Date(fecha.getFullYear()+1, fecha.getMonth(), fecha.getDay(), fecha.getHours()).toUTCString();

    document.cookie=`${clave}=${valor}; expires=${expiracion}`;


}

function removeCookie(clave){

    const fecha=new Date().toUTCString();

    document.cookie=`${clave}=; expires=${fecha}; max-age=0`;

}

function removeAllCookies(){

    removeCookie("userMail");
    removeCookie("userPass");
    removeCookie("userUID");
    removeCookie("idToken");
    removeCookie("google");

}

function getCookie(clave){
    
    let cookie=document.cookie;

    console.log({cookie});

    let cookieSplit=cookie.split(";");

    console.log({cookieSplit});

    let valor;

    cookieSplit.forEach(n => {

        let clave_valor=n.split("=");

        if(clave_valor[0].trim()===clave) valor=clave_valor[1].trim();

    });

    return valor;

}

function loadUrlData(url=null){

    let data=url || window.location.search;

    data=data.substring(1, data.length);

    data=data.split("&");

    let datos={};

    for(d of data){

        const info=d.split('=');

        datos[info[0]]=info[1];

    }

    return datos;

}


//TODO
//limit o select top
//order by
//where
//limit
//startAfter - startAt

//async function readProducts(callback, start=null, end=null, where=null, orderBy=null){
async function readProducts(callback, where=null, orderBy=null, start=null, end=null){
    //console.log("-");
    let productosDocument;
    
    let collection=db.collection("productos");

    if(where) collection=collection.where(where.camp, where.comparator, where.value);
    
    //if(orderBy) collection=collection.orderBy(orderBy);
    
    //if(where) productosDocument=await getAll(db.collection("productos").where(where.camp, where.comparator, where.value));
    //else productosDocument=await getAll(db.collection("productos"));

    try{

        productosDocument=await getAll(collection);

        console.log(productosDocument);

        //for(p of productos) productos[p]=new Array();

        for(i in productos){

            productos[i]=new Array();
            productosId[i]=new Array();

        }


        for(p of productosDocument){

            const id=p.id;
            const datos=p.data();

            console.log(datos);

            console.log(datos);

            const documentSeccion=await getById(db.collection("secciones"), datos["seccion"].id)

            const seccion=documentSeccion.data()["nombre"];

            const campos=["nombre", "descripcion", "imagen", "precio", "stock"];

            let producto=[];

            campos.forEach(n => producto[n]=datos[n]);

            productos[seccion].push(producto);
            productosId[seccion].push(id);

        }

        console.log({productosDocument});

        callback(productos, productosId);

    }catch(Error){
        fatalError("Algo ocurrió al cargar con el servidor", Error);
        console.error(Error);
    }

}

function readProduct(id){

    return new Promise((resolved, reject) => {

        getById(db.collection("productos"), id)
            .then(resolved)
            .catch(reject);

    });

}

class where{
    // camp=null;
    // comparator=null;
    // value=null;

    constructor(camp, comparator, value){
        this.camp=camp;
        this.comparator=comparator;
        this.value=value;
    }
}

function readUsers(where=null){

    let collection=db.collection("usuarios");

    if(where) collection=collection.where(where.camp, where.comparator, where.value);

    return getAll(collection);

}


function createDefaultDocUser(user){

    console.log(user);

    const displayName=user.displayName;

    const nombre=displayName.substring(0, displayName.lastIndexOf(" "));
    const apellido=displayName.substring(displayName.lastIndexOf(" ")+1, displayName.length);

    const mail=user.email;
    const verificado=user.emailVerified;

    /*let doc={};

    doc.nombre=nombre;
    doc.apellido=apellido;
    doc.correo=mail;
    doc.verificado=verificado;
    doc.cesta=[];
    doc.deseo=[];
    doc.pedidosFecha=[];
    doc.pedidosProductos=[];*/

    userData=[];

    userData["nombre"]=nombre;
    userData["apellido"]=apellido;
    userData["correo"]=mail;
    userData["verificado"]=verificado;
    userData["cesta"]=[];
    userData["cestaCantidad"]=[];
    userData["deseo"]=[];
    userData["pedidosFecha"]=[];
    userData["pedidosProductos"]=[];

    return createDocUser(userData);

}

function createDocUser(userData){

    let doc={};

    doc.nombre=userData["nombre"];
    doc.apellido=userData["apellido"];
    doc.correo=userData["correo"];
    doc.verificado=userData["verificado"];
    doc.cesta=userData["cesta"];
    doc.deseo=userData["deseo"];
    doc.cestaCantidad=userData["cestaCantidad"];
    doc.pedidosFecha=userData["pedidosFecha"];
    doc.pedidosProductos=userData["pedidosProductos"];

    return doc;

}

function createDocProduct(productData){

    let doc={}

    doc.descripcion=productData["descripcion"];
    doc.imagen=productData["imagen"];
    doc.nombre=productData["nombre"];
    doc.precio=productData["precio"];
    doc.seccion=productData["seccion"];
    doc.stock=productData["stock"];

    return doc;

}

const readUser = uid => new Promise((resolved, reject) => {

    getById(db.collection("usuarios"), uid)
        .then(d => resolved(d.data()))
        .catch(reject);

});

const setUser = user => add(db.collection("usuarios"), createDefaultDocUser(user), user.uid);

const updateUser = (user, doc=null) => updateById(db.collection("usuarios"), doc || createDefaultDocUser(user), user.uid);

const deleteUser = user => deleteById(db.collection("usuarios"), user.uid);

const loginPassword = (mail, pass) => auth.signInWithEmailAndPassword(mail, pass);

const updateProduct = (id, doc) => updateById(db.collection("productos"), doc, id);

function logOut(){

    auth.signOut()
        .then(() => removeAllCookies())
        .catch(error => console.error(error));

}
