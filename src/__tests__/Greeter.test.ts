import { greeter } from '../index';

test('Greeter', () => {
  expect(greeter('dearie')).toBe('Hello dearie');
});
