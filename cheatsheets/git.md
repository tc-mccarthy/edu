# Working with Git

Git is a modern version control system. It gives you the freedom to store progress on your projects in an environment remote to your computer and have it track revisions. This is basically the ultimate "undo" and collaboration tool. You can make horrible mistakes, destroy your laptop (don't do that), change computers and work with as many people on the same project as you want and Git will keep everything organized so that you can restore any point in your code's history.

Search as you may, you will not find a GUI that really helps you to interface with Git. It's best to work with it right in terminal. Below are the commands you will need to be able to leverage Git.

## Working locally

`git init` Instantiates a directory as a git repository (repo). Typically you can bypass this by creating the repo on GitHub first and then cloning it to your local.

`git clone` is a command that **copies** a repository from GitHub (or any remote) to your local machine. The language on this is very deliberate... a **copy/clone** of the remote repository is created on your local. Any and all work you do affects the **copy/clone** only and will not appear on GitHub until after you perform a `git push` which will synchronize your local repo with the remote one.

`git status` Shows you what files have been added, deleted and modified since your last commit. This is quickly going to be your best friend. This will give you an idea about how many things you've touched and what will be changed in the next commit. You should fire this before each commit to make sure nothing seems strange

`git add <filename>` This adds changes to the next commit. It especially needs to be fired when you've created directories/files or renamed directories/files. After firing `git status` you'll be able to easily see what needs to be added as it will be labeled _Untracked files_. If you have a lot of files and you know you want to add them all you can do `git add .` In terminal for many commands `.` is a wildcard that means _all files in this folder and all of its children_

`git rm <filename>` This removes files from your local machine **and** stages it to be removed from your repo.

`git commit` Takes all of your pending changes that have been staged for commit and applies them to your local repository. A commit is only applied on your computer. It does not show up on GitHub until you `push` it. `git commit` has one **required argument**, the message argument. The command I usually perform is `git commit -am "My log message here"`. This tells git you want to commit all files that have been modified and/or staged for commit (new files will still need a `git add`) and gives it a note to log with the commit. This note usually indicates what changes are in the commit.

## Publishing your changes to GitHub and getting updates from GitHub

Remember, the basic and most commonly-used commands only modify the repository that's on your computer. When you're ready to _publish your changes_ you need to `push` them to GitHub. In order to make sure your code always aligns with what's been published to GitHub, you should begin each of your coding sessions with a `git pull`.

`git push` Takes your local repo and synchronizes it with the repo on GitHub. This process alerts you to conflict from pushes from other collaborators so it's important to pay attention to the feedback in the terminal. This command requires that you pass to it **two parameters** the _name of your remote destination_ and the _branch your pushing to_. The default GitHub setup is to name the _remote_ **origin**. Unless you've specified otherwise, your branch is most likely **master**. If you [ran this script] before going through this tutorial, your terminal is using the zsh shell, which very clearly indicates which Git branch you're currently working on. If you're editing code in **Atom** it indicates for you what branch you're working on as well.

`git pull` Takes the repo as it appears on GitHub and synchronizes it with your local. Just like `git push` this command as the same **two required parameters**. `git pull <remote> <branch>`. That same rules apply here as in `git push`.

## I've made a horrible error!

This is exactly what Git is for. First, remember it's best practice to only commit code you know to be working and that you're happy with. It will make rolling back to the last good code super easy.

### Only one of my files has been horribly mangled

`git checkout` will help you out here. You can do `git checkout <relative/path/to/file>` to pull the version that's committed to your repo and start from there. If you're wish is to pull a version of the file from a different **branch** you can do that with `git checkout <branch> <relative/path/to/file>`.

### The whole repo is a mess

`git reset` is exactly like it sounds. I most frequently use `git reset --hard HEAD` which pulls the committed version of each file from the repository.

`git clean` removes any untracked files or directories from your local directory. You can do either or both using _arguments_ `git clean -d -f` will remove untracked directories _and_ files. This is what I use most frequently.

## Branching and collaboration

Branches allow you to group changes together that satisfy a particular task. For example, you have a working web page but you want to add advertising to it. You can create a new branch in your repo that has all of the existing work in it. You make your changes only on that branch, protecting your original working branch from mistakes. When you're done with the task, you can open a _pull request_ on GitHub that will merge the ad branch you created with your working branch (usually **master**). This also works well with collaboration -- if you assign tasks to different group members, each member should work in their own branch. By working on individual branches and opening pull requests for each of them, Git will protect your files from being destroyed by having multiple users make different changes to the same file.

`git checkout` just like this allows you to pull a specific file, you can also switch to a different branch, if it already exists. In order to _create a branch_ you would do `git checkout -b <branch_name>` which will create a new branch, with the name you assign it, using the existing branch and its contents as a base. `git checkout <branch_name>` will switch you to an existing branch.
