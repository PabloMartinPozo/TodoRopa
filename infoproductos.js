function consultarInfoDeProducto() {

    const urlParams = new URLSearchParams(window.location.search);
    const idcoche = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "productos",
        key: idcoche
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeProductoTerminado);
}

function consultarInfoDeProductoTerminado(response) {
    document.getElementById("titulo").innerHTML = response.value.MARCA + " " + response.value.NOMBRE;
    document.getElementById("Precio").innerHTML = "Precio: " + response.value.PRECIO + " €" ;
    document.getElementById("imagen").setAttribute("src", "/images/" + response.value.IMAGEN);
    document.getElementById("Genero").innerHTML = "Género: "+response.value.GENERO
    document.getElementById("Color").innerHTML = "Color: "+response.value.COLOR;
    document.getElementById("Tienda").innerHTML = "Tienda: "+response.value.ID_TIENDA;
    document.getElementById("Categoria").innerHTML = "Categoría: "+response.value.ID_CATEGORIA;
    document.getElementById("ID").innerHTML = "ID: "+response.value.ID;


    const dataForSelect = {
        operation: "select",
        table: "tiendas",
        key: response.value.ID_TIENDA
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarTiendaTerminado
    );

    const dataForSelectt = {
        operation: "select",
        table: "categorias",
        key: response.value.ID_CATEGORIA
    };
    
    const idImplementacionn = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    
    GoogleSheetDataBaseOperation(
        idImplementacionn,
        dataForSelectt,
        consultarCategoriaTerminado);
}

function consultarTiendaTerminado(response) {
    document.getElementById("Tienda").innerHTML = "Tienda: " +  response.value.NOMBRE;
}

function consultarCategoriaTerminado(response) {
    document.getElementById("Categoria").innerHTML = "Categoria: " +  response.value.CATEGORIA;
}

function ddelete() {

    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");


    let idGoogleSheet = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    let tableName = "productos";
    
    const dataForDelete = {
        operation: "delete",
        table: tableName,
        key: idProducto
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForDelete,
        ddeleteTerminado)
}

function ddeleteTerminado() {
    window.alert("¡Se ha Eliminado Satisfactoriamente la Fila Seleccionada!");
    window.location = "productos.html";
}

consultarInfoDeProducto();