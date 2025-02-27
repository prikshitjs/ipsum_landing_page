let menubar = document.getElementById("menubar");
let menu    = document.querySelector(".menu");

menubar.addEventListener("click", ()=> {
    menu.classList.add('showmenu');
})
function closemenu() {
    menu.classList.remove('showmenu');
}

let userlinks = document.querySelectorAll(".userlinks");

userlinks.forEach((element,i) => {
    element.addEventListener("click", ()=> {
        menu.classList.remove('showmenu');
    })
})