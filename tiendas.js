function consultartiendas() {
    const dataForSelect = {
        operation: "select",
        table: "tiendas"
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDetiendaTerminado);
}

function consultarInfoDetiendaTerminado(response) {
    
    let divtiendas = document.createElement("div");
    divtiendas.className = "tiendas";

    for (let i = 0; i < response.values.length; i++) {
        
        let divtienda = document.createElement("div");
        divtienda.className = "tienda";
        divtienda.setAttribute("onclick", "clickSobretienda(" + response.values[i].ID + ")");

        
        let h1Titulo = document.createElement("h1");
        h1Titulo.innerHTML = response.values[i].NOMBRE; 

        divtienda.append(h1Titulo);


        let h4Director = document.createElement("h4");
        h4Director.innerHTML = "Ciudad: " + response.values[i].CIUDAD;
        divtienda.append(h4Director);

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "infotienda.html?id=" + response.values[i].ID);
        enlace.innerHTML = "Productos Disponibles";

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        divtienda.append(parrafoParaElEnlace);

        divtiendas.append(divtienda);
    }

    document.getElementById("resultado").append(divtiendas);
}

function clickSobretienda(id) {
    window.location = "infotienda.html?id=" + id;
}

consultartiendas();