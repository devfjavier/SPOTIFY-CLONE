"use strict";
addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const userButton = document.getElementById("user-btn"),
          userMenu = document.getElementById("dd-menu")
    
    userButton.addEventListener("click", () => {
        userButton.classList.toggle("is-active")
        userMenu.classList.toggle("is-active")
    })


    
}