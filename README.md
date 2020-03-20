<h1 align="center">
  Richard Poulson: Professional Site and Blog (source code)
</h1>
<h4>
  Utilizes  <a href="https://www.gatsbyjs.org/" title="''Fast in every way that matters: Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps''">Gatsby</a>, a free and open source framework based on React.
</h4>

<hr>

## Project contents (top-level files/directories):

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


1.  **`/src`**: Directory containing the source code for the front-end of [my website and blog](https://www.richardpoulson.com).

1.  **`.gitignore`**: ([documentation](https://git-scm.com/docs/gitignore "\"A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected; see the NOTES below for details.\"")) "Specifies intentionally untracked files to ignore."

1.  **`.prettierignore`**: Files and directories that [Prettier should ignore](https://prettier.io/docs/en/ignore.html "\"Prettier offers an escape hatch to ignore a block of code or prevent entire files from being formatted.  To exclude files from formatting, add entries to a .prettierignore file in the project root or set the --ignore-path CLI option.  .prettierignore uses gitignore syntax.\"").

1.  **`.prettierrc`**: The [Prettier](https://prettier.io/ "\"An opinionated code formatter\", \"Supports many languages\"") configuration file.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: ([documentation](https://choosealicense.com/licenses/)) This software project is licensed under the GNU Affero General Public License v3.0.  Gatsby is licensed under the MIT license.

1. **`package.json`**: ([documentation](https://docs.npmjs.com/files/package.json)) A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`yarn.lock`**: ([documentation](https://classic.yarnpkg.com/en/docs/yarn-lock/)) Automatically generated file, based on "package.json" file, can ignore in most cases.

## 🔌 Gatsby Plugins:

1. **`catch-links`**: ([source code](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links)) "... intercepts all local links that have not been created in React using gatsby-link, and replaces their behavior with that of the gatsby-link navigate."

1. **`manifest`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/ "\"... provides configuration and icons to the phone.  This plugin provides several features beyond manifest configuration to make your life easier, they are: auto icon generation, favicon support, ...\"")) "...allows users to add your site to their home screen on most mobile browsers."

1. **`react-helmet`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ "\"... component which lets you control your document head using their React component.  With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.\"")) "Provides drop-in support for server rendering data added with React Helmet."

1. **`sharp`**: ([documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/ "\"... a low-level helper plugin generally used by other Gatsby plugins. You generally shouldn’t be using this directly but might find it helpful if doing very custom image processing.\"")) "Exposes several image processing functions built on the Sharp image processing library."

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)
