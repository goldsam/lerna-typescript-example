import { App } from '../src/index';

describe('index', () => {
 it('should add two number together', () => {
    expect(new App().run()).toBe(3);
 });
});
