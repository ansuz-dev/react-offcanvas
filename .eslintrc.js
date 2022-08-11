const eslintConfig = require("@keeex/eslint-config");

module.exports = eslintConfig(
  {
    base: true,
    promise: true,
    jsx: true,
    reacthooks: true,
  },
  {
    env: {
      es6: true,
      node: true,
      browser: true,
    },
    overrides: [

      {
        files: ["*.js", "*.js"],
        rules: {
          "react/display-name": "off",
          "no-magic-numbers": "off",
        },
      },
    ],
  },
);
