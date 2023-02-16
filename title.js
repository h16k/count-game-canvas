"use strict";
document.fonts.ready.then(function () {
    // すべてのフォントが読み込まれた後にのみ実行する必要がある操作を
    // ここに記述します。
    title();
    header("Count Game");

});


function title() {
    clearCanvas();
    drawBigButton("Game Start");
    addTitleClickEventListener();
}

function addTitleClickEventListener() {
    const cvs = document.getElementById("myCanvas");
    cvs.addEventListener("click", titleClickEvent = e => {
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


        const title = {
            x: 1800, y: 2000,
            w: 2400, h: 800   // サイズ
        };

        const clickTitle =
            (title.x <= canvasX && canvasX <= title.x + title.w)  // 横方向の判定
            && (title.y <= canvasY && canvasY <= title.y + title.h)  // 縦方向の判定

        if (clickTitle) {
            cvs.removeEventListener('click', titleClickEvent);
            level();
        }
    });
}