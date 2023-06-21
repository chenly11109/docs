## JDK, JRE, Java, javac, archiver
- Java Development Kit
- Java Runtime Environment

## first-class object
- entity within a programming language that can 
    - appear in an expression
    - be assigned to a variable
    - be used as an argument

- In Java, methods are not first class objects. The closest we get is Java Lambda Expressions.

## static / final
 - `static variable` shared by all instances
 - `static method` can not use instance variables
 - `static class` all members of the class is static

 - `final variable` could not change
 - `final method` could not overide
 - `final class` could not extend

## buffer
every trip to the disk is a big deal compared to manipulating data in memory

- chain a `BufferedWriter` onto a `FileWriter`


## channels vs socket
channels can support nonblocking I/O, reading and writing via ByteBuffers, and asynchronous I/O

## polymorphism
abstract class & method
```java
abstract class Animal{
    abstract void move(){
        ...
    }
}
class Sparrow extends Animal{...}
Animal sparrow1 = new Sparrow(...);

moveAnimals(sparrow1);

static void moveAnimals(Animal n){
    n.move();
}
```

## association
- dependency
    - a method depends another class
- composition
    - ownership, a class own another class
- aggregation
## JShell
Java REPL : read eval print loop

## interface
abstract method
```java
public interface Flyable{
    public void fly();
}
```

## stack & heap
stack - method with local variables
heap - place for object instances

## principals
- single response principals
- substitute principle
    - avoid degenerate method