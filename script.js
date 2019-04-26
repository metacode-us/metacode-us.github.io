var card = document.getElementById('card');
var canvas = document.createElement('canvas');
var numDots = 9;
var dotRadius = 3;
var dotGrowth = 3;

var start;
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

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (var i=0; i < numDots; i++) {
        for (var j=0; j < numDots; j++) {
            ctx.beginPath();
            ctx.arc(
                dotSpace*(.5 + i),
                dotSpace*(.5 + j),
                (dotRadius + Math.sin(i - progress/500))*dotGrowth,
                0,
                Math.PI * 2,
                true);
            ctx.fill();
        }
    }
    //console.log(dotRadius + Math.round(Math.sin(progress%4)*5));

    window.requestAnimationFrame(step);
}

if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#666';
    dotSpace = canvas.width / numDots;

    window.requestAnimationFrame(step);
}
