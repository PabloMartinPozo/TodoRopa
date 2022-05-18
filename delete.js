function ddelete() {
    let idGoogleSheet = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    let tableName     = "productos";
    let key           = document.getElementById("key").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect);
}

function feedback() {
    window.alert("¡Se ha Eliminado Satisfactoriamente la Fila Seleccionada!")
}

function ddelete2() {
    let idGoogleSheet = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    let tableName     = "categorias";
    let key           = document.getElementById("keyy").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect);
}

function ddelete3() {
    let idGoogleSheet = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    let tableName     = "tiendas";
    let key           = document.getElementById("keyyy").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect);
}



