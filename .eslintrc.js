module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "no-else-return": "off",
    "no-console": "off",
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "no-use-before-define": "off",
  },
};
