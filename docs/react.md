# React

## Immer

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
