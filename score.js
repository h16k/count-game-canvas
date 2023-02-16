'use strict';

function score(){
    clearCanvas();
    drawBigButton(String((userScore/quizCount)*100) + " %");
    header("Score");

}