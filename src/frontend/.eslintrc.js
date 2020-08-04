module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {},
  extends: [
    "@nuxtjs",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "nuxt/no-cjs-in-config": "off",
    "no-unused-vars": "off",
    "camelcase": "off",
    "indent": "off",
    "no-array-constructor": "off",
    "no-use-before-define": "off",
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
    "no-useless-constructor": "off",
    "no-unused-expressions": "off",
    "no-irregular-whitespace": [
      "error",
      {
        "skipRegExps": true
      }
    ],
    "semi": [2, "never"],
    "no-console": "error",

    "vue/no-unused-vars": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/require-component-is": "off",
    "vue/html-self-closing": ["error",
      {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],

    "unicorn/number-literal-case": "off",

    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/camelcase": ["error", { "properties": "always" }],
    "@typescript-eslint/no-unused-vars": [
      "error", { "args": "after-used" }
    ],

    "prettier/prettier": [
      "error", {
        "semi": false,
        "singleQuote": true
      }
    ]
  }
}
