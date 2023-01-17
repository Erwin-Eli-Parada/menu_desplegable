const menuToggle = document.querySelector('.menuToggle');
const navegacion = document.querySelector('.navigation');

menuToggle.addEventListener("click",function(){
    navegacion.classList.toggle('open')
});

const list = document.querySelectorAll(".list");

list.forEach(item => {
    item.addEventListener("click", function(){
        list.forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});