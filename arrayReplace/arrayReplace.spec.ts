import { arrayReplace } from './arrayReplace';

describe(arrayReplace.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 2, 1];
        const elementToReplace = 1;
        const substitutionElement = 3;

        // act
        const response = arrayReplace(data, elementToReplace, substitutionElement);

        // assert
        expect(response).toEqual([3, 2, 3]);
    });

    it('Test 2', () => {
        const data = [1,2,3,4,5,1,4,5];
        const elementToReplace = 5;
        const substitutionElement = 8;

        const response = arrayReplace(data, elementToReplace, substitutionElement)
        expect(response).toEqual([1,2,3,4,8,1,4,8])
    })
});
