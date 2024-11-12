module.exports = {
    trailingComma: 'es5',
    tabWidth: 4, // Identation space
    useTabs: false, // Accept tabs as indentation or only spaces
    printWidth: 120, // Prettier will wrap code longer than that
    bracketSpacing: true, // Add spaces inside brackets
    arrowParens: 'avoid', // Arrow function with only one param won't have parentheses
    semi: true, // Auto-add semi-colon at the end of statements
    singleQuote: false, // Use single or double quotes for strings
    jsxSingleQuote: false,
    quoteProps: 'as-needed',

    plugins: ['prettier-plugin-tailwindcss'],

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
                singleQuote: true,
                trailingComma: 'es5',
            },
        },
        {
            files: ['*.js', '*.mjs'],
            options: {
                singleQuote: true,
                trailingComma: 'all',
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
            },
        },
    ],
};
