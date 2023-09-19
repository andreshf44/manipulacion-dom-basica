/*const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafo = document.getElementsByClassName('parrafo1');
const parrafoId = document.getElementById('parrafo');
const input = document.querySelector('input');

console.log({
    h1,p,parrafo,parrafoId, input,
});


h1.innerHTML = 'Cambio Titulo <br> Feo';
h1.innerText ='cambia pero agrega todo el texto ';
console.log(h1.getAttribute('class')); //nos entrega el nombre de la clase
h1.setAttribute('class', 'nuevoTitulo'); //nos cambia la clase
h1.classList.add('claseAgregada'); // nos agrega una clase
h1.classList.remove('nuevoTitulo'); //nos elimina la clase

input.value = "agregar valor";

const img = document.createElement('img');//Se crea el elemento img
img.setAttribute('src','https://images.pexels.com/photos/14653224/pexels-photo-14653224.jpeg?auto=compress&cs=tinysrgb&w=600')//Se le agrega una imagen
parrafoId.innerHTML = ""; //Se borra el contenido del parrafo
parrafoId.append(img);//Se agrega la imagen al parrafo
*/


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*btn.addEventListener('click', btnOnClick);//evento que queramos ejecutar, funcion que queremos llamar.
Cuando es un boton se usa esta nomenclatura
function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

form.addEventListener('submit',sumarInputValues); //se usa para un formulario

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}*/

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
//En este caso al btn del formulario hay q especificarle que es de tipo btn en el html