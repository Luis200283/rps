function getComputerChoice(){
    let select = Math.floor(Math.random()*3)
    if (select == 0) {
        return "piedra"
    }
    if(select == 1){
        return "papel"
    } 
    else {
        return "tijeras"
    }
}

function enfrentamiento(computer, human){

    if(computer == "piedra" && human == "tijeras"){
        return ("Piedra gana a Tijeras \n Has perdido")
    }
    if(computer == "piedra" && human == "papel"){
        return "Papel gana a Piedra \n Has ganado"
    }    
    if(computer == "piedra" && human == "piedra"){
        return " Piedra contra Piedra \n Empate"
    }

    if(computer == "papel" && human == "tijeras"){
        return "Tijeras gana a papel \n Has ganada"
    }    
    if(computer == "papel" && human == "piedra"){
        return " Papel gana a Piedra \n Has perdido"
    }    
    if(computer == "papel" && human == "papel"){
        return "Papel Contra Papel \n Empate"
    }
    
    if(computer == "tijeras" && human == "tijeras"){
        return "Tijeras contra Tijeras \n Empate"
    }
    if(computer == "tijeras" && human == "papel"){
        return "Tijeras gana a papel \n Has perdido"
    }    
    if(computer == "tijeras" && human == "piedra"){
        return " Piedra gana a tijera \n Has ganado"
    }
}   

function game(){
    let humano = prompt("Escriba una opcion para jugar", "Piedra, Papel o Tijeras").toLowerCase()
    let computer = String(getComputerChoice())
    let resultado = String(enfrentamiento(computer, humano))
    alert(resultado)
}

game()
