# Generating SSH keys for your GitHub account on OSX

GitHub recently introduced personal access tokens, replacing their basic (username and password) authentication option in the command line. These steps will allow you to easily set up an SSH key pair so that you can readily access your repos without having to worry about constantly logging in.

_Note: A video tutorial is available at https://youtu.be/NyYhh9AUE28_

1. Copy and paste the following one-liner into your terminal

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/edu/master/scripts/github-keygen)"
```

2. When the script completes it will output the the public half of the key path. Copy the string and go to https://github.com/settings/ssh/new. Paste the string into the "Key" field. The title should be something indicating the computer on which the key was generated. (Personal Laptop 2022). Hit `add SSH key`

3. Going forward, you should clone your repos using the `SSH` method (not the `HTTPS` method). This cloning method will use your SSH keys to set up a local copy of the repo and any git operations you perform on your computer within that repo going forward will also use your keys.
