
function Auto (marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autos = [];

for (var i=0; i<4; i++){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var anio = prompt("Ingresa el año: ");
    autos.push(new auto(marca,modelo,anio));
}

for (var i=0; i< autos.length; i++){
    console.log(autos[i]);
}

