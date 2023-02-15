//ボールの大きさを設定
let ballRadius = 150;
let rectSize = 1300;
let ballSpeed = 60;

let levelList = [1, 2, 3];
let levelText = ["easy", "normal", "hard"];

let midx = canvas.width / 2;
let midy = canvas.height / 2;
let margin = ballRadius * 2;

//開始時のボールの座標
let spawn = [[margin, midy], [midx, margin], [canvas.width - margin, midy], [midx, canvas.height - margin]];
let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let x, y;
let dx, dy;

let s_wait, e_wait;

let answer;
let count = 0;
let timer;
let gamelevel;
let score = 0;