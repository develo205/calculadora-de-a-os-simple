anios = () => {
    // se obtiene los valores digitados por el usuario
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("año").value;

    let fechaUsuario = `${dia}/${mes}/${anio}`;
    console.log(fechaUsuario);
    
    // se obteine la fecha actual
    let fechaActual = new Date();
    
    let anioACtual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth() + 1;
    let diaActual = fechaActual.getDate();
    
    const diaSemanaNumero = fechaActual.getDay();
    const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    
    if (dia > 31 || mes > 12 || anio > anioACtual) {
        console.log("La fecha no es valida");
        alert("La fecha no es valida")
    }else if (dia == "" || mes == "" || anio == "") {
        alert("Los campos no pueden estar vacios")
        console.log("Los campos no pueden estar vacios");
    }else {
        let fechaObtemida = `
        <div class="resultado-numeros">
        <h1 class=" numeros">${anioACtual - anio}</h1> <h1>Años</h1>
        </div>
        <div class="resultado-numeros">
            <h1 class="numeros">${mesActual - mes}</h1> <h1>Meses</h1>
        </div>
        <div class="resultado-numeros">
            <h1 class="numeros">${diaActual - dia}</h1> <h1>Días</h1>
        </div>`;
        console.log(fechaObtemida);

        let edad = document.createElement("div");
        edad.innerHTML = `
        ${fechaObtemida}
        `;

        let contenido = document.getElementById("mostrar-resultado");
        contenido.appendChild(edad);
    }
    console.log("Ejecucion terminada")
}


