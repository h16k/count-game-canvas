'use strict';

function score(){
    clearCanvas();
    header("Score");
    drawBigButton(String(Math.floor(userScore/quizCount*100)) + " %");
    quizCount = 0;
    userScore = 0;
}