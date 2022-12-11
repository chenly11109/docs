
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

>how to use them:  

```javascript
    const myFunction = (event)=>{...};
    const myDebouncedFunction = debounce(muFunction, event);

//use muDebouncedFunction as myFunction
```

>react - debounce - useMemo(() => debounce(changeHandler, 300), [])

```javascript
  const debouncedChangeHandler = useMemo(
    debounce(changeHandler, 300)
  , [dep1, dep2, ..., depN]);
```


## comma operator(,)
```javascript
expr1, expr2, expr3/* , … */
```
 evaluates each of its operands (from left to right) and returns the value of the last operand.   
 
This is commonly used to provide multiple parameters to a for loop.  




