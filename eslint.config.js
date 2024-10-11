import globals from "globals";
import js from "@eslint/js";


export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node, ...globals.jest},
      ecmaVersion: "latest",
    },
    rules: {
      semi: "error"
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage'
    ]
  }
];