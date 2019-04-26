var card = document.getElementById('card');

var canvas = document.createElement('canvas');
canvas.id = 'dotc';
canvas.width = card.clientHeight + 100;
canvas.height = canvas.width;
canvas.style.zIndex = -5;
canvas.style.position = 'absolute';
canvas.style.left = '-100px';
canvas.style.top = '-50px';
canvas.style.border = '10px solid blue';

card.prepend(canvas);
