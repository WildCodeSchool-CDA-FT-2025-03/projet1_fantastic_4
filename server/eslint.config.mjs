import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2, { ignoredNodes: ["PropertyDefinition"] }],
      quotes: ["error", "double"],
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-console": ["error"],
      "@typescript-eslint/naming-convention": ["error"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
