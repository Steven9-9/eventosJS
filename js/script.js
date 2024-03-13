
let personas = [];


function capturarDatos(){

}

function mostrarCards(){


}

let inputs = document.querySelectorAll('#formulario input')
//console.log(inputs)

inputs.forEach(function(input){

  // console.log(input)

   input.addEventListener('blur', validarFormulario)
   input.addEventListener('click', validarFormulario)
  


})


let expresionesRegulares = {

   nombre: /^[a-zA-Z]+$/
};

function validarFormulario(e){

switch (e.target.name){

case "nombre":

if(expresionesRegulares.nombre.test(e.target.value)){

console.log('paso la validacion')
}else{
   console.log('No paso la validacion')
}

break;


default:
   break;

}

}




/*let personas = []




function capturarDatos(){

console.log('capturarDatos')

let persona ={

 nombre : document.getElementById('nombre').value,
 correo: document.getElementById('correo').value,
 fecha: document.getElementById('fechaNacimiento').value,
 ciudad: document.getElementById('ciudad').value,

};

personas[0] =persona

personas.push(persona)
mostrarCards()

}

function mostrarCards(){

   document.getElementById("cards").innerHTML="";

    personas.map(function(persona){

       let card = document.createElement('section');
       let nombre = document.createElement('p')
       let correo = document.createElement('p')
       let telefono = document.createElement('p')
       let fecha = document.createElement('p')
       let ciudad = document.createElement('p')

       nombre.textContent = persona.nombre;
       correo.textContent = persona.correo;
       telefono.textContent = persona.telefono;
       fecha.textContent = persona.fecha;
       ciudad.textContent = persona.ciudad;

        card.append(nombre, correo, telefono, fecha, ciudad)

     document.getElementById('cards').append(card)

    })
}


let numeros = []

numeros.push()
numeros.push()
numeros.push()
numeros.push()


numeros.pop()
numeros.pop()
numeros.pop()
numeros.pop()
*/