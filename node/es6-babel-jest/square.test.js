import square from './square.js';
 
describe('square function', () => {
    it('Compute the square of a number', () => {
        expect(square(2)).toEqual(4);
    });
});