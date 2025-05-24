import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...js.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'complexity': ['warn', 10],
      'max-len': ['error', { 
        code: 120, 
        ignoreComments: true, 
        ignoreTrailingComments: true 
      }]
    }
  }
];