'use strict';

function quiz() {
    clearCanvas();
    header("How many balls are in the box?", false);
    quizButton();
    displayUserAns()
    addQuizClickEventListener()

}


function quizButton() {
    for (let i = 0; i < 10; i++) {
        let buttonx = buttonBaseX + ((i % 5) * 1000);
        let buttony = buttonBaseY + (Math.floor(i / 5) * 1000);
        drawButton(buttonx, buttony, buttonRadius, i);
        buttonxs.push(buttonx);
        buttonys.push(buttony);
    }
}

function drawButton(x, y, buttonSize, text) {
    //描画開始
    ctx.beginPath();
    //x,y座標、buttonRadius、開始角度と終了角度、そして描く方向（ここでは省略されている。デフォルトはfalse=時計回り）
    ctx.arc(x, y, buttonSize, 0, Math.PI * 2);
    //色の指定
    ctx.fillStyle = "#007bbb";
    //塗りつぶす（stroke()を使うと縁だけ描ける）
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#ffffff";
    //文字のスタイル（大きさ、フォント）を指定
    ctx.font = buttonSize + 'px ZenMaruGothicRegular';
    ctx.fillText(text, x - 100, y + 125);
}

function addQuizClickEventListener() {
    const cvs = document.getElementById("myCanvas");
    cvs.addEventListener("click", quizClickEvent = e => {
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

        for (let i = 0; i < 10; i++) {
            if (Math.pow(buttonxs[i] - canvasX, 2) + Math.pow(buttonys[i] - canvasY, 2) <= Math.pow(buttonRadius, 2)) {
                if (userAns.length <= 10) {
                    userAns += String(i);
                }
                console.log(userAns.length);
                displayUserAns()
            }
        }

        const deleteButton = {
            x: 2800, y: 1500, w: 500, h: 500
        }

        const answerButton = {
            x: 4000, y: 1500, w: 1000, h: 500
        }

        const clickDelete =
            (deleteButton.x <= canvasX && canvasX <= deleteButton.x + deleteButton.w)  // 横方向の判定
            && (deleteButton.y <= canvasY && canvasY <= deleteButton.y + deleteButton.h)  // 縦方向の判定

        const clickAns =
            (answerButton.x <= canvasX && canvasX <= answerButton.x + answerButton.w)  // 横方向の判定
            && (answerButton.y <= canvasY && canvasY <= answerButton.y + answerButton.h)  // 縦方向の判定

        if (clickDelete) {
            userAns = "";
            displayUserAns();
        } else if (clickAns) {
            cvs.removeEventListener('click', quizClickEvent);
            if (userAns == answer) {
                quizResult(true);
            } else {
                quizResult(false);
            }
            userAns = "";
        }
    });
}

function displayUserAns() {
    drawsq(900, 1500, 2000, 500, 150, "#a0d8ef");
    drawsq(3000, 1500, 500, 500, 150, "#EFA0A0");
    drawsq(3800, 1500, 1000, 500, 150, "#007bbb");

    ctx.fillStyle = "#ffffff";
    //文字のスタイル（大きさ、フォント）を指定
    ctx.font = '280px ZenMaruGothicRegular';
    ctx.fillText(userAns, 1000, 1850);
    ctx.fillText("del", 3050, 1850);
    ctx.fillText("Answer", 3850, 1850);
}

function quizResult(userIsCorrect){
    clearCanvas();
    if(userIsCorrect){
        header("Correct!");
    }else{
        header("Incorrect!");
    }

    drawBigButton("▶");
    if(++quizCount < 2){
        addBigButtonClickEventListener(game);
    }else{
        addBigButtonClickEventListener(score);
    }
}
