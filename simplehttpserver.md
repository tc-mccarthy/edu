# Setting up Python's SimpleHTTPServer

This tutorial helps you to set up a working directory for all of your sample code to live in. To access your pages you'll need to go ```http://localhost:8000/<your file name>```

_You should be careful to only user lowercase file names and use ```-``` or ```_``` instead of spaces between your words_


This process will place the working directory on your desktop, since it will be easy for you to find it there. The directory path will be ```/Users/<your user name>/Desktop/newsdayu```


1. Open terminal, which you can do easily by clicking on the spyglass in the top right-hand corner and typing in ```terminal```
2. Once terminal is open type ```mkdir -p ~/Desktop/newsdayu```. This will create the directory on your desktop and you should save all of work in there.
3. Type ```cd ~/Desktop/newsdayu```. This will move your terminal session into the folder you just created on your desktop
4. Type ```python -m SimpleHTTPServer```. This will start the python HTTP server.