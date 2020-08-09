
//Funcion de eleccion del jugador
function playerSelection(){
    var eleccion = prompt('Ingrese su eleccion: 1 = piedra, 2 = papel, 3 = tijera');
    var cadena;
    if(eleccion > 3 || eleccion < 1){
        alert('Opcion no valida');
    }else if(eleccion == 1){
        cadena = 'piedra';
        //console.log(cadena);
        return cadena;
    }else if(eleccion == 2){
        cadena = 'papel';
        //console.log(cadena);
        return cadena;
    }else if(eleccion == 3){
        cadena = 'tijera';
       // console.log(cadena);
        return cadena;
    }
}



//Funcion de la eleccion de la computadora
function computerSelection(){
    var election = (Math.random().toPrecision(1)) * 10;
    var newElection = Math.round(election);
    var cadena;
    //console.log(newElection);


    if(newElection <= 3){
        cadena = 'piedra';
        //console.log(cadena);
        return cadena;
    }else if(newElection > 3 && newElection <= 6){
        cadena = 'papel';
        //console.log(cadena);
        return cadena;
    }else if(newElection > 6 && newElection <= 10){
        cadena = 'tijera';
        //console.log(cadena);
        return cadena;
    }

}




function oneround(player, computer){

    var jugador = player;
    var computadora = computer; 

    var h2p = document.getElementById('j');
    var h2c = document.getElementById('c');
    var result = document.getElementById('resultado');

    


    //console.log('Jugador: ' + jugador);
    //console.log('Computadora: ' + computadora);



    h2p.textContent = 'Jugador: ' + jugador;
    h2c.textContent = 'Computadora: ' + computadora;

    
    if(jugador === computadora){
        result.textContent = 'Es un empate';
    }else if(jugador == 'piedra' && computadora == 'tijera' || jugador == 'papel' && computadora == 'piedra' || jugador == 'tijera' && computadora == 'papel'){
        result.textContent = 'Has ganado';
    }else{
        result.textContent = 'Ha ganado la computadora';
    }
    
}


