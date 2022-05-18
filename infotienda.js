function consultarTienda() {
    const urlParams = new URLSearchParams(window.location.search);
    const idTienda = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "tiendas",
        key: idTienda
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarTiendaTerminado);

}

function consultarTiendaTerminado(response)  {

    document.getElementById("tienda").innerHTML = response.value.NOMBRE;

    const dataForSelect = {
        operation: "select",
        table: "productos"
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarTiendasDeProductoTerminado);
}

function consultarTiendasDeProductoTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idTienda = urlParams.get("id");

    for (let i = 0; i < response.values.length; i++) {
        if (idTienda == response.values[i].ID_TIENDA) {
            let divproducto = document.createElement("div");
            divproducto.className="producto";

            let parrafoNombre = document.createElement("h1");
            parrafoNombre.innerHTML = response.values[i].NOMBRE;
            divproducto.append(parrafoNombre);

            let parrafoMarca = document.createElement("h4");
            parrafoMarca.innerHTML = response.values[i].MARCA;
            divproducto.append(parrafoMarca);

            let imagen = document.createElement("img");
            imagen.setAttribute("src", "/images/"+ response.values[i].IMAGEN);
            divproducto.append(imagen);

            let enlace = document.createElement("a");
            enlace.setAttribute("href", "infoproducto.html?id=" + response.values[i].ID);
            enlace.innerHTML = "Más Información";

            let parrafoParaElEnlace = document.createElement("p");
            parrafoParaElEnlace.append(enlace);

            divproducto.append(parrafoParaElEnlace);

            divproducto.setAttribute("onclick", "clickSobreproducto(" + response.values[i].ID + ")");



            document.getElementById("producto").append(divproducto);
        }
    }
}

function clickSobreproducto(id) {
    window.location = "infoproducto.html?id=" + id;
}

consultarTienda();