# Configuration scripts

These scripts are designed to help students configure their computers with the software titles we'll be using in class. These scripts use package managers to install a multitude of free titles (homebrew on mac, chocolatey on windows).

## Software installed

1.  Atom - code editor of choice
2.  Sublime
3.  NodeJS
4.  Python3
5.  Ruby
6.  Firefox
7.  Google Chrome
8.  Slack
9.  Git
10. OpenSSH

## Mac-specific developer configuration - BASIC

Installs Git via XCode Command line tools, Atom, ZSH and other essentials for coding.

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/osx_setup)"`

## Mac-specific anaconda configuration - BASIC

Installs python3, anaconda, Git via XCode Command line tools and ZSH.

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/osx_setup)"`

## Windows-specific configuration - BASIC

This script always updates you to the latest version of PowerShell. It also verifies that your version of the .NET framework supports TLS1.2 and performs the necessary upgrades if it doesn't. A system restart may be required due to this.

All commands, including the one-liner, should be run in the PowerShell. PowerShell ISE and Command prompt do not work properly with this script.

`iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/windows_setup.ps1'))`

## Atom configuration

The following Atom packages are installed and auto-configured

1.  atom-beautify
2.  pigments
3.  less-than-slash
4.  seti-ui
5.  open-in-browsers
