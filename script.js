var card = document.getElementById('card');
var canvas = document.createElement('canvas');
var numDots = 9;
var dotRadius = 10;

var ctx;
var dotSpace;

canvas.id = 'dotc';
canvas.width = card.clientHeight + 100;
canvas.height = canvas.width;
canvas.style.zIndex = -5;
canvas.style.position = 'absolute';
canvas.style.left = '-100px';
canvas.style.top = '-50px';

card.prepend(canvas);

if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#666';
    dotSpace = canvas.width / numDots;

    for (var i=0; i < numDots; i++) {
        for (var j=0; j < numDots; j++) {
            ctx.beginPath();
            ctx.arc(dotSpace*(.5 + i), dotSpace*(.5 + j), dotRadius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
}
