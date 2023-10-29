# Typescript
## interface & type

``` typescript
interface Bear extends Animal{
}

type Bear = Animal & {
}

interface Window{
….A
}

interface Window{
… B
}
```
- interface can always reopen and add new properties into it.

## Type annotation, type assertions
- Postfix`!` :  a special syntax for removing null and undefined from a type without doing any explicit checking, type assertion! The value isn’t null or undefined
## Enums
``` typescript
enum Direction{
Up = 1,
Down,Left, Right
}
```
Enums are `real objects` exist at runtime
* Reverse Mapping -> Enum[0] => will get the name in string

- `Ambient` - contextual (ambient light)
Ambient Declarations is like an import keyword

- `In` operator -> if a property exists on an object


## class
TypeScript treats a class as both value and type. This implicit type declared by TypeScript describes the shape of the instance a class produces. Therefore when a class is used as a type, such as using let value :Class annotation, TypeScript checks if the value has all the public properties of the Class.

## type guard
### definition
narrow down the type of an object within a conditional, typescript do the judgement automatically 
```javascript
function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
}
```

### user defined type guards
- User Defined Type Guard functions 
- These are just functions that return `someArgumentName is SomeType`

```javascript
/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}
/**
 * Sample usage of the User Defined Type Guard
 */
function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}
```


## namespace

```typescript
namespace Utility {
    export function log(msg) {
        console.log(msg);
    }
    export function error(msg) {
        console.error(msg);
    }
}

// usage
Utility.log('Call me');
Utility.error('maybe!');

(function (Utility) {

// Add stuff to Utility

})(Utility || (Utility = {}));
```

## restart typescript server
ctrl + shift + p in vscode - restart typescript server