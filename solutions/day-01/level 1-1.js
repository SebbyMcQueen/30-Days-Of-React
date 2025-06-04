// #1
  const arr = Array() 

// #2
  const arrMoreThanFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// #3
  console.log(arrMoreThanFive.length)

// #4
  console.log(arrMoreThanFive[0], arrMoreThanFive[arrMoreThanFive.length/2 - 1], arrMoreThanFive[arrMoreThanFive.length - 1])

// #5
  const mixedDataTypes = [
    'String',
    'Number',
    'BigInt',
    'Boolean',
    'Undefined',
    'Null',
    'Symbol',
    'Object',
]

console.log(mixedDataTypes.length)

// #6
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]

// #7
console.log(itCompanies)

// #8
console.log(itCompanies.length)

// #9
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

// #10
console.log(itCompanies.toString())

// #11
console.log(itCompanies.toString().toUpperCase())

// #12
let text = ''
for (let i = 0; i < itCompanies.length; i++) {
    if (i === itCompanies.length - 1) {
        text += 'and ' + itCompanies[i] + ' are big IT companies.';
    } else {
        text += itCompanies[i] + ', ';
    }
}
console.log(text);

// #13
const companyToCheck = 'Facebook';
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck + ' is found in the list.');
} else {
    console.log(companyToCheck + ' is not found in the list.');
}

// #14
const result = []
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i]
    let count = 0
    for (let j = 0; j < company.length; j++) {
        if (company[j] === 'o') {
            count++;
        }
    }
    if (count <= 1) {
        result.push(company);
    }
}
console.log(result)

// #15
console.log(itCompanies.sort())

// #16
console.log(itCompanies.reverse())

// #17
console.log(itCompanies.slice(0, 3))

// #18
console.log(itCompanies.slice((itCompanies.length - 3), itCompanies.length))

// #19
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2)+1))

// #20
console.log(itCompanies.splice(0, 1))

// #21
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2)-1,1))

// #22
console.log(itCompanies.splice(itCompanies.length - 1, 1))

// #23
console.log(itCompanies.splice())