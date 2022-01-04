const validateCreditCard = array => {
  let multiplyByTwo = false
  const register = []

  for (let i = array.length - 1; i >= 0; i--) {
    if (!multiplyByTwo) {
      register.push(array[i])
    } else {
      const tempNumber = array[i] * 2
      if (tempNumber > 9) {
        register.push(tempNumber - 9)
      } else {
        register.push(tempNumber)
      }
    }
    multiplyByTwo = !multiplyByTwo
  }

  let sum = 0
  for (let i = 0; i < register.length; i++) {
    sum = sum + register[i]
  }
  const result = sum % 10
  return result === 0
}

const findInvalidCards = batch => {
  if (typeof batch === 'undefined') {
    return []
  }
  const batchOfInvalid = []
  for (let i = 0; i < batch.length; i++) {
    const currentCreditCard = batch[i]
    const result = validateCreditCard(currentCreditCard)
    if (!result) {
      batchOfInvalid.push(currentCreditCard)
    }
  }
  return batchOfInvalid
}

const idInvalidCardCompanies = batchOfInvalid => {
  const creditCardCompanies = {
    3: 'Amex',
    4: 'Visa',
    5: 'Mastercard',
    6: 'Discover'
  }

  const companies = []

  for (let i = 0; i < batchOfInvalid.length; i++) {
    const currentInvalidCard = batchOfInvalid[i]
    const firstNumber = currentInvalidCard[0]
    const company = creditCardCompanies[firstNumber]
    if (typeof company === 'undefined') {
      throw new Error('Company not found!')
    } else {
      if (!companies.includes(company)) {
        companies.push(company)
      }
    }
  }
  return companies
}

const Validator = {
  validateCreditCard: validateCreditCard,
  findInvalidCards: findInvalidCards,
  idInvalidCardCompanies: idInvalidCardCompanies
}

export default Validator
