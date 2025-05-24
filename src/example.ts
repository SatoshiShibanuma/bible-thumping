/**
 * Example function to demonstrate ESLint configuration
 * @param input Input string to process
 * @returns Processed string
 */
export function processString(input: string): string {
    if (!input) {
        throw new Error('Input cannot be empty');
    }
    return input.trim().toUpperCase();
}