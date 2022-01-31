## Set up powershell
if ($PSVersionTable.PSVersion.Major -le 2)
{
  ## install chocolatey
  Set-ExecutionPolicy Bypass -Scope Process -Force
  iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
  $reply = Read-Host -Prompt "This process will restart your computer. Is this ok? [y/n]"
  if ( $reply -match "[nN]" ) {
      Stop-Process -Id $PID
  }

  echo "Upgrading PowerShell to 3+ and installing dependencies"
  choco install -y dotnet4.7 powershell python3 googlechrome firefox sublimetext3 slack openssh nodejs ruby git curl atom
  choco upgrade -y dotnet4.7 powershell python3 googlechrome firefox sublimetext3 slack openssh nodejs ruby git curl atom
  shutdown -r -f -t 05 -c "Restarting... Run this script again after restart"
  Stop-Process -Id $PID
}

## install chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

echo "Setting execution policies"
## Manage ExecutionPolicy
set-executionpolicy remotesigned -s currentuser
set-executionpolicy remotesigned -s process
set-executionpolicy remotesigned -s localmachine

echo "Installing remaining dependencies"
## Install dependencies
choco install -y --ignore-checksums powershell python3 googlechrome firefox sublimetext3 slack openssh nodejs ruby git curl atom vscode
choco upgrade -y --ignore-checksums powershell python3 googlechrome firefox sublimetext3 slack openssh nodejs ruby git curl atom vscode

setx path "%PATH%;%LOCALAPPDATA%\Atom\bin"

## Check for python
$p = &{python -V} 2>&1

# check if an ErrorRecord was returned
$version = if($p -is [System.Management.Automation.ErrorRecord])
{
    echo "Python not available in this instance. Starting a new one... we'll complete install there"
    setx path "%path%;C:\Python37"

    # grab the version string from the error message
    Invoke-Item (start powershell $PSCommandPath)
    Stop-Process -Id $PID
}

## Upgrade pip
python -m pip install --upgrade pip
pip install --upgrade sqlparse virtualenv jupyter

## set up atom
apm install atom-beautify pigments less-than-slash seti-ui open-in-browsers

curl https://raw.githubusercontent.com/tc-mccarthy/edu/master/configs/atom.cson -OutFile ~/.atom/config.cson

clear
echo "Install complete."
