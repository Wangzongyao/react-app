module.exports = {
    extends: "airbnb",
    rules: {
        "semi": ["error", "never"],
        "singleQuote": true,
        "indent": ["error", 4],
        "linebreak-style": ["off", "unix"],
        "react/jsx-indent": [true, 'tab'],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-named-as-default": ["off"],
        "import/no-named-as-default-member": ["off"],
        "import/no-unresolved": [2, { ignore: ['@commons'] }]
    },
    "globals": {
        "localStorage": true,
        "window": true,
        "document": true,
        "fetch": true
    }
}