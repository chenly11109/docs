# Typescript
Enum

interface Bear extends Animal{
}

Type Bear = Animal & {
}

Interface Window{
….A
}

Interface Window{
…B
} - interface can always reopen and add new properties into it.

Type annotation, type assertions

Postfix! => TypeScript a special syntax for removing null and undefined from a type without doing any explicit checking, type assertion! The value isn’t null or undefined
Enums
enum Direction{
Up = 1,
Down,Left, Right
}

Enums are real objects exist at runtime
* Reverse Mapping -> Enum[0] => will get the name in string

Ambient - contextual (ambient light)
Ambient Declarations is like an import keyword
Typeof
Declaration
In operator -> if a property exists on an object
