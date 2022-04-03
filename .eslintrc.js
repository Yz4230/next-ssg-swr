/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // `next` configures `plugin:react/recommended` and `plugin:react-hooks/recommended`
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "unused-imports",
    "prettier",
  ],
  rules: {
    // disable `@next/next/no-img-element` to use `<img>` elements
    "@next/next/no-img-element": "off",
    "react/self-closing-comp": "error",
    "react/prop-types": "off",
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "internal",
          "sibling",
          "index",
          "parent",
          "builtin",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        warnOnUnassignedImports: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
  ignorePatterns: ["node_modules", ".eslintrc.js"],
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
