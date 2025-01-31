// eslint.config.mjs
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'args': 'after-used',
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrors': 'none',
      },
    ],
  },
});