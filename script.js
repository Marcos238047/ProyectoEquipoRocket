const burgerIconContainer = document.getElementById('burger-icon-container')
const toggleMenu = document.getElementById('menu-close')
console.log(burgerIconContainer)

burgerIconContainer.addEventListener('click', () => {

    if(toggleMenu.classList.contains('menu-close')) {
        toggleMenu.classList.remove('menu-close')
        toggleMenu.classList.add('menu-open')
    } else {
        toggleMenu.classList.remove('menu-open')
        toggleMenu.classList.add('menu-close')
    }
    
})
function cambiarImagen() {
    // Obtiene el elemento de la imagen
    var imagen = document.getElementById('rosharsimbolo');
    
    // Cambia el atributo 'src' de la imagen
    if (imagen.src.includes('imagenes/Rosharsimbolo.png')) {
        imagen.src = 'imagenes/stormgif.webp';  // Cambia a la segunda imagen
    } else {
        imagen.src = 'imagenes/Rosharsimbolo.png';  // Cambia de vuelta a la primera imagen
    }
}
