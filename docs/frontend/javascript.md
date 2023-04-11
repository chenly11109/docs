# javascript

## apply, bind, call

apply(this, [arguments]); call the function

call(this, ...arguments); call the function

bind(this, ...arguments); return a new function and would not call the function

## arguments

The arguments object is a local variable available within all <mark>non-arrow functions</mark>.. You can refer to a function's arguments inside that function by using its arguments object.

```javascript
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```

## debounce & throttle

> 节流函数-throttle

<mark>一段时间内只能触发一次</mark>
eg: scroll

代码内部会有一个 timer, 每次执行的时候会比较现在的时间和上次执行的时间（timer)
如果 timer > wait 才执行函数

```javascript
function throttle(callBack, wait){
    let innerTime;

    return function(){
        const nowTime = Date.now();

        if(!innerTime){
            innerTime = nowTime;
            callBack.apply(this,arguments);
            return;
        }
        if(innerTime + wait > nowTime>)return;
        innerTime = nowTime;
        callBack.apply(this,arguments); //arguments 为系统reserved 参数
    }
}
```

> debounce - 防抖函数

<mark>减少函数触发频率</mark> eg:监听 onchange,避免多次触发,在相隔小于一段时间内或第一次触发一段时间内，不触发函数  
-setTimeout

```javascript
function debounce(callBack, wait) {
  let timer;

  return function () {
    //说明一段时间内触发了函数，这次还是要再等等
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callBack.apply(this, arguments);
    }, wait);
  };
}
```

> how to use them:

```javascript
    const myFunction = (event)=>{...};
    const myDebouncedFunction = debounce(muFunction, event);

//use muDebouncedFunction as myFunction
```

> react - debounce - useMemo(() => debounce(changeHandler, 300), [])

```javascript
  const debouncedChangeHandler = useMemo(
    debounce(changeHandler, 300)
  , [dep1, dep2, ..., depN]);
```

## comma operator(,)

```javascript
expr1, expr2, expr3; /* , … */
```

evaluates each of its operands (from left to right) and returns the value of the last operand.

This is commonly used to provide multiple parameters to a for loop.

## nullish operator ??
!!的一种补充，只是检查了NULL 和 undefined
```javascript
const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```
## new operator
create an instance of a pre-defined object types that has a <mark>constructor</mark> function

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

```

1.create a blank, plain JS object, - `newInstance`  

2.points `newInstance` [[Prototype]] to the constructor function`s prototype property.  

3.executes the constructor functions with the given arguments, binding `newInstance` as the `this` context  

//usually won`t do that!         

4.if the constructor function `returns` a non-primitive, the return value will become the result of the `new` expression, otherwise, the `newInstance` is returned as the result
## function overloading (函数重载)

\*\* javascript 同一作用域出现两个名字一样的函数，后面的会覆盖前面的，JS 没有真正意义的函数重载

## console.dir()

display object in a list of the properties

## style.width , HTMLElement.offsetWidth

difference :
1.style.width if not set by javascript, may be incorrect.
2.offsetWidth is get according to the box-sizing model.

## 瀑布流实现的方案

//Classes can only be instantiated with the `new` operator
https://juejin.cn/post/7014650146000470053

## console
- assert 断言，如果不符合，则...
```javascript
console.assert(a === 3, "a 不是 3")；
```


## tree shaking
the removal of dead code
 - webpack
 - relie on the static structure of ES2015 module syntax `import` and `export` - from `rollup`
 

 ## crypto (not recommended for front-end)
 - XOR crypto method
 - Web Crypto API?
 - https://www.crypto101.io/ ( Crypto 101 )


 ```javascript
 // Encrypt a password using XOR
async function encryptPassword(password, key) {
    let encryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encryptedPassword += String.fromCharCode(charCode);
    }
    return encryptedPassword;
  }
  
  // Decrypt a password using XOR
  function decryptPassword(encryptedPassword, key) {
    let decryptedPassword = '';
    for (let i = 0; i < encryptedPassword.length; i++) {
      const charCode = encryptedPassword.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      decryptedPassword += String.fromCharCode(charCode);
    }
    return decryptedPassword;
  }

console.log(encryptPassword("1234","2"));
 ```


 ## import
 - hundreds of thousands of JavaScript packages hosted on NPM, all available because of the CommonJS require function.
 - modularity is introduced to Node
 - `require` loading scripts synchronously - kills performance
 

 ## websocket

- new WebSocket(url);
- onOpen, onMessage, onError, onClose
- send, close

 ``` javascript
class MyWebSocketClient {


//single websocket instance  
  constructor(url) {
    this.socket = new WebSocket(url);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
  }


//shared websocket
  constructor() {
    this.socket = MyWebSocketClient.socket; // Use the singleton socket
    if (!this.socket) {
      this.socket = new WebSocket('ws://localhost:8080');
      MyWebSocketClient.socket = this.socket; // Set the singleton socket
    }
    // ......
  }

  onOpen() {
    console.log('WebSocket connection established.');
  }

  onMessage(event) {
    console.log(`Received message: ${event.data}`);
  }

  onError(error) {
    console.error(`WebSocket error: ${error}`);
  }

  onClose(event) {
    console.log(`WebSocket connection closed with code ${event.code}.`);
  }

  send(data) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.error('WebSocket is not open.');
    }
  }

  close() {
    this.socket.close();
  }
}

// Usage example:
const mySocket = new MyWebSocketClient('ws://localhost:8080');
mySocket.send('Hello, server!');
 ```