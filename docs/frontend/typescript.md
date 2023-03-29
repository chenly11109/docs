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
