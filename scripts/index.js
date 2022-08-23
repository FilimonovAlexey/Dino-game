const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
       dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let dinoTop = parsInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parsInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER!")
    }
}, 10)