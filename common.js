//canvas情報を取得
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//キャンバス自体のサイズを設定する
canvas.width = 6000;
canvas.height = 4800;

//実際に表示されるキャンバスのサイズを指定する
canvas.style.width = "800px";
canvas.style.height = "640px";


function clearCanvas() {
    ctx.clearRect(0, 0, 6000, 4800);

}

function header(text, line = true) {
    if(line){
        drawsq(1500, 500, 3000, 1000, 200, "#a0d8ef");
        drawsq(1550, 550, 2900, 900, 150, "#ffffff");
    }
    let fontSize = 400;
    ctx.clearRect(1600, 600, 2800, 800, 100);
    //文字のスタイル（大きさ、フォント）を指定
    ctx.font = fontSize + 'px ZenMaruGothicRegular';
    //文字の色を指定
    ctx.fillStyle = '#007bbb';
    let textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (canvas.width - textWidth) / 2, 1100);
}

function drawBigButton(text) {
    drawsq(1500, 500, 3000, 1000, 200, "#a0d8ef");
    drawsq(1550, 550, 2900, 900, 150, "#ffffff");

    drawsq(1800, 2000, 2400, 800, 200, "#a8c97f");

    ctx.font = '350px ZenMaruGothicRegular';
    //文字の色を指定
    ctx.fillStyle = '#ffffff';
    let textWidth = ctx.measureText(text).width;
    ctx.fillText("Game Start", (canvas.width - textWidth) / 2, 2500);
}

//１つの整数をランダムに作る
function randInt(max) {
    return Math.floor(Math.random() * max);
}

function drawsq(x, y, w, h, r, color) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x, y + r);  //←①
    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true);  //←②
    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, 1);  //←③
    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, 1);  //←④
    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, 1);  //←⑤
    ctx.closePath();  //←⑥
    ctx.stroke();  //←⑦
    ctx.fill();  //←⑧
}