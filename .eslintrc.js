module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked'
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Customize rules as needed
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-console': 'warn',
    'complexity': ['warn', 10],
    'max-len': ['error', { 
      code: 120, 
      ignoreComments: true, 
      ignoreTrailingComments: true 
    }]
  }
};