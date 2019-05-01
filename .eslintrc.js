module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/vue"
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "vue"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "project": "./tsconfig.json",
    "extraFileExtensions": [".vue"]
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "tabWidth": 2,
        "printWidth": 100,
        "trailingComma": "none",
        "semi": false,
        "singleQuote": true
      }
    ]
  }
}