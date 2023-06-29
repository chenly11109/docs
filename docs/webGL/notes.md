## canvas
- how to draw things on the web?
    -  Canvas, SVG, CSS, DOM animation

- bezierCurveTo();


https://joshondesign.com/p/books/canvasdeepdive/chapter01.html#images

## state saving
The state includes the current `transform`, the fill and stroke colors, the current font, and a few other variables. 

## animation
- requestAnimationFrame - better setInterval
- Your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. requestAnimationFrame() is 1 shot.
```javascript
function loop(){
    window.requestAnimationFrame(loop);
    ...
}
window.requestAnimationFrame(loop);

```

## sprite
- sprite is a small image that is cut out of a larger image called a sprite sheet or master image.
