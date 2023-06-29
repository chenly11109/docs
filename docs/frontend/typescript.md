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
narrow down the type of an object within a conditional block
- javascript object doest not have typeof or instance of
- user defined type guards
- someArgumentName is SomeType