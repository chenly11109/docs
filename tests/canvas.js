"use strict"; 

var canvas = document.getElementById('canvas'); 
var c = canvas.getContext('2d'); 
const img = document.getElementById('img');
var tick = 0;

function drawIt() { 
    const frame = Math.floor(tick/60) % 10; 
    const x = frame * 12;
    c.drawImage(img, x,0,12,12,0,0,12,12);
    window.requestAnimationFrame(drawIt); 
    tick++;
} 
window.requestAnimationFrame(drawIt); 