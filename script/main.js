"use strict"

// hamburgMenu
const menu = document.getElementById("menu");
const hamburgMenu = document.getElementById("hamburgMenu");

hamburgMenu.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("smDisplayNone");
}