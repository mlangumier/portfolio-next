import path from 'node:path';
import js from '@eslint/js';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

import prettierConfig from 'eslint-config-prettier';
import eslingPluginPrettierRecommmended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    ignores: ['./docker-compose.yml', './Dockerfile.dev', '**/.*'],
  },
  {
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      //? If long import error (3+ per line), implement this rule:
      // 'import/max-import-per-line': ['error', { code: 120, ignorePattern: '^import .*' }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
        },
      ],
      // Shows an error if using Next.js' navigation tools instead of Next-intl's.
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `@/navigation` instead.',
          importNames: ['default'],
        },
        {
          name: 'next/navigation',
          message: 'Please import from `@/navigation` instead.',
          importNames: ['redirect', 'permanentRedirect', 'userRouter', 'usePathname'],
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  prettierConfig,
  eslingPluginPrettierRecommmended,
];

export default eslintConfig;
