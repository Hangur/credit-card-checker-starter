import { expect } from 'chai';
import Validator from '../main';

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];


const testInputs = {
    valid: [
        [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
        [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
        [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6],
        [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5],
        [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
    ],
    invalid: [
        [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
        [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
        [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
        [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5],
        [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4],
        [7, 8, 9, 1, 1, 2, 7, 9, 7, 1, 0, 9, 1]
    ]
};

describe('validateCreditCard', () => {
    
    describe('valid credit cards', () => {

        const validateValid = (validCreditCard) => {
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        };

        it('valid scenario 1', () => {
            validateValid(testInputs.valid[0]);
        });
    
        it('valid scenario 2', () => {
            validateValid(testInputs.valid[1]);
        });
    
        it('valid scenario 3', () => {
            validateValid(testInputs.valid[2]);
        });
    
        it('valid scenario 4', () => {
            validateValid(testInputs.valid[3]);
        });
    
        it('valid scenario 5', () => {
            validateValid(testInputs.valid[4]);
        });
    });
    
    describe('invalid credit cards', () => {

        const validateInvalid = (invalidCreditCard) => {
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        };

        it('invalid scenario 1', () => {
            validateInvalid(testInputs.invalid[0]);
        });
    
        it('invalid scenario 2', () => {
            validateInvalid(testInputs.invalid[1]);
        });
    
        it('invalid scenario 3', () => {
            validateInvalid(testInputs.invalid[2]);
        });
    
        it('invalid scenario 4', () => {
            validateInvalid(testInputs.invalid[3]);
        });
    
        it('invalid scenario 5', () => {
            validateInvalid(testInputs.invalid[4]);
        });

        it('invalid scenario 6', () => {
            validateInvalid(testInputs.invalid[5]);
        });
    });
});

describe('findInvalidCards', () => {

    it('finds invalid cards', () => {

        const batchOfCards = [
            testInputs.valid[0],
            testInputs.valid[1],
            testInputs.invalid[5]
        ];
        const expected = [
            testInputs.invalid[5]
        ];
        const result = Validator.findInvalidCards(batchOfCards);

        expect(result).to.deep.equal(expected);
    });

    it('returns no invalid cards when there are no invalid', () => {
        
        const batchOfCards = [
            testInputs.valid[2], 
            testInputs.valid[3]
        ];
        const expected = [];
        const result = Validator.findInvalidCards(batchOfCards);

        expect(result).to.deep.equal(expected);
    });

    it('returns no invalid cards when there is an empty batch', () => {

        const batchOfCards = [];
        const expected = [];
        const result = Validator.findInvalidCards(batchOfCards);

        expect(result).to.deep.equal(expected);
    });

    it('returns no invalid cards when there is no input', () => {

        const expected = [];
        const result = Validator.findInvalidCards();

        expect(result).to.deep.equal(expected);
    });

});