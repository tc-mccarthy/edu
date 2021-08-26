# EDU Templates

Templates, cheatsheets and other assistance for devs in training

## Cheat sheets

- [css](cheatsheets/css.md)
- [html](cheatsheets/html.md)
- [git](cheatsheets/git.md)
- [shell](cheatsheets/shell.md)

## Templates

- Mobile-first templates \[[css](templates/css/mobile-first.css)]\[[html](templates/html/mobile-first.html)]
- [KnightLab TimelineJS Custom embed template](templates/timelineJS)
- Twitter bootstrap journo template \[[html](templates/html/bootstrap.html)]\[[jade](templates/jade/bootstrap.jade)]
- Scraper -- default NodeJS setup and file structure for a scraper \[[view](templates/scraper)]

## Scripts

In order to make your coding experience smoother, I have provided the following configurations scripts which will automate the install and setup of the various applications you'll be using in class (Git, homebrew, atom, sublime, etc) \[[readme](scripts/)]

### OSX Configuration one-liner

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/osx_setup)"`

### Windows Configuration one-liner

All commands, including the one-liner, should be run in the PowerShell. PowerShell ISE and Command prompt do not work properly with this script.

`iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/windows_setup.ps1'))`

## Tuts

Tutorials

- [Starting a simple HTTP Server using python](tuts/simplehttpserver.md)

## Configs

- Recommended configuration for script atom packages. \[[view](configs/atom.cson)]
