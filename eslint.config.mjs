export default [
  {
    ignores: [
      'dist',
      'node_modules',
      '.next/',
      'out/',
      'next.config.mjs',
      'postcss.config.js',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'import/no-relative-packages': 'off',
    },
  },
];
