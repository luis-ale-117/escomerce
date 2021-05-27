let m = 8;
let f = 1;

function sumaIntegrantes(val1, val2) {
    let sumEq = val1 + val2;
    //Mostrar un mensaje en pantalla
    //window.alert("¡Hola Guapetones! :)");
    // Mostrar un mensaje en consola del numero de integrantes del equipo 
    console.log("Esto es una prueba: " + sumEq);
    return sumEq;
}
//Funcion para hacer conteo de miembros
function countMem(numMem) {
    var ul = document.getElementById("base_Footer_miembros");
    var i = 0,
        itemCount = 0;
    while (ul.getElementsByTagName('li')[i++]) itemCount++;
    document.getElementById("numIntegrantes").innerHTML = "Hay " + itemCount + " de " + numMem + " Integrantes registrados:";
}
let integrantes = sumaIntegrantes(m, f);
countMem(integrantes);