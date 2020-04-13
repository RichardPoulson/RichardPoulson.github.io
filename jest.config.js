/**
 * "An array of regexp pattern strings that are matched against all source file paths before transformation. If the test path matches any of the patterns, it will not be transformed."
 * @see {@link https://jestjs.io/docs/en/configuration.html#transformignorepatterns-arraystring}
 */
const ignores = [
  '/node_modules/',
  '/__mocks__/',
  `\\.cache`,
  `<rootDir>/public`
]

/**
 * @see {@link https://jestjs.io/docs/en/configuration.html#options}
 */
module.exports = {
   // Transform JSX, TSX, JS, and TS files using Babel presets for Gatsby and TypeScript
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  /**
   * Map styling files to identity-obj-proxy module
   * Map images and audio to a mock file
   */
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [...ignores],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: { // "A set of global variables that need to be available in all test environments."
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}