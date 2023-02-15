'use strict';

function quiz(){
    clearCanvas();
    console.log("a");
}

function quizText() {
    let text = "How many balls are in the box?";
    let fontSize = 360;

    //文字のスタイル（大きさ、フォント）を指定
    // ctx.font = 'bold ' + fontSize + 'px serif';
	ctx.font = fontSize +'px ZenMaruGothicRegular';

    //文字の色を指定
    ctx.fillStyle = '#000000';
    let textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height - fontSize);

}