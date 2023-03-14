# Creating a project

In real world there are almost no projects that don't use Yarn or NPM package managers.
In this exercise you will have to create your own project that will be using a package from the NPM registry.

The goal is simple - create a new branch called `setup` and using `yarn` create a simple project.

# Prerequisites

You need to install this tool first:

```
yarn: https://yarnpkg.com/getting-started/install
```

`npm` is already installed with `Node.js`, which you should have installed by now.

# Initializing an empty project

To initialize an empty project simply use a command - `yarn init`. Answer all questions (you can simply press enter and it will fill in these things with suggested values) until it says it's done.

You'll notice that a `package.json` file got created in your root directory. This is a very important file that will contain all the data about packages, scripts, dependecies (relationships between packages) and other stuff that can be shared between team members.

The project now does not do anything, it has no packages and it cannot be started. Time to create an entrypoint file.

# Creating an entrypoint

Create a directory called `src` and in that directory create a file called `index.js`. This is a common practice and 
it should be followed. Add some code in that file, like 

```
console.log("Hello World");
```

Now go to `package.json` and add a definition of a starting script.

```
{
  name: "praktyki-2",
  ...
  "scripts": {
    "start": "node src/index.js"
  }
}
```

This will create a command that you can run inside the project. Remember to be in the same directory as the `package.json`, otherwise you won't be able to run these commands that you defined here.

Simply type `yarn start` to run the command. You should see the `Hello World` message in the console.

# Adding packages from the NPM registry

There are milions of packages created by other people that we can use in our projects - they save us great amount of time. We will install a package called `axios`, which is basically a much better `fetch` (we used that before).

To add a package go to the root directory and type in `yarn add axios`. `axios` is the package name, you can see how to install packages on [this](https://www.npmjs.com/) page. Simply search for `axios` and see how to install it.

Ignore `npm i axios` - we're using a different package manager that's called yarn - it's much faster. Package names are the same as in NPM though, the command is `yarn add` instead of `npm install` (or `npm i` for short).

After running the command you should see two things:
 - `node_modules` directory in your root folder
 - `"axios": "^1.3.4"` line in your `package.json`

 Now you can use the package and other people that will download your project can install these packages as well, so the project will run on their machines too.

 # Use the package

 You can import packages using `require` (more [here](https://stackoverflow.com/a/9901097/20539156)). This is a pretty outdated method and we will soon move to something called `import/export` and `modules` but it's good to know how it was done in the old days.

Use `const axios = require('axios')` to import variable called `axios` from a NPM package called `axios`. Variable name can be anything because this is a default export (we will learn about default vs non-default exports later).

`const myCustomVarName = require('axios')` will work as well, just the variable name will be different.

Learn about how to use `axios` [here](https://www.npmjs.com/package/axios) and fetch some data from this route using a GET method: `https://pokeapi.co/api/v2/pokemon`

```
const response = await axios.get(API_ROUTE);
```

# Import local files

Now it is time to create another file in the `src` directory called `fetch.js` (next to `index.js`).

Move your logic of fetching data there and using `module.exports` export the function that is fetching data from the API.

In your `index.js` file use `const fetchData = require('./fetch')` (note the relative import path that starts with `./`) and call that file. Again, `fetchData` is just a name that can be anything else (because it's a default export).

More on `module.exports` [here](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/).

# Add .gitignore

Sometimes we don't want to push everything to the repo - `node_modules` is one example of that. Everyone can install packages locally on their own machines (`yarn` will know what to install thanks to `package.json`).

Create a `.gitignore` file next to your `package.json` and add one line to that file
```
node_modules
```

This will tell git to ignore that directory completely and not commit/push it to the repo. You can ignore files, directories or patterns.

More on .gitignore [here](https://git-scm.com/docs/gitignore).

# Submit the exercise

Now you're ready to add everything using `git add .`, commit and push it to the repo on your branch.
Create a Pull Request and let me know, I'll review it.

Don't worry about the code that much, just make sure you use `axios` and you use two local files - `index.js` and `fetch.js`.

In the next part we will modify this repo to use something called `ES Modules`. It'll make importing and exporting packages easier.

If you're stuck there's a branch called `example-setup` - try to do as much as you can without checking out that branch but it can be a great help if you don't know what to do.

Don't forget about `.gitignore`!