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

## Mac-specific configuration

Install XCode Command line tools and XCode when possible. Also implements an easier-on-the-eyes terminal theme for easy over-the-shoulder code review.

## Windows-specific configuration

The script reviews the PowerShell version. If you are not running at least version 3 it upgrades your PowerShell and .NET framework to add support for TLS1.2, which is the minimum supported TLS version. A system restart may be required due to this. The script may also prompt you that it needs to be restarted -- many of the above dependency changes update `$PATH` and, while it employs `refreshenv`, this doesn't always work. The script will check is Python is available toward the end of its run, and, if its not, it will prompt you to fire the script again, which will just pick up where it left off.

## Atom configuration

The following Atom packages are installed and auto-configured

1.  atom-beautify
2.  pigments
3.  less-than-slash
4.  seti-ui
5.  open-in-browsers
