var gameOver = false;
var currentPlayer = 'X';
var totalMoves = 0;
function placeMarker(spotId){
    if(!gameOver){
    var spot = document.getElementById(spotId);
    //if the spot is empty, change spot.innerHTML to mark the spot and increment counter
    // if (currentPlayerWon()){
        //updateGameStatus();
    //}
    // else{
        // totalMoves++;
        //switch the player
    //}
    //else, do nothing
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('box-1');
    var s2 = document.getElementById('box-2');
    var s3 = document.getElementById('box-3');
    var s4 = document.getElementById('box-4');
    var s5 = document.getElementById('box-5');
    var s6 = document.getElementById('box-6');
    var s7 = document.getElementById('box-7');
    var s8 = document.getElementById('box-8');
    var s9 = document.getElementById('box-9');

    if ((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) ||
    (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) ||
    (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML) ||
    (s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML) ||
    (s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML) ||
    (s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML) ||
    (s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML) ||
    (s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML)){
        gameOver = true;
    }
    else{
        gameOver = false;
    }
    //Check for a tie
    if (!gameOver){
        if (totalMoves == 9){
            gameOver = true;
        }
    }
    return gameOver;
}

function updateGameStatus(){
    var statusboard = document.getElementById('status');
    if (gameOver){
        //some message
    }
    //else{
        //if not a tie, prompt a user to make a move
        // else, display the message
    //}
}