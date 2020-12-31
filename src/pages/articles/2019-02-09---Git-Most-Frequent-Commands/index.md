---
title: Git - most frequent commands
date: "2019-02-09T17:08:21.457"
layout: post
draft: false
path: "/posts/2019-02-09---git-most-frequent-commands/"
category: "Version Control"
tags:
  - "Git"
  - "Tools"
  - "Source"
  - "Development"
  - "Data"

description: "A list of git commands is used on a day to day bases during development, some of them are more and others less frequent, but you will likely use them while working in any professional environment."
---

The following list of git commands is used on a day to day bases by any developer. Some of them are more and others less frequent, but you will likely use them while working in any professional environment.

- **`git init`** - it will initialize a new git environment. 

- **`git clone <repo>`** - it will recreate a project from the existing repository <url> regardless that being Github, Gitlab or BitBucket.

- **`git add .`** - will add all changes from `working directory` to the `staging area` preparing all changes for committing.

- **`git commit -m "Some description"`** - will move changes from the `staging area` to the local `repository`.

- **`git push`** - will push changes to remote `repository` but if two users are working on the same branch and repositories (local and remote) are out of the sync. First we need to do `git pull` check changes and then if all issues are resolved continue with `git push`.  

- **`git pull`** - retrieve recent changes from remote repository.

- **`git status`** - will show the status of the current local repository.


- `git remote add <remote> <repo_url>` - if repo already exist but you would like to connect it with the remote repository. During cloning this is done automatically.   
```bash 
$ git remote add origin https://github.com/user/repo.git
```

- **`git log --pretty=oneline`** - will give a list of all commits in one line

- `git log --pretty="%C(Yellow)%h  %C(reset)%ad (%C(Green)%cr%C(reset))%x09 %C(Cyan)%an: %C(reset)%s" -10 --graph` - pretty version of the previous one, best if you alias it.

- **`git blame <file>`** - will give info about all changes related to the specific file. 

- **`gitk`** - will give a visual representation of the repository 

- **`git checkout <branch or hash>`** - switch to the certain branch, or if you use hash you will go to a certain point in the history, if you use `git checkout HEAD` you will go back to the first point in history 

- **`git checkout -b "new-branch"`** - will create a branch and checks it out. It is frequently used to create a local branch from a remote branch made by Jira (Atlassian) in that way developer will maintain connection and status between a task s/he is working on and the code repository. 

- **`git checkout --track origin/<branch>`** - this is the command frequently used to create a newly-created remote branch. Additionally this command will set up-stream in the local `.git/config` file.

- **`git reset --soft HEAD^`** - reverse current commit to the staging area (point after `git add .`). 

- **`git branch`** - listing local branches

- **`git branch -r`** - listing remote branches 

- **`git branch -a`** - listing all branches 

- **`git branch -d <branch>`** - delete a local branch

- **``git push origin --delete <branch>``** - delete a remote branch

- **`git pull origin <branch>`** - to pull specific remote branch



