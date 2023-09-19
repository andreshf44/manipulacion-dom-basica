let n = prompt("Indique cantidad de numeros");

for (let i = 0; i <= n; i++) {
    console.log("numero " + i);
}

let respuesta

while(respuesta !='4'){
    let pregunta = prompt("Cuanto es 2+2?")
    respuesta = pregunta;
}


let arr = ["Casa", 23 , "Computador"];

function imprimerPrimerElemento(arr){
    console.log(arr[0]);
}
imprimerPrimerElemento(arr);

let arrayPrueba = ["Camilo", "Ximena","Alejandro","Gonzalo", "Mariana"];

function imprimirCadaElemento(arr){
    for (let i=0; i<arr.length; i++){
        console.log("El elemento " + (i+1)+ " de nuestro array es: " + arr[i]);
    }
}

//Convertir objt en array
const obj = {
    nombre: "Carmencha",
    edad: 43, 
    autos: ["Susuki", "Toyota", "Kia"],
};

function imprimirCadaElementoObjeto(obj){
    const arr = Object.values(obj);
    for (let i=0; i<arr.length; i++){
        console.log("El elemento " + (i+1)+ " de nuestro array es: " + arr[i]);
    }
}

imprimirCadaElementoObjeto(obj);


function conseguirTipoSuscripcion(suscripcion){
    if(suscripcion == 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante el mes");
        return;
    }
    if(suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(suscripcion == 'ExpertDuo'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
   
    console.warn("Ese tipo de suscripción no existe")
}

conseguirTipoSuscripcion("Free");



const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante el mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

let solicitud = prompt("Ingresa tipo de suscripcion que buscas: ");

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripción no existe");
}

conseguirTipoSuscripcion(solicitud);