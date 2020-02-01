const ON = 2;
const OFF = 0;

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/interface-name-prefix": [OFF],
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React' }]
  },
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
