### AirBnB's ESlint!
- Follow these steps to get eslint working in your project!

---

### npm
- In your project's repository, enter the command `npm init`
  - this tells your computer this directory will include some packages managed by NPM (node package manager)
- this will ask you several questions about name, version, etc.  Do your best to answer the questions asked.  Note you can modify these answers later
- After this is completed, you'll have a `package.json` file... with all your answers

---

### eslint
- In your project's repository, run the command `npm install -g eslint`
  - this command (because of the `-g`) means you want the eslint package installed globally... i.e. everywhere... on your machine

---

### AirBnb ESLint
- In your project's repository, run the command `eslint --init` and choose the answers (in bold) to the following questions:
  - How would you like to configure ESLint? **Use a popular style guide**
  - Which style guide do you want to follow? **Airbnb**
  - What format do you want your config file to be in? **Javascript**
- This will install a bunch of node packages
- Fun:  Take a look at your `package.json` now! A bunch of new stuff is added here!
- Neat: It creates an `.eslintrc.js` file that breaks down what rules your linter is following.
- Cool:  It creates a directory called `node_modules`.  This is where ALL those packages were installed... You NEVER need to edit anything in this directory... EVER.

---

### .gitignore
- Create a file called `.gitignore`
  - this file will list the files and directories git should ignore
- The text of the file should be as follows:

```
.gitignore
.DS_Store
node_modules
```

---

### Give it a try in your Terminal!
- Now you can create `.js` files.. and have eslint help!
- To check a file... run `eslint fileName.js` in your terminal
  - Alternatively... you can install a linter display into your text editor
    - Below you'll find how to get that set up in the Atom editor(use Google to set up in Sublime)
    - If you still don't have it installed, find time/way to do so!!!!

---

### Give it a try in your Text Editor!
Once you install these packages below... you should be good to go!

### Sublime
Please follow the <a href="https://github.com/roadhump/SublimeLinter-eslint">Sublime Linter</a> instructions to get that package installed.

### Atom
- `Atom -> preferences -> packages`
- Search for and install `linter`
- Search for and install `linter-eslint`

---
