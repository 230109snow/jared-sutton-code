# Workbook: Git 

## Conceptual Questions
These questions are here to help you engage with the material.

- What is VCS?

Visual Code Studio is an IDE

- What is git?

Git is a version management and project collaboration 

- When do we use git/Why is git important?

To keep track of changes to a sofware and allow nonlocal storage of code.

- How is git different from github?

Github is a cloud host of git repositories.

- What is repository?

A repository is a folder containing all the version history of some source code.

- How do we tell when a folder is git repository or not?

It contains a .git folder.

- What's the difference between remote and local repository?

A local repository is stored on one's local machine, whereas remote repos are stored in some cloud service.

- What is cloning?

Creates a local repo that is a copy of some specified remote repo.

- What is staging?

Staging is applying local file changes to a working set of changes that one intends to commit.

- What is committing?

Committing commits (applies) changes to the local repo (can check current commits via `git log`).

- What is pulling?

Takes commits ahead of current commit and syncs your local repo to it.

- What is pushing?

Syncs the remote repo to match (commited changes in) the local repo.

- Describe the basic git workflow
```
git pull
# make changes to files
git add new-file-or-dir
git commit
git push origin branch-name
```

## Git Exercise
1. Create a new empty repository in our github organization with the name first-last-code
2. Clone the repository to your local machine 
    - please remember where you're cloning this to in your local machine. You'll need to be able to find it in your file system
    -  It would be advisable to create a folder just for housing coding or training projects, if you haven't already
3. Create a new file called yourname.txt inside the repository and write a quick introduction about you
4. stage your new file
5. commit your staged changes
6. push the commit to your remote repository in github
    - You should be able to see the file you created on your github repository.