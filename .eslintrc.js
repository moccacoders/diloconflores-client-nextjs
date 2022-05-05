const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error",
}

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@next/next/recommended",
        "plugin:react/recommended",
        "standard",
        "prettier",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": RULES.OFF,
        "react/react-in-jsx-scope": RULES.OFF,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            parser: "@typescript-eslint/parser",
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript",
            ],
            plugins: ["@typescript-eslint"],

            files: ["*.ts", "*.tsx"],

            rules: {},
        },
    ],
}
