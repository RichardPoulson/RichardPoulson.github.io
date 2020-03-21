<h1 align="center">
  Richard Poulson: Professional Site and Blog (source code)
</h1>
<h4>
  Utilizes  <a href="https://www.gatsbyjs.org/" title="''Fast in every way that matters: Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps''">Gatsby</a>, a free and open source framework based on React.
</h4>

<hr>

## Project Directory:

    .
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock


1. **`/src`**: The source code for [my website and blog](https://www.richardpoulson.com).

1. **`.gitignore`**: ([documentation](https://git-scm.com/docs/gitignore "\"A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected; see the NOTES below for details.\"")) "Specifies intentionally untracked files to ignore."

1. **`.prettierignore`**: Files and directories that [Prettier should ignore](https://prettier.io/docs/en/ignore.html "\"Prettier offers an escape hatch to ignore a block of code or prevent entire files from being formatted.  To exclude files from formatting, add entries to a .prettierignore file in the project root or set the --ignore-path CLI option.  .prettierignore uses gitignore syntax.\"").

1. **`.prettierrc`**: The [Prettier](https://prettier.io/ "\"An opinionated code formatter\", \"Supports many languages\"") configuration file.

1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1. **`gatsby-config.js`**: main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1. **`LICENSE`**: ([documentation](https://choosealicense.com/licenses/)) This software project is licensed under the GNU Affero General Public License v3.0.  Gatsby is licensed under the MIT license.

1. **`package.json`**: ([documentation](https://docs.npmjs.com/files/package.json)) A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`yarn.lock`**: ([documentation](https://classic.yarnpkg.com/en/docs/yarn-lock/)) Automatically generated file, based on "package.json" file, can ignore in most cases.


<br>

## 📜 Package Scripts:

1. ```yarn start``` | ```gatsby develop```: Start the Gatsby development server ([http://localhost:8000/](http://localhost:8000/)).


1. ```yarn test``` | ```jest```: Run Unit testing with [Jest testing framework](https://jestjs.io/ "''Jest is a delightful JavaScript Testing Framework with a focus on simplicity.  It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!''").

1. ```yarn deploy```: Publish to [GitHub Pages](https://pages.github.com/ "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website. You can see examples of GitHub Pages sites in the GitHub Pages examples collection.") using package [gh-pages](https://github.com/tschaub/gh-pages "''Publish files to a gh-pages branch on GitHub (or any other branch anywhere else).''").  ```gatsby build --prefix-paths && gh-pages -d public -b master```

1. ```yarn format```: Run [Prettier](https://prettier.io/ "''An opinionated code formatter'', ''Supports many languages'', ''Integrates with most editors''") and rewrite "... all processed files in place. This is comparable to the eslint --fix workflow."

1. ```yarn serve``` | ```gatsby serve```: Serve the production build of your site for testing ([http://localhost:9000/](http://localhost:9000/)).

1. ```yarn clean``` | ```gatsby clean```: Wipe out the cache (.cache folder) and public directories.  This is useful as a last resort when your local project seems to have issues or content does not seem to be refreshing.

<br>

## 🔌 Gatsby Plugins:

- **`catch-links`**: ([source code](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links)) "... intercepts all local links that have not been created in React using gatsby-link, and replaces their behavior with that of the gatsby-link navigate."

- **`manifest`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/ "\"... provides configuration and icons to the phone.  This plugin provides several features beyond manifest configuration to make your life easier, they are: auto icon generation, favicon support, ...\"")) "...allows users to add your site to their home screen on most mobile browsers."

- **`react-helmet`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ "\"... component which lets you control your document head using their React component.  With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.\"")) "This reusable React component will manage all of your changes to the document head.  Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly."

- **`sharp`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/ "\"... a low-level helper plugin generally used by other Gatsby plugins. You generally shouldn’t be using this directly but might find it helpful if doing very custom image processing.\"")) "Exposes several image processing functions built on the Sharp image processing library."

<br>

## 📚 References:

1. [Gatsby CLI Commands](https://www.gatsbyjs.org/docs/gatsby-cli/) ([new](https://www.gatsbyjs.org/docs/gatsby-cli/#new "Create a Gatsby site: gatsby new [<site-name> [<starter-url>]]")|[develop](https://www.gatsbyjs.org/docs/gatsby-cli/#develop "Start the development server: gatsby develop [-H <host>] [-p <port>] [-o] [-S]")|[build](https://www.gatsbyjs.org/docs/gatsby-cli/#build "Compile your application and make it ready for deployment: gatsby build [--prefix-paths] [--no-uglify] [--profile] [--open-tracing-config-file] [--no-color]")|[serve](https://www.gatsbyjs.org/docs/gatsby-cli/#serve "Serve the production build of your site for testing: gatsby serve [-H <host>] [-p <port>] [-o]")|[info](https://www.gatsbyjs.org/docs/gatsby-cli/#info "At the root of a Gatsby site, get helpful environment information which will be required when reporting a bug: gatsby info [-C]"))

1. [CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS "\"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.\"")

1. [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#emoji-cheat-sheet "\"This cheat sheet is automatically generated from GitHub Emoji API and Unicode Full Emoji List.\"")

1. [Markdown Syntax | GitHub](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
