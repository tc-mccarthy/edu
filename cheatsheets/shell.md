# Working with terminal

Being able to leverage terminal will make your development experience smoother and much faster. A lot of the modern web development technology uses to the command line (CLI = command line interface). This cheatsheet covers the basic Linux terminal operations that you'll need for any development project

## Files

`touch` creates a file if it doesn't exist, or updates it's modified timestamp if it does exist. A **file path** is required | `touch path/to/file`

`rm` removes individual files. A **file path** is required. | `rm path/to/file`

`cp` copies files. | `cp path/to/source path/to/destination`

`mv` moves/renames files. | `mv current/path/to/file new/path/to/file`

## Directories

A lot of directory operations are identical to file operations except they require the _recursive_ parameter.

`mkdir` short for make directory. Creates directories that don't already exist. Throws an error if relative path already exists. | `mkdir path/to/directory` | Arguments can be added to change it's default behavior. I use `mkdir -p path/to/directory` because it creates any part of the relative path that doesn't already exist and does not error out if the relative path already exists.

`rm` allows you to delete entire directories as well, if you provide the correct arguments. | `rm -Rf path/to/directory` has the `-R` argument which makes the rm operation run _recursively_, which is nerd-speak for having it start out at the top of the directory path and working it's way down through that path's descendants. `-f` is in there to force the operation, suppressing any warnings.

`cp` copies directories when _recursive_ parameter is passed. | `cp -R path/to/source path/to/destination`

`mv` renames/moves directories when _recursive_ parameter is passed | `mv -R current/path/to/directory new/path/to/directory`

`ls` lists the files/directories of the current directory. Also accepts a parameter for the directory you want to list. | `ls` or `ls path/to/directory` | I rarely type just `ls` -- I like to pass two parameters to it as they offer more insight and a cleaner presentation. `ls -la` lists the directory's contents vertically in my terminal and provides me with a list of permissions, owner, group and timestamp information, which can be helpful for debugging.

`pwd` outputs the absolute path to the current directory. This can be helpful with writing scripts.
