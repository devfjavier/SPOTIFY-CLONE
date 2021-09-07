"use strict";
addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const userButton = document.getElementById("user-btn"),
          userMenu = document.getElementById("dd-menu")
    
    userButton.addEventListener("click", e => {
        e.stopPropagation()
        userButton.classList.toggle("is-active")
        userMenu.classList.toggle("is-active")
    })
    
    
    document.addEventListener("click", () => {
        userButton.classList.remove("is-active")
        userMenu.classList.remove("is-active")
    })
}