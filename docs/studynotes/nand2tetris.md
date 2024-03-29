# Gate
1.Gate Table  
2.Nand and other gates  
3.from gate table to axiom chips  
4.HDL language / buses

# ALU
1.binary  
2.ALU : arithmetic logic unit  
3.binary addition - 
half adder: a, b, sum => carry
three adder:a, b, carry => sum, carry
16 adder : a[16] + b[16]  
4.negative numbers - 2`s complement
4.1 -x => 2^n - x = 1 + (2^n - 1) - x
2^n - 1 = 111...1

# Machine Languages
- assembly language / assmbler
- if/else/while (branching)
    - GOTO
    - branching symbol @step (step)
- variable
    - @variable

- iteration

- pointer
    - array in machine languages = base address + length
    - pointer : A = M : set the address register to the contents of some memory register

## input/output
- screen - 8K bits RAM memory, `SCREEN`
- keyboard - `KBD`
- compilation (compiler)

- instruction set
- assembly language

- variable/label
- loop, stop, end, positive/negative 


# sum up
- logic gates, ALU, RAM(time), low-level programming
- CPU, RAM
- fetch - execute cycle, data bus, instruction bus, CPU, computer design

- universal Turing machine

- input -> memory(data, program) <-> CPU(central processing unit)
 -> Output

- CPU = Registers + ALU(arithmetic logic unit)
- data, address, control
- registers: store intermediate results in the registers



## fetch - execute

- program memory (counter) -> address -> next instruction

## CPU
- execute the current instruction
- next instruction

-instruction memory / data memory
- inM: from Data Memory - value from the current selected register
- instruction - from the instruction memory - value from the current selected register
- reset
- addressM, outM, writeM ( right to write)
- pc - program counter output - emit the next instruction


## assembly language
- mnemonics 助记词
- translating symbolic programs into binary code
- implement in high-level language!

- use sysmbolic references to memory addresses - symbol table
- assembler, virtual machine, 
- machine-language - LOAD(operation code)R3(register)@7(address)

- `variables` - automatically assign to memory addresses
- `label` - mark locations in the program
- `label` is not counted as line numbers

- `variables` will be allocated to memory locations starting at address 1024

- instruction terminates the program’s execution by putting the computer in an infinite loop. eg: 06: goto 6;

- variable allocation assumption implies the largest program we can run is 1024 instructions
- when allocating memory space for variables, the translator must take into account both their data types and the word width of the target hardware
- assembly syntax




