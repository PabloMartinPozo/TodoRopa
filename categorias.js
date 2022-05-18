function consultarCategorias() {
    const dataForSelect = {
        operation: "select",
        table: "categorias"
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeCategoriaTerminado);
}

function consultarInfoDeCategoriaTerminado(response) {
    
    let divCategorias = document.createElement("div");
    divCategorias.className = "categorias";

    for (let i = 0; i < response.values.length; i++) {
        
        let divCategoria = document.createElement("div");
        divCategoria.className = "categoria";
        divCategoria.setAttribute("onclick", "clickSobreCategoria(" + response.values[i].ID + ")");

        
        let h1Titulo = document.createElement("h1");
        h1Titulo.innerHTML = response.values[i].CATEGORIA; 

        divCategoria.append(h1Titulo);


        let h4Director = document.createElement("h4");
        h4Director.innerHTML = "ID: " + response.values[i].ID;
        divCategoria.append(h4Director);
        divCategorias.append(divCategoria);
    }

    document.getElementById("resultado").append(divCategorias);
}

function clickSobreCategoria(id) {
    window.location = "infoCategoria.html?id=" + id;
}

consultarCategorias();