function check() {
    const dataForSelect = {
        operation: "select",
        table: "usuarios"
    };

    const idImplementacion = "AKfycbyEzagcuB9D2L8erazJMkpgkVYpYU3JZpK014MrAhoXlHKg64EdKC9L7P75RO5lWNiYbA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        checkTerminado);
}

function checkTerminado(response) {
    let userFound = false;

    for (let i = 0; i < response.values.length; i++) {
        let password = document.getElementById("pass").value;
        let user = document.getElementById("user").value;
        

        if (response.values[i].USUARIO == user && response.values[i].CONTRASENA == password) {
            console.log("Los datos son correctos.");
            userFound = true;
            window.location = "all.html";
        }
    }

    if (userFound == false) {
        window.alert("Los datos no son correctos!!");
    }
}