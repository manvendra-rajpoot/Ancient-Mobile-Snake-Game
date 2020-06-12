/*Ancient Snake Game coded with JavaScriptin Canvas*/
var canvas;
var canvasContext;

var px = py = 10;
var gs = tc = 20;
var ax = ay = 15;
var xv = yv = 0;
var trail = [];
var tail = 5;

window.onload = function() {
    canvas = document.getElementById("snakeGame");
    canvasContext = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);
}

function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    //Ground
    canvasContext.fillStyle = '#407E04';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    //Snake
    canvasContext.fillStyle = '#000000';
    for (var i = 0; i < trail.length; i++) {
        canvasContext.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    //Insects
    canvasContext.fillStyle = '#E00E00';
    canvasContext.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}