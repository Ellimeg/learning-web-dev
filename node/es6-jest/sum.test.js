import sum from './sum.js';
 
describe('sum function', () => {
    it('Adds two numbers', () => {
        expect(sum(2,3)).toEqual(5);
    });
});