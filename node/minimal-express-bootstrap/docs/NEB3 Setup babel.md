# NEB3 Setup Babel

**Why babel?**
Allows use of recent JavaScript language features (ECMAScript) that are not included in the latest Node.js versions.

1. Install from the command line to the projects development dependencies:

		npm install @babel/cli @babel/core @babel/node @babel/preset-env --save-dev
	

**Where:**
	**babel/cli:**
    Used to compile files from the command line. In addition, various
    entry point scripts live in the top-level package at @babel/cli/bin.
    There is a shell-executable utility script, babel-external-helpers,
    js , and the main Babel cli script, babel.
	**babel/core:**
    A toolchain that is mainly used to convert ECMAScript 2015+ code
    into a backwards compatible version of JavaScript in current and
    older browsers or environments. ... Polyfill: supplies features that
    are missing in your target environment (through @babel/polyfill).
    Source code transformations (codemods) And more!
	**babel/node:**
    A CLI that works exactly the same as the Node.js CLI, with the added
    benefit of compiling code with Babel presets and plugins before
    running it.
	**babel/preset-env:**
    A smart preset that allows you to use the latest JavaScript without
    needing to micromanage which syntax transforms (and optionally,
    browser polyfills) are needed by your target environment(s).
    This both makes your life easier and JavaScript bundles smaller!

It takes a while but should complete to something like this:
![neb3.1](.\images\neb\neb3.1.JPG)
2. Update the npm start script in package.json, adding babel-node:
![neb3.2](.\images\neb\neb3.2.JPG)

**Where:**
	**--exec babel-node:**
	Is used to specify the binary to execute the file with, which in this case is babel-node (instead of the default node)
    Syntax: --exec app. It doesn't matter that it's at the end.

3. Test by typing
		

		npm start

	![neb3.3](.\images\neb\neb3.3.JPG)