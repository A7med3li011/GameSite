

import * as game from "./game.js";
import * as details from "./details.js";




let lis = document.querySelectorAll(".navbar-nav li a")
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active")
        })

        e.target.classList.add("active")
        game.getGames(e.target.innerHTML.toLowerCase())

    })
})

game.getGames("mmorpg")




let close = document.querySelector("#close");
close.addEventListener("click", () => {
    document.querySelector(".home").classList.remove("d-none")
            document.querySelector(".header").classList.remove("d-none")
            document.querySelector(".navbar").classList.remove("d-none")
            document.querySelector(".details").classList.add("d-none")
})
















