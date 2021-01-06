module.exports = {
    extends: "airbnb",
    rules: {
        "semi": ["error", "never"],
        "singleQuote": true,
        "indent": ["error", 4],
        "max-len": ["error", { "code": 150 }],
        "linebreak-style": ["off", "unix"],
        "import/no-named-as-default": ["off"],
        "import/no-named-as-default-member": ["off"],
        "import/no-unresolved": [2, { ignore: ['@commons'] }],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/webpack.*.js"] }],
        "react/jsx-indent": [true, 'tab'],
        "react/jsx-indent-props": ['off', 'tab'],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "globals": {
        "localStorage": true,
        "window": true,
        "document": true,
        "fetch": true,
        "history": true
    },
    // https://www.npmjs.com/package/@babel/eslint-parser
    "parser": "@babel/eslint-parser",
}