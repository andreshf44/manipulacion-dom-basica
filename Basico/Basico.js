//Representacion de algun lugar en memoria para guardar un valor

//Declarativa
function miFuncion(numero){
    console.log(numero +8);
}

miFuncion(3);

//Expresión
function sumar(a,b){
    return a + b;
}

sumar(2,5);g

var op1= "tijera";
var op2= "papel";

switch(op1, op2){
    case op1 === "tijera" && op2 ==="papel":
    console.log("op1 ganaste");
    break;
}

var frutas= ["Manzana","Platano","Cereza","Fresa"];

var masFrutas= frutas.push("Uva"); //Agrega un elemento al final

var ultimo= frutas.pop(); //Elimina el ultimo elemento

var nuevaLong = frutas.unshift("Mango");// Agrega un elemento al inicio

var borrarFruta= frutas.shift();//Elimina el primer elemento

var posicion = frutas.indexOf("Cereza");

//Loop

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiantes){
    console.log(`hola, ${estudiantes}`);
}

for(var i=0; i< estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();//va sacando elementos del array para ponerlos en el nuevo
    saludarEstudiante(estudiante);
}


var miAuto ={
    marca: "Susuki",
    modelo: "Baleno",
    anio: 2023,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
}

//Funcion constructora

function auto(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

var autoNuevo = new auto ("Susuki","Baleno",2023);
var autoNuevo2 = new auto("Kia","Sonet", 2023);
var autoNuevo3 = new auto ("Toyota","Yaris",2023);


//Recorrido de arrays

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700}
];

var articulosFiltrados = articulos.filter(function(articulo){ //Filtra
    return articulo.costo <= 500
});

var nombreArticulo = articulos.map(function(articulo){ //mapea
       return articulo.nombre;
});

//Encontrar un artículo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre ==="Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});


 

