const select = document.getElementById('select-container')
const result = document.querySelectorAll('.img-result')
const jugar = document.getElementById('jugar')
const player = document.getElementById('player')
const boot = document.getElementById('boot')
const cube = document.querySelectorAll('.cube')
const cubeResult = document.getElementById('cube-result')
let playerScore = 0;
let bootScore = 0;
let ganador;
let human;

select.addEventListener('click', (event) => {
    human = event.target.alt

    if (human == 'piedra' || human == 'papel' || human == 'tijeras') {
        result[0].src = `./imagenes/${human}.png`
        result[0].style.background = "black"

        cube[0].classList.add("cube-animation")
        cube[1].classList.add("cube-animation")
        setTimeout(game, 1000)
    }
})

function getComputerChoice() {
    let select = Math.floor(Math.random() * 3)
    if (select == 0) {
        return "piedra"
    }
    if (select == 1) {
        return "papel"
    }
    else {
        return "tijeras"
    }
}

function enfrentamiento(computer, human) {

    if (computer == "piedra" && human == "tijeras") {
        bootScore++
        return ("Piedra gana a Tijeras \n Has perdido")
    }
    if (computer == "piedra" && human == "papel") {
        playerScore++
        return "Papel gana a Piedra \n Has ganado"
    }
    if (computer == "piedra" && human == "piedra") {
        return " Piedra contra Piedra \n Empate"
    }

    if (computer == "papel" && human == "tijeras") {
        playerScore++
        return "Tijeras gana a papel \n Has ganada"
    }
    if (computer == "papel" && human == "piedra") {
        bootScore++
        return " Papel gana a Piedra \n Has perdido"
    }
    if (computer == "papel" && human == "papel") {
        return "Papel Contra Papel \n Empate"
    }

    if (computer == "tijeras" && human == "tijeras") {
        return "Tijeras contra Tijeras \n Empate"
    }
    if (computer == "tijeras" && human == "papel") {
        bootScore++
        return "Tijeras gana a papel \n Has perdido"
    }
    if (computer == "tijeras" && human == "piedra") {
        playerScore++
        return " Piedra gana a tijera \n Has ganado"
    }
}

function game() {
    let computer = String(getComputerChoice())
    let resultado = String(enfrentamiento(computer, human))

    if (computer == 'piedra' || computer == 'papel' || computer == 'tijeras') {
        cubeResult.src = `./imagenes/${computer}.png`
        cubeResult.style.background = "black"
    }

    cube[0].classList.remove("cube-animation")
    cube[1].classList.remove("cube-animation")

    player.textContent = playerScore;
    boot.textContent = bootScore
    ganador = resultado
    setTimeout(reset, 500)

}

function reset() {
    if (playerScore == 3) {
        alert('HAS GANADO')
        playerScore = 0;
        bootScore = 0
    }
    if (bootScore == 3) {
        alert('HAS PERDIDO')
        playerScore = 0;
        bootScore = 0
    }
}
