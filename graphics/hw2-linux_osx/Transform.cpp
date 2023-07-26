// Transform.cpp: implementation of the Transform class.

// Note: when you construct a matrix using mat4() or mat3(), it will be COLUMN-MAJOR
// Keep this in mind in readfile.cpp and display.cpp
// See FAQ for more details or if you're having problems.

#include "Transform.h"

// Helper rotation function.  Please implement this.  
mat3 Transform::rotate(const float degrees, const vec3& axis) 
{
  mat3 ret;

  mat3 I(1.0);

	float x = axis.x;
	float y = axis.y;
	float z = axis.z;

	mat3 matrix1 = I * cos(degrees); 		
	mat3 matrix2 = (1 - cos(degrees)) * mat3(x*x, x*y, x*z, x*y, y*y, y*z, x*z, y*z, z*z);	
	mat3 matrix3 = sin(degrees) * mat3(0.0,z,-1*y, -1*z,0.0,x, y,-1*x,0.0);
	
	ret = matrix1 + matrix2 + matrix3;
	
  // YOUR CODE FOR HW2 HERE
  // Please implement this.  Likely the same as in HW 1.  
  return ret;
}

void Transform::left(float degrees, vec3& eye, vec3& up) 
{
  // YOUR CODE FOR HW2 HERE
  // Likely the same as in HW 1.  

  mat3 ro = rotate(glm::radians(degrees), up); 
  eye = ro * eye;	
}

void Transform::up(float degrees, vec3& eye, vec3& up) 
{
  // YOUR CODE FOR HW2 HERE 
  // Likely the same as in HW 1.  

  float rdegrees = glm::radians(degrees);
	vec3 left = normalize(cross(eye, up));
	mat3 ro2 = rotate(rdegrees, left);

	eye = ro2 * eye;
	up = normalize(ro2 * up); 
}

// 相机如果挪到应当去的位置(eye), 看着物体(center),且不歪头（up - up和（eye-center)定义了镜头所在的平面）的位置所需要的矩阵变换
mat4 Transform::lookAt(const vec3 &eye, const vec3 &center, const vec3 &up) 
{
	vec3 a = centre - eye;
	vec3 b = normalize(up);

	vec3 w = normalize(a); // eye to center
	vec3 u = normalize(cross(w,b)); // left
	vec3 v = cross(u,w);// eye X left
	vec3 e = eye;

/**
镜头转一下
(u,v,w 在 x,y,z 方向上的投影
想象一下Ruvw x (x,y,z)
)
Ruvw = 
|u.x u.y u.z 0|
|v.x v.y v.z 0|
|w.x w.y w.z 0|
|0    0   0  1|

T = 
|1 0 0 -e.x|
|0 1 0 -e.y|
|0 0 1 -e.z|
|0 0 0    1|


镜头需要先移动再转
M = R X T
M = 
|  u.x   u.y   u.z  -eye.x * u.x - eye.y * u.y - eye.z * u.z |
|  v.x   v.y   v.z  -eye.x * v.x - eye.y * v.y - eye.z * v.z |
| -w.x  -w.y  -w.z   eye.x * w.x + eye.y * w.y + eye.z * w.z |
|   0     0     0         1      |
*/ 

	mat4 result = mat4(u.x,v.x,-1.0 * w.x,0.0,	\
			   u.y,v.y,-1.0 * w.y,0.0, \
			   u.z,v.z,-1.0 * w.z,0.0, \
	                   -1.0 * u.x*e.x - u.y*e.y - u.z*e.z, \
	                   -1.0 * v.x*e.x - v.y*e.y - v.z*e.z, \
	                   w.x*e.x + w.y*e.y + w.z*e.z, 1.0);
	// You will change this return call
	return result;
}

// 建立projection matrix
/** 
aspect = 2
means the viewer's angle of view is twice as wide in x as it is in y. 
If the viewport is twice as wide as it is tall, it displays the image without distortion.
*/

/**
d = zAxis distance
simplest form:(where near is 0 to far is infinity )
|1/aspect 0   0   0|
|0        1   0   0|
|0        0   1   0|  * d（homogorous)
|0        0 -1/d  0|
-1/d scale everything depending on the zAxis
->右下角进行z mapping
|A   B|     |z|
|-1  0|  X  |1| = [AZ + B] / -Z z:[-n, -f]-> [-1, 1]

-> A = (zFar+zNear)/(zNear-zFar) 
-> B = (2×zFar×zNear)/(zNear-zFar)


f = cotangent(fovy / 2)
M = 
|f/aspect   0           0                                         0    |
|0          f           0                                         0    |
|0          0   (zFar+zNear)/(zNear-zFar)   (2×zFar×zNear)/(zNear-zFar)|
|0          0           -1                                        0    |
*/
mat4 Transform::perspective(float fovy, float aspect, float zNear, float zFar)
{
  mat4 ret;

  // yScale = arctan(fovy/2)
  float yScale = 1.0F / tan(glm::radians(fovy) * 0.5);
	float xScale = yScale / aspect;
	float range = zNear - zFar;
	float a = ((zNear + zFar) / range);
	float b = (2 * zNear * zFar) / range;

	mat4 result = mat4(
		xScale, 0.0, 0.0, 0.0,
		0.0, yScale, 0.0, 0.0,
		0.0, 0.0, a, -1.0,
		0.0, 0.0, b, 0.0);
  return ret;
}

mat4 Transform::scale(const float &sx, const float &sy, const float &sz) 
{
  mat4 ret = mat4(sx,0.0,0.0,0.0,\
                  0.0,sy,0.0,0.0,\
                  0.0,0.0,sz,0.0,\
                  0.0,0.0,0.0,1.0);

  return ret;
}

mat4 Transform::translate(const float &tx, const float &ty, const float &tz) 
{
  mat4 ret;
  // YOUR CODE FOR HW2 HERE
  // Implement translation 


mat4 result = mat4(
		1.0, 0.0, 0.0, tx,
		0.0, 1.0, 0.0, ty,
		0.0, 0.0, 1.0, tz,
		0.0, 0.0, 0.0, 1.0
	);

	return result;

  return ret;
}

// To normalize the up direction and construct a coordinate frame.  
// As discussed in the lecture.  May be relevant to create a properly 
// orthogonal and normalized up. 
// This function is provided as a helper, in case you want to use it. 
// Using this function (in readfile.cpp or display.cpp) is optional.  

vec3 Transform::upvector(const vec3 &up, const vec3 & zvec) 
{
  vec3 x = glm::cross(up,zvec); 
  vec3 y = glm::cross(zvec,x); 
  vec3 ret = glm::normalize(y); 
  return ret; 
}


Transform::Transform()
{

}

// ~: decontructor, execute when an object of the class is destroyed
Transform::~Transform()
{

}
