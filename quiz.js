'use strict';

function quiz(){
    clearCanvas();
    header("How many balls are in the box?", false);
    quizButton();
    // addQuizClickEventListener();
}

function quizButton() {
    for(let i = 0; i < 10; i++) {
        drawButton(850 + ((i%5)*1000), 2400 + (Math.floor(i/5)*1000), buttonSize,String(i));
    }    
}

function drawButton(x,y,buttonSize,text) {
    //描画開始
    ctx.beginPath();
    //x,y座標、buttonRadius、開始角度と終了角度、そして描く方向（ここでは省略されている。デフォルトはfalse=時計回り）
    ctx.arc(x, y, buttonSize, 0, Math.PI * 2);
    //色の指定
    ctx.fillStyle = "#a0d8ef";
    //塗りつぶす（stroke()を使うと縁だけ描ける）
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#ffffff";
    //文字のスタイル（大きさ、フォント）を指定
    ctx.font = buttonSize + 'px ZenMaruGothicRegular';
    ctx.fillText(text, x-100, y+125);
}

function addQuizClickEventListener() {
    const cvs = document.getElementById("myCanvas");
    cvs.addEventListener("click", e => {
        const rect = e.target.getBoundingClientRect();

        // ブラウザ上での座標を求める
        const viewX = e.clientX - rect.left,
            viewY = e.clientY - rect.top;

        // 表示サイズとキャンバスの実サイズの比率を求める
        const scaleWidth = cvs.clientWidth / cvs.width,
            scaleHeight = cvs.clientHeight / cvs.height;

        // ブラウザ上でのクリック座標をキャンバス上に変換
        const canvasX = Math.floor(viewX / scaleWidth),
            canvasY = Math.floor(viewY / scaleHeight);

        if(2500 - buttonSize/2 <= canvasX && canvasX <= 2500 + buttonSize/2){
            console.log("aaaa");
        }

    });
}




