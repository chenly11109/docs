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


## rotation3d
every rotation in three dimensions is defined by its axis(a vector along this axis is unchanged by the rotation) and its angle.

## gluLookAt
the view matrix rewrites all coordinates in eye space
gluLookAt: mat4 (eyex, eyey, eyez, centerx, centery, centerz, upx, upy, upz)
<img src = "./assets/gluLookAt.png"/>
- openGL camera is always at origin and facing to -z eye space
- in a global system, I need to have my camera looking at some scene, with a certain up axix(so that the position of the camera is defined)
- gluLookAt produce a matrix4 which will transform the camera from where it is to the origin in a global system.