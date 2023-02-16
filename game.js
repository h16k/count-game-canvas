"use strict";

function game(){
    clearCanvas();
    init();
    drawBox(canvas.width / 2 - rectSize / 2, canvas.height / 2 - rectSize / 2);
    startGame();
}


function init() {
    let ind = randInt(spawn.length);
    [x, y] = spawn[ind];
    dx = ballSpeed * direction[ind][0];
    dy = ballSpeed * direction[ind][1];
    s_wait = 15;
    e_wait = 25;
    ballCount++;
}


function startGame() {
    let int=randInt(gamelevel * 5);
    answer = int? int: 1;
    drawBallTimer = setInterval(draw, 30);
}


function drawBall() {
    //描画開始
    ctx.beginPath();
    //x,y座標、ballRadus、開始角度と終了角度、そして描く方向（ここでは省略されている。デフォルトはfalse=時計回り）
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    //色の指定
    ctx.fillStyle = "#0095d9";
    //塗りつぶす（stroke()を使うと縁だけ描ける）
    ctx.fill();
    ctx.closePath();
}

function drawBox(x,y) {
    //描画開始
    drawsq(x, y, rectSize, rectSize, 200, "#a0d8ef");
}

function waitToStart() {
    if (s_wait == 0) {
        x += dx;
        y += dy;
    } else {
        s_wait--;
    }
}

function ballIsInTheBox(){
    return (canvas.width / 2 - rectSize / 2 < x - ballRadius*2)
    && (x + ballRadius*2 < (canvas.width / 2) + rectSize / 2) 
    && (canvas.height / 2 - rectSize / 2 < y - ballRadius*2) 
    && (y + ballRadius*2 < (canvas.height / 2) + rectSize / 2);
}

function draw() {
    //4つの座標で囲われた範囲内の内容がすべて消去される
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBox(canvas.width / 2 - rectSize / 2, canvas.height / 2 - rectSize / 2);

    waitToStart();

    if (ballIsInTheBox()) {
        if (e_wait--) {
            x -= dx;
            y -= dy;
        } else if (ballCount < answer) {
            init();
        } else {
            clearInterval(drawBallTimer);
            ballCount = 0;
            quiz();
        }
    }
}