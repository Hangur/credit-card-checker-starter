import { expect } from 'chai';
import Validator from '../main';

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];


describe('validateCreditCard', () => {
    
    describe('valid credit cards', () => {

        it('valid scenario 1', () => {
            const validCreditCard = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        });
    
        it('valid scenario 2', () => {
            const validCreditCard = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        });
    
        it('valid scenario 3', () => {
            const validCreditCard = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        });
    
        it('valid scenario 4', () => {
            const validCreditCard = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        });
    
        it('valid scenario 5', () => {
            const validCreditCard = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
            const result = Validator.validateCreditCard(validCreditCard);
            expect(result).to.be.true;
        });
    });
    
    describe('invalid credit cards', () => {

        it('invalid scenario 1', () => {
            const invalidCreditCard = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });
    
        it('invalid scenario 2', () => {
            const invalidCreditCard = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });
    
        it('invalid scenario 3', () => {
            const invalidCreditCard = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });
    
        it('invalid scenario 4', () => {
            const invalidCreditCard = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });
    
        it('invalid scenario 5', () => {
            const invalidCreditCard = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });

        it('invalid scenario 6', () => {
            const invalidCreditCard = [7, 8, 9, 1, 1, 2, 7, 9, 7, 1, 0, 9, 1];
            const result = Validator.validateCreditCard(invalidCreditCard);
            expect(result).to.be.false;
        });
    });
});