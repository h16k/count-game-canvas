/*color: 
ball:#0095d9
box:#a0d8ef


*/

//ボールの大きさを設定
let ballRadius = 150;
let rectSize = 1300;
let ballSpeed = 60;

let midx = canvas.width / 2;
let midy = canvas.height / 2;
let margin = ballRadius * 2;

//開始時のボールの座標
let spawn = [[margin, midy], [midx, margin], [canvas.width - margin, midy], [midx, canvas.height - margin]];
let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let x, y, dx, dy;

let s_wait, e_wait;

let gamelevel;
let answer;
let ballCount = 0;
let quizCount = 0;
let CorrectCount = 0;
let drawBallTimer;



let titleClickEvent,levelClickEvent,quizClickEvent;

//quiz.js
let userAns="";
let buttonRadius = 350;
let buttonBaseX = 850;
let buttonBaseY = 2700;
let buttonxs = [];
let buttonys = [];