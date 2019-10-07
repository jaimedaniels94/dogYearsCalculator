//my current age
const myAge = 24;
//first two years
let earlyYears = 2;
earlyYears *= 10.5;
//first two years are accounted for
let laterYears = myAge - 2;
laterYears *= 4;
/*the result of the eqation is my age in dog years*/
myAgeInDogYears =  earlyYears + laterYears;
//my name in lower case
const myName = 'Jaime' .toLowerCase();
/*printing the string with the values of my name, age, and how old I would be in dog years*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
