function insertarUsuario() {

    let usuario = {
        USUARIO: document.getElementById("Usuario").value,
        CONTRASENA: document.getElementById("Contraseña").value
    };

    
    

    const dataForInsert = {
        operation: "insert",
        table: "usuarios",
        object: usuario
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarUsuarioTerminado
    );
    
}

function insertarUsuarioTerminado(response) {
    console.log(response);
}

function alerta() {
    window.alert("Has Creado el Usuario de Forma Satisfactoria");
    window.location = "index.html"
}


insertarUsuario();