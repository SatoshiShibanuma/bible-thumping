import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('ESLint Configuration', () => {
  it('should have ESLint configuration file', () => {
    const configPath = path.resolve(__dirname, '../eslint.config.js');
    expect(fs.existsSync(configPath), 'ESLint configuration file should exist').to.be.true;
  });

  it('should have correct lint rules configured', () => {
    // Read the ESLint configuration file directly
    const configPath = path.resolve(__dirname, '../eslint.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Basic checks for specific rules
    expect(configContent).to.include("'@typescript-eslint/no-explicit-any': 'warn'");
    expect(configContent).to.include("'max-len'");
  });
});