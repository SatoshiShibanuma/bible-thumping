import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

describe('ESLint Configuration', () => {
  it('should run lint without errors', () => {
    try {
      // Run ESLint on the project
      execSync('npx eslint .', { stdio: 'pipe' });
    } catch (error) {
      // If there's an error, log details and fail the test
      console.error(error.stderr.toString());
      throw new Error('ESLint found issues in the project');
    }
  });

  it('should have correct lint rules configured', () => {
    // Read the ESLint configuration file directly
    const configPath = path.resolve(__dirname, '../eslint.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Basic checks for specific rules
    expect(configContent).toContain("'@typescript-eslint/no-explicit-any': 'warn'");
    expect(configContent).toContain("'max-len'");
  });
});