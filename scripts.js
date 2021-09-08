"use strict";
addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const   userButton = document.getElementById("user-btn"),
            userMenu = document.getElementById("dd-menu")

    const   itemButton = Array.from(document.querySelectorAll(".item .play-pause"))
    
    itemButton.map(button => {
        button.addEventListener("click", e => {
            button.classList.toggle("is-active")
            
            itemButton.map(btn => {
                if (btn !== button) {
                    btn.classList.remove("is-active")
                }
            })
        })
    })

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