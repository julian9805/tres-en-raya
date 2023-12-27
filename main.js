let myBoard = document.querySelector("#board");


const ROWS = 3;
const COLUMN = 3;
let currentPlayer = 'x';
let textPlayer = document.querySelector('#playerMessage');

let btn$$ = document.querySelector("#click");
btn$$.addEventListener("click", function(){
    StarGame()
    rellenarTablero()
    winPlayer()
});

function StarGame(){
    myBoard.innerHTML = '';
  for (let i = 0; i < ROWS; i++) {
    let fila$$ = document.createElement("tr");
        for (let i = 0; i < COLUMN; i++) {
            let columna$$ = document.createElement("td");
            fila$$.appendChild(columna$$);
         }
         myBoard.appendChild(fila$$);
    }  

};

function rellenarTablero(){
    let celdas = document.querySelectorAll('td');
    celdas.forEach(function(celda){
        celda.addEventListener('click', function(){
            if (!celda.classList.contains('clicked')){
                celda.textContent = currentPlayer;
                celda.classList.add('clicked');
                if (currentPlayer == 'x'){
                    currentPlayer = 'O';
                    textPlayer.textContent = 'Jugador 2';
                } else {
                    currentPlayer = 'x';
                    textPlayer.textContent = 'Jugador 1';
                } 
                winPlayer();
            }
            
        })
    })
}

function winPlayer(){
    let celdas = document.querySelectorAll('td');
    let board = Array.from(celdas).map(celda => celda.textContent);
    let winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let condition of winConditions){
        if(board[condition[0]] !== '' && board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]]){
            alert(`El jugador ${board[condition[0]]} ha ganado.`);
            return;
        }
    }
    if(!board.includes('')){
        alert('Empate');
    }
}


