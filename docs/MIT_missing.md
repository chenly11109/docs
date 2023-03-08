# shell


## environment variables
- echo $PATH : search for the path and find if the promram exists for the program you want to run
- which echo : show the path where echo is
- absolute path / relative path

## commands
- `shell` : short for home
- `prompt`: where can type commands
- `echo` : program, prints out its arguments  
The shell parses the command by splitting it by whitespace, and then runs the program indicated by the first word, supplying each subsequent word as an argument that the program can access.
- `echo $PATH`
- `pwd` print working directory
- `cd` change directory
- `~` home directory
- `cd -` go back to the previous directory
- `.`current directory, `..`parent directory
- `ls`, 
- `drwxr` d:directory rw:read write x:execute(search)
- `mv`move `cp`pathß
- `rmdir` remove a directory
- `-v`,`--version`, flag
- `man` manual: man program, q to quit
- `>>` apend(not overwrite)
- `touch` create new file
- `chmod` change file modes or Access Control Lists
- `sudo` super do
- `curl` cURL is a computer software project providing a library and command-line tool for transferring data using various network protocols. The name stands for "Client for URL"

## connecting programs - piping
- input/output stream
eg: echo hello `>` hello.txt
- `|` pipe, use the last commands output as the next command input
- `>``<` output / input

## variable
- foo=bar
- "hello $foo" - hello bar : literal string / 'hello $foo' - hello $foo
- vim mcd.sh
- source mcd.sh
- '$_' last argument
- ls *.sh(extension)
- image.{png, jpg} = image.png img.jpg
- {a..j}
- diff <(ls foo) <(ls bar)
- `ripgrep` /`rg`s - recursively serach directories for a regex `grep` - search for lines that contain strings that match a pattern
- find . -name "*.tmp" -exec rm{} \;
- `history` - like the uparrow, show history of commands
- `convert` jpg to png etc.
- ctrl+R search in back history


 grep command searches for lines that contain strings that match a pattern

# vim
## model editor
- Normal: for moving around a file and making edits
- `i`<=>`<ESC>` Insert: for inserting text
- `R` Replace: for replacing text
-  Visual (`v` plain, `V` line, `ctrl+v / ^V` block): for <mark>selecting</mark> blocks of text
- `:` Command-line: for running a command

## customizing vim
- `~/.vimrc` plain-text configuration
- open files / open buffers

## window
- `sp` open a window view
- `tabnew` create a new window tab
- `:q` close the window
- `:qa` close all windows

## movements - 25`
- Basic movement: `hjkl` (left, down, up, right)
- Words: `w` (next word), `b` (beginning of word), `e` (end of word)
- Find: f{character}, t{character}, F{character}, T{character}
- `x` delete one word
- `r` replace a character
- `u` undo / `^r` redo
- `y` copy / `p` paste - yw = copy word, yy = copy line

## visual mode
- `v` enter visual mode
- `ci[` change inside []
- `.` repeat the last command

## ~/.vimrc
- settings
- `let` names="....." !space matters
- `put` =names





