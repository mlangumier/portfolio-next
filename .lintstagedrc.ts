import path from 'path';

// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const buildEslintCommand = (filenames: string[]) =>
  `next lint --fix --file ${filenames.map((f: string) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx,mjs}': [buildEslintCommand],
};
