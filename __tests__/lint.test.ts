import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

describe('ESLint Configuration', () => {
  it('should run lint without errors', () => {
    try {
      // Run ESLint on the project
      execSync('npm run lint', { stdio: 'pipe' });
    } catch (error) {
      // If there's an error, fail the test
      console.error(error.stderr.toString());
      throw new Error('ESLint found issues in the project');
    }
  });

  it('should have correct lint rules configured', () => {
    // Basic check for ESLint configuration
    const eslintConfig = require('../.eslintrc.js');
    
    expect(eslintConfig.rules).toBeDefined();
    expect(eslintConfig.rules['@typescript-eslint/no-explicit-any']).toBe('warn');
    expect(eslintConfig.rules['max-len']).toBeDefined();
  });
});