// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [7, 8, 9, 1, 1, 2, 7, 9, 7, 1, 0, 9, 1];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6, mystery1, mystery2, mystery3, mystery4, mystery5];


const validateCred = (array) => {
    let multiplyByTwo = false;
    const register = [];

    for (let i = array.length -1; i >= 0; i--) {
        if (!multiplyByTwo) {
            register.push(array[i]);
        } else {
            const tempNumber = array[i] * 2;
            if (tempNumber > 9) {
                register.push(tempNumber - 9);
            } else {
                register.push(tempNumber);
            }
        }
        multiplyByTwo = !multiplyByTwo;
    }

    let sum = 0;
    for (let i = 0; i < register.length; i++) {
        sum = sum + register[i];
    }
    const result = sum % 10;
    return result === 0;
};

const findInvalidCards = (batch) => {
    const batchOfInvalid = [];
    for (let i = 0; i < batch.length; i++) {
        const currentCreditCard = batch[i];
        const result = validateCred(currentCreditCard);
        if (!result) {
            batchOfInvalid.push(currentCreditCard);
        }
    }
    return batchOfInvalid;
};

const idInvalidCardCompanies = (batchOfInvalid) => {
    const creditCardCompanies = {
        3: 'Amex',
        4: 'Visa',
        5: 'Mastercard',
        6: 'Discover'
    };

    const companies = [];

    for (let i = 0; i < batchOfInvalid.length; i++) {
        const currentInvalidCard = batchOfInvalid[i];
        const firstNumber = currentInvalidCard[0];
        const company = creditCardCompanies[firstNumber];
        if (typeof company === 'undefined') {
            console.log('Company not found!');
        } else {
            if (!companies.includes(company)) {
                companies.push(company);
            }
        }     
    }
    return companies;
};

const batchOfInvalid = findInvalidCards(batch);
const invalidCompanies = idInvalidCardCompanies(batchOfInvalid);