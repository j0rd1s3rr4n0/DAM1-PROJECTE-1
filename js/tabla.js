const items = db.collection("tabla");

function addItem(doc) {
    add(items, doc)
    .then(() => {
        loadItems();

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("image").value = "";

        showAlert("Element guardat correctament", "alert-success");
    })
    .catch(() => {
        showAlert("Error al intentar guardar l'element", "alert-danger");
    });
}

function deleteItem(id) {
    deleteById(items, id)
    .then(() => {
        loadItems();
        showAlert("Element eliminat correctament", "alert-success");
    }).catch(() => {
        showAlert("Error al intentar eliminar l'element", "alert-danger");
    });
}

function editItem(id) {
    document.getElementById("elementId").value = id;
    document.getElementById("thumbnail").style.visibility = "visible";
    selectById(items, id)
    .then((doc) => {
        document.getElementById("title").value = doc.data().title;
        document.getElementById("content").value = doc.data().content;
        document.getElementById("thumbnail").src = doc.data().image;
    })
    .catch(() => {
        showAlert("Error al intentar editar l'element", "alert-danger");
    });
}

function loadItems() {
    selectAll(items)
    .then((arrayItems) => {
        document.getElementById("listItems").innerHTML =    `<tr>
                                                                <th></th>
                                                                <th>Títol</th>
                                                                <th>Contingut</th>
                                                                <th></th>
                                                            </tr>`; 
        arrayItems.forEach((doc) => {
            let image = "";
            if (doc.data().image != null) {
                image = `<img src="${doc.data().image}" class="rounded" style="max-width: 100px; max-height: 100px;" "alt="${doc.data().title}">`;
            }
            document.getElementById("listItems").innerHTML +=   `<tr>
                                                                    <td>${image}</td>
                                                                    <td>${doc.data().title}</td>
                                                                    <td>${doc.data().content}</td>
                                                                    <td>
                                                                        <button type="button" class="btn btn-danger float-right" onclick="eliminar('${doc.id}', '${doc.data().image}')">
                                                                            Eliminar
                                                                        </button>
                                                                        <button type="button" class="btn btn-primary mr-2 float-right" onclick="editItem('${doc.id}')">
                                                                            Editar
                                                                        </button>
                                                                    </td>
                                                                </tr>`;
        });     
    })
    .catch(() => {
        showAlert("Error al mostrar els elements", "alert-danger");
    });
}

function updateItem(id, doc) {
    updateById(items, id, doc)
    .then(() => {
        loadItems();

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("image").value = "";
        document.getElementById("thumbnail").style.visibility  = "hidden";

        showAlert("Element actualitzat correctament", "alert-success");
    })
    .catch(() => {
        showAlert("Error al intentar actualitzat l'element", "alert-danger");
    });
}