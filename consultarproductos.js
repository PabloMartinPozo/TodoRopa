function consultarproductos() {
    const dataForSelect = {
        operation: "select",
        table: "productos"
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeproductoTerminado);
}

function consultarInfoDeproductoTerminado(response) {
    
    let divproductos = document.createElement("div");
    divproductos.className = "productos";

    for (let i = 0; i < response.values.length; i++) {
        
        let divproducto = document.createElement("div");
        divproducto.className = "producto";
        divproducto.setAttribute("onclick", "clickSobreproducto(" + response.values[i].ID + ")");

        
        let h1Titulo = document.createElement("h1");
        h1Titulo.innerHTML = response.values[i].NOMBRE; 

        divproducto.append(h1Titulo);


        let h4Director = document.createElement("h4");
        h4Director.innerHTML = "Marca: " + response.values[i].MARCA;
        divproducto.append(h4Director);

        let h4Protagonista = document.createElement("h4");
        h4Protagonista.innerHTML = "Género: " + response.values[i].GENERO;
        divproducto.append(h4Protagonista);



        let imagen = document.createElement("img");
        imagen.setAttribute("src", + response.values[i].IMAGEN);

        divproducto.append(imagen);


        let enlace = document.createElement("a");
        enlace.setAttribute("href", "infoproducto.html?id=" + response.values[i].ID);
        enlace.innerHTML = "Más Información";

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        divproducto.append(parrafoParaElEnlace);

        divproductos.append(divproducto);
    }

    document.getElementById("resultado").append(divproductos);
}

function clickSobreproducto(id) {
    window.location = "infoproducto.html?id=" + id;
}

consultarproductos();