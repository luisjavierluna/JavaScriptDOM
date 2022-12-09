// querySelector

const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elementos
    // const heading = document.querySelector('#heading') // también se puede hacer referencia al id
heading.textContent = 'Nuevo Heading'
// heading.classList.add('nueva-clase')
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
// enlaces[0].textContent = 'Nuevo Texto para Enlace'
// enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')

// getElementById

const heading2 =  document.getElementById('heading')
console.log(heading2)

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el Href
nuevoEnlace.href = 'nuevo-enlace.html'

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace'

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

// Agregarlo al documeto
const navegacion = document.querySelector('.navegacion')

navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)

// Eventos

console.log(1)

window.addEventListener('load', imprimir)

window.onload = function() {
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ // solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4)
})


console.log(5)

function imprimir() {
    console.log(2)
}

window.onscroll = function() {
    console.log('scrolling...')
}