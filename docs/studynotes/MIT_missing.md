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
- `grep` command searches for lines that contain strings that match a pattern
- `ripgrep` /`rg`s - recursively serach directories for a regex
- find . -name "*.tmp" -exec rm{} \;
- `history` - like the uparrow, show history of commands
- `convert` jpg to png etc.
- ctrl+R search in back history


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

## movements
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

## ~/.vim  rc
- settings
- `let` names="....." !space matters
- `put` =names

# Data Wrangling
## regular expression
- `regex101` debugging
- . means “any single character” except newline
- * zero or more of the preceding match
- + one or more of the preceding match
- [abc] any one character of a, b, and c
- (RX1|RX2) either something that matches RX1 or RX2
- ^ the start of the line
- $ the end of the line

- | `sort` 
- | `uniq`
- `sed` edit on the text, `awk` edit based on columns


# command-line
- no space around `=` for shell command
- `UNIX` communication mechanism
- `Ctrl-C` - prompts the shell to deliver a `SIGNT` signal to the process
- `SIGNT` / `SIGQUIT`
- `^Z` - STGTSTP/SIGSTOP, pause a process
- `tmux` terminal multiplexer, popular
- `alias` alias_name='...' 
- `oh-my-zsh` zsh frame

- `glob` glob patterns specify sets of filenames with `wildcard`(*, ?) characters eg:*.txt - globbing, globe etc.

## dotfiles
- ./...
- ignored by `ls`


# VCSs version control systems
- `de facto` in fact, or in effect, whether by right or not
- `ad-hoc` when necessary or needed

## data model
- features: maintaining history, supporting branches, enabling collaboration
- `repositories` : the data `objects` + `references`


## history
- a file is called a `blob`
- `tree` - directory
- `snapshots` - commits
- `DAG` - directed actclic graph of `snapshots` - history
-  
``` typescript
 type commit = struct {
    parents: array<commit>
    author: string
    message: string
    snapshot: tree
}
```
##  objects and content-addressing
- type `object` = blob | tree | commit
- content - addressed (SHA-1 hash)  
 When object reference other objects, they don’t actually contain them in their on-disk representation, but have a reference to them by their hash.

- `references` human-readable names for SHA-1 hashes
- eg:`master` reference points to the latest commit in the main branch of development
- use `reference` refer to a particular snapshot in the history
- `HEAD` where we currently are - what it is relative to  - `parents` field of the commi

## staging area
`orthogonal`正交  

### cheat-sheet
- git checkout -b <name/> = git checkout + git branch
- git rebase vs git merge
history rewriting
rebasing is changing the base of your branch from one commit to another making it appear as if you'd created your branch from a different commit.
- git rebase <base>
This automatically rebases the current branch onto ＜ base ＞, which can be any kind of commit reference (for example an ID, a branch name, a tag, or a relative reference to HEAD).git 
- git commit -a -m "....."

# debugging
- premature optimizaiton is the root of all evil
- profilers and monitoring tools

## profiling
- real / user / sys time
- CPU profilers
### tracing
- keep a record of every function call

### sampling profilers
- probe the program periodically and record the program`s stack

### memory profiler
- check memory leak

## flame graph
<img src="../assets/cpu-bash-flamegraph.svg">


