// querySelector

const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elementos
    // const heading = document.querySelector('#heading') // también se puede hacer referencia al id
heading.textContent = 'Nuevo Heading'
// heading.classList.add('nueva-clase')
console.log(heading)