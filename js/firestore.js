const db=firebase.firestore();

function getAll(collection){

    return new Promise((resolved, reject) => {

        collection.get()
            .then(d => resolved(d.docs))
            .catch(reject);

    });
}

function getById(collection, id){

    return new Promise((resolved, reject) => {

        collection.doc(id).get()
            .then(d => resolved(d))
            .catch(reject);

    });
}

function selectWhere(collection, field, operator, value) {
    return new Promise((resolve, reject) => {
        collection.where(field, operator, value).get()
        .then((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
                docs.push(doc);
            });
            resolve(docs);
        })
        .catch(reject);
    });
}

function add(collection, doc, id=null) {
    return new Promise((resolve, reject) => {
        let promise;
            if(id) promise=collection.doc(id).set(doc);
            else promise=collection.add(doc);

        promise
            .then(resolve)
            .catch(reject);
    });
}

function updateById(collection, doc, id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).update(doc)
        .then(resolve)
        .catch(reject);
    });
}

function deleteById(collection, id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).delete()
        .then(resolve)
        .catch(reject);
    });
}

