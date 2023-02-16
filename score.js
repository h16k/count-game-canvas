'use strict';

function score(){
    clearCanvas();
    drawBigButton(String((userScore/quizCount)*100) + " %");
    header("Score");
    drawHomeButton()
    addHomeButtonClickEventListener() 
}

function drawHomeButton(){
    ctx.fillText("🏠", 2750,3600);
}

function addHomeButtonClickEventListener() {
    const cvs = document.getElementById("myCanvas");
    cvs.addEventListener("click", homeButtonClickEvent = e => {
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


        const homeButton = {
            x: 2750, y:3600,
            w: 100, h: 100   // サイズ
        };

        const clickhomeButton =
            (homeButton.x <= canvasX && canvasX <= homeButton.x + homeButton.w)  // 横方向の判定
            && (homeButton.y <= canvasY && canvasY <= homeButton.y + homeButton.h)  // 縦方向の判定

        if (clickhomeButton) {
            cvs.removeEventListener('click', homeButtonClickEvent);
            title();
            console.log('click home button');
        }
    });
}