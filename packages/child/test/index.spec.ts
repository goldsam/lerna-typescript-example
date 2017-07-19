import { add } from '../src/index';

describe('index', () => {
 it('should add two number together', () => {
  expect(add(3, 5)).toBe(8);
 });
});
