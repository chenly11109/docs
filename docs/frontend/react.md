# React

## Immer
work with immutable state in a more convenient way
创造了更简洁的代码，不用deepCopy 深层次的代码。

 ```javascript
import produce from "immer";

const nextState = produce(baseState, draft=>{
  //make some changes to the draft
})//produces a State
 ```
apply all changes to a temporary draft, a proxy of the current State

```javascript
//combined with React:
const [state, setState] = useState();

...
setState(produce(draft=>{
  //make diret changes to the draft!
  const todo = draft.find(...);
  todo.done = !todo.done.

  draft.push(...);
}))

```


### Proxy
object enables you to create a proxy for another object - intercept  and redefine fundamental operations for that object  
Proxy:{target:original object to proxy,  
handler:which operations will be intercepted and how to redefine  
}



## useContext

```javascript
const MyContext = React.createContext("");

function FatherComponent({children}){
    const [user,setUser] = useState("LC");

    return (
        <MyContext.Provider value={user}>
            <ChildComponent />
        </MyContext.Provider>
        )
}

function ChildComponent(){
    const user = useContext(MyContext); // user would be LC
    ...
}


```

> accept a context object(not a Context.Provider or Context.Consumer)

> value is determined by the value prop of the nearest <MyContext.Provider>

> A component calling useContext will always re-render when the context value changes


## useMemo, useCallback

>optimize re-renders - pure functions  
1. Reducing the amount of work that needs to be done in a given render.  
2. Reducing the number of times that a component needs to re-render.  

### useMemo  

1.A chunk of work to be performed, wrapped up in a function   
2.A list of dependencies  

>two options  

Invoke the function again, to re-calculate the value,  

Re-use the data it already has, from the last time it did this work. -> preserve the same reference  

### useCallback  

same as useMemo, but for functions instead of arrays/objects  


## React lifecycle

### 1.mounting  
  1.1 constructor()  
  1.2 getDerivedStateFromProps()  
  1.3 render()  
  1.4 componentDidMount()  
### 2.updating  
  2.1 getDerivedStateFromProps()  
  2.2 shouldComponentUpdate()  -- default true  
  2.3 render()  
  2.4 getSnapshotBeforeUpdate()  -- access the previous state  
  2.5 componentDidUpdate()  
### 3.unmounting  
  3.1 componentWillUnmount()  

## performance
### profile - developer tools - check react documentations!

## useLayoutEffect

 1.DOM measurement and make DOM mutations or trigger a synchronous re-render by updating state 2.make sure the value is updated since it is synchronous

Fires synchronously after all DOM mutations - before the browser has a chance to paint
useEffect - componentDidMount,componentDidUpdate,componentWillUnmount
Runs after react renders your component and ensures that it will not block browser painting

## lazyLoad
- images & video
- lazy loading is a solution that lowers initial page payload and load time
- 浏览器解析到img标签的src有值，才会去发起请求，那么就可以让图片需要展示时，才对其src赋值真正的图片地址
```javascript
$img.src = $img.dataset.src//将真实链接放在dataset-src里，当img出现在view中时替换src发送请求
```
![lazyLoad](../assets/lazyLoad.png ':size=80%')

## useImperative
## cloneElement
