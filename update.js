function update() {
    let idGoogleSheet = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";
    let key           = document.getElementById("key").value;
    let tableName     = "productos";
    let columnName1   = "NOMBRE";
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = "MARCA";
    let columnValue2  = document.getElementById("columnValue2").value;
    let columnName3   = "GENERO";
    let columnValue3  = document.getElementById("columnValue3").value;
    let columnName6   = "IMAGEN";
    let columnValue6  = document.getElementById("columnValue6").value;
    let columnName7   = "PRECIO";
    let columnValue7  = document.getElementById("columnValue7").value;
    let columnName8   = "COLOR";
    let columnValue8  = document.getElementById("columnValue8").value;
    
    
    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }

    if (columnName3) {
        newRow[columnName3] = columnValue3;
    }

    if (columnName6) {
        newRow[columnName6] = columnValue6;
    }

    if (columnName7) {
        newRow[columnName7] = columnValue7;
    }

    if (columnName8) {
        newRow[columnName8] = columnValue8;
    }

    const dataForSelect = {
        operation: "update",
        table: tableName,
        key: key,
        object: newRow
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect);
}

function feedback() {
    window.alert("¡Se ha Actualizado la Fila Seleccionada!")
}
