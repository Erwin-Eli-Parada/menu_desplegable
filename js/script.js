const menuToggle = document.querySelector('.menuToggle');
const navegacion = document.querySelector('.navigation');

menuToggle.addEventListener("click",function(){
    navegacion.classList.toggle('open')
});