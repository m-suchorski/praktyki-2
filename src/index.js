/*
  This is a simple example of a project that's using NPM to import user-created packages.
  These packages are open source - you can read the code, help people solve problems, create PRs with new features and bugfixes in these repositories.

  Axios is just an example package that's useful when fetching data - it's much better than `fetch` we used before.

  This project is generated using Yarn. To install yarn go here: https://yarnpkg.com/getting-started/install

  For projects like that it is common to have a /src folder that serves as a root of the project. Inside that folder the entry point is the `index.js` file.
  That file can import other files and is basically the root of the app.

  In this example this file imports another local file and that local file imports a local NPM package.

  Inside the project you'll be able to:
    - install new packages - for example `yarn add axios` 
    - install packages installed by others - `yarn` (it reads installed packages from package.json and installs them locally so you can use them)
    - run scripts that are using locally installed packages - for example `yarn start`
    - and much more - like remove, update

  More on NPM packages: https://www.npmjs.com/

  Axios NPM page: https://www.npmjs.com/package/axios
  Axios GitHub: https://github.com/axios/axios

  Try running the project using `yarn start` instead of `node index.js`.
*/

// Old way of importing packages, we will learn a better way soon
// This package is imported from `node_modules/axios/index.js` but you only need to specify package name

const fetchSomeData = require('./fetch') // Note how local files are imported using relative path - starting from ./

fetchSomeData()
