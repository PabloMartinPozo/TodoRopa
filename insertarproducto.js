function insertarproducto() {

    let producto = {
        MARCA: document.getElementById("Marca").value,
        NOMBRE: document.getElementById("Modelo").value,
        COLOR: document.getElementById("Color").value,
        IMAGEN: document.getElementById("imagen").value,
        PRECIO: document.getElementById("Precio").value
    };

    
    

    const dataForInsert = {
        operation: "insert",
        table: "productos",
        object: producto
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarproductoTerminado);
}

function insertarproductoTerminado(response) {
    console.log(response);
}

function alerta() {
    window.alert("¡Has Introducido el Nuevo Prodcuto de Forma Satisfactoria!");
}


insertarproducto();

function insertarcategoria() {

    let categoria = {
        ID: document.getElementById("ID").value,
        CATEGORIA: document.getElementById("Categoria").value,
    };

    
    

    const dataForInsert = {
        operation: "insert",
        table: "categorias",
        object: categoria
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarcategoriaTerminado);
}

function insertarcategoriaTerminado(response) {
    console.log(response);
}

insertarcategoria();

function insertartienda() {

    let tienda = {
        ID: document.getElementById("ID").value,
        NOMBRE: document.getElementById("Nombre").value,
        CIUDAD: document.getElementById("Ciudad").value,
        CALLE: document.getElementById("Calle").value
    };

    
    

    const dataForInsert = {
        operation: "insert",
        table: "tiendas",
        object: tienda
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertartiendaTerminado);
}

function insertartiendaTerminado(response) {
    console.log(response);
}

insertarcategoria();
