"use strict";

function level() {
    clearCanvas();
    drawLevel();
    header("Level");
    Leveltext();
    addLevelClickEventListener()
}

function drawLevel() {
    drawsq(200, 2500, 1500, 1500, 200, "#a0d8ef");
    drawsq(2200, 2500, 1500, 1500, 200, "#a8c97f");
    drawsq(4200, 2500, 1500, 1500, 200, "#EFA0A0");
}


function Leveltext() {
    let levels = ["Easy", "Normal", "Hard"];
    let levelx = [680, 2500, 4650]
    let nums = ["0~4", "5~9", "10~14"];
    let numx = [850, 2850, 4750]
    let arcx = [950, 2780, 4550]
    ctx.fillStyle = '#ffffff';

    for (let i = 0; i < 3; i++) {

        //文字のスタイル（大きさ、フォント）を指定
        ctx.font = '150px ZenMaruGothicRegular';
        //文字の色を指定
        ctx.fillText(nums[i], numx[i], 2700);

        //文字のスタイル（大きさ、フォント）を指定
        ctx.font = '300px ZenMaruGothicRegular';
        //文字の色を指定
        ctx.fillText(levels[i], levelx[i], 3100);

        for (let j = 0; j <= i; j++) {
            ctx.beginPath();
            ctx.arc(arcx[i] + (j * 400), 3500, 150, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
}

function addLevelClickEventListener() {
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


        const common = {
            y: 2500,  // y
            w: 1500, h: 1500   // サイズ
        };

        const x = {
            easy: 200, normal: 2200, 
            hard: 4200
        };

        const clickEasy =
            (x.easy <= canvasX && canvasX <= x.easy + common.w)  // 横方向の判定
            && (common.y <= canvasY && canvasY <= common.y + common.h)  // 縦方向の判定

        const clickNormal =
            (x.normal <= canvasX && canvasX <= x.normal + common.w)  // 横方向の判定
            && (common.y <= canvasY && canvasY <= common.y + common.h)  // 縦方向の判定
        
        const clickHard =
            (x.hard <= canvasX && canvasX <= x.hard + common.w)  // 横方向の判定
            && (common.y <= canvasY && canvasY <= common.y + common.h)  // 縦方向の判定
        if (clickEasy) { 
            // alert('click easy!'); 
            gamelevel = 1;
            cvs.removeEventListener('click', e);
            game();
        }else if(clickNormal) {
            // alert('click normal!'); 
            gamelevel = 2;
            cvs.removeEventListener('click', e);
            game();
        }else if(clickHard) {
            // alert('click hard!'); 
            gamelevel = 3;
            cvs.removeEventListener('click', e);
            game();

        }
    });
}




