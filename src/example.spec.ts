import { describe, it, expect } from 'vitest';
import { processString } from './example';

describe('processString', () => {
    it('should convert input to uppercase', () => {
        const input = 'hello world';
        const result = processString(input);
        expect(result).toBe('HELLO WORLD');
    });

    it('should trim whitespace', () => {
        const input = '  test  ';
        const result = processString(input);
        expect(result).toBe('TEST');
    });

    it('should throw error for empty input', () => {
        expect(() => processString('')).toThrow('Input cannot be empty');
    });
});