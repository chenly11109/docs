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
- in a global system, I need to have my camera looking at some scene, with a certain up axis(so that the position of the camera is defined)
- gluLookAt produce a matrix4 which will transform everything to a camera basis-axis system.

## rotate3d
```
|  u.x  v.x  w.x  0  |
|  u.y  v.y  w.y  0  |
|  u.z  v.z  w.z  0  |
|   0    0    0   1  |
```
uvw is what defines the new position after rotation
u(x,y,z)
v(x,y,z)
w(w,y,z)

## openGL
openGL is a grphics `API`, not a platform of its own, it requires a language to operate in and the language of choice is C++

## phong shading vs. Gouraud shading
- Gouraud shading : interpolate normals at vertices
- phong shading : The surface normal is interpolated and normalized at each pixel
 - phong shading : using pixel / fragment shaders

## point light, linear light, direction light
1/(kc + kl*d + kp*d*d)
point light - 1/d*d
linear light - 1/d
directional light - 1

- `point lights` represent light sources in a scene and contribute to the overall illumination of objects through diffuse and ambient lighting
-  `Specular lighting`, taking into account the direction of the light source, the surface normal, and the viewer's direction. The specular highlight appears where the reflected light direction aligns with the viewer's direction, resulting in a bright spot.
## shading
- diffuse reflection, specular reflection 

## mapping
- dispacement mapping
- bump map
- normal map

## raterization - modelview, light, projection
## raytracing
- shadows - penumbra 月影
- reflections
- transparency
- interreflections
- complex illumination
- realistic materials

- basic ray casting vs. rasterization
- shadows and reflections
- ray-surface intersection
- optimizations

```javascript
Image Raytrace(Camera cam, Scene scene, int width, int height){
    Image image = new Image(width, height);
    for(int i =0; i<width; i++){
        Ray ray = RayThruPixel(cam, i, j);
        Intersection hit = Intersect(ray, scene);
        image[i][j]=FindColor(hit);
    }

    return image;
}

```

## glUniform

glUniform  - set the value of a uniform variable in a shader program

```c
void glUniform{Type}(int location, {Type} value);
```

```c
GLint location = glGetUniformLocation(shaderProgram, "myColor");
glUniform4f(location, 1.0f, 0.0f, 0.0f, 1.0f); // Set myColor to red (R=1, G=0, B=0, A=1)
```

## pointer
a pointer "points" to the location in memory where another variable is stored
```c++
object b = {props: value}
pointer* a = &b

b.props
a->props
```
## lighting
<img src = "./assets/lighting.png"/>
where I is the final intensity, A is the ambient term, E is the self-emission, and the diffuse D and specular S are summed over all lights  with intensity . N is the surface normal, L is the direction to the light, H is the half-angle, and S is the shininess.

 both diffuse and specular light come from the point light source

 ## directional light / point light
 directional light
 ```c
 vec4 directionalLight = vec4(directionX, directionY, directionZ, 0.0);
 ```
 point light
 ```c
 vec4 pointLight = vec4(positionX, positionY, positionZ, 1.0);
 ```

## ray-surface intersection
odd intersections is inside a polygon