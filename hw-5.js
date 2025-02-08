//Задание 5.1
const numberSearch = [1, 5, 4, 10, 0, 3];
let aj = 0;
        
while (aj < numberSearch.length) {
    console.log(numberSearch[aj]); 
    if (numberSearch[aj] === 10) {
    break;
    }
    aj++;
}

//Задание 5.2
const index = numberSearch.indexOf(4); 
console.log(index); 

//Задание 5.3
const arr = [1, 3, 5, 10, 20];
const resulty = arr.join(' ');
console.log(resulty);

//Задание 5.4
const size = 3; 
const array = []; 

for (let ak = 0; ak < size; ak++) {
    const row = []; 
    for (let al = 0; al < size; al++) {
    row.push(1); 
    }
    array.push(row); 
}
console.log(array);

//Задание 5.5
const arrNew = [1, 1, 1];
arrNew.push(2, 2, 2);
console.log(arrNew);

//Задание 5.6
const arr1 = [9, 8, 7, 'a', 6, 5];
arr1.sort((a, b) => a - b);
const resultArr1 = arr1.filter(item => typeof item === 'number');
console.log(resultArr1);

//Задание 5.7
const arr2 = [9, 8, 7, 6, 5];
const guessNumber1 = prompt("Угадай число из массива:");
if (guessNumber1 !== null) {
    const guessNumber = Number(guessNumber1);
    if (arr.includes(guessNumber)) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }
} else {
    alert("Вы отменили ввод.");
}

//Задание 5.8
const str = 'abcdef';
const array2 = str.split('');
const reversedArray2 = array2.reverse();
const reversedStr = reversedArray2.join('');
console.log(reversedStr);

//Задание 5.9
const newArr = [[1, 2, 3], [4, 5, 6]];
const result1 = [...newArr[0], ...newArr[1]];
console.log(result1);

//Задание 5.10
const newNumbers = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10];
for (let am = 0; am < newNumbers.length - 1; am++) {
    const sum = newNumbers[am] + newNumbers[am + 1];
    console.log(`Сумма элементов ${newNumbers[am]} и ${newNumbers[am + 1]} равна ${sum}`);
}
//Задание 5.11
function getSquares(arr) {
    return arr.map(num => num * num);
}
const numbers5 = [1, 2, 3, 4, 5];
const squares = getSquares(numbers5);
console.log(squares); 

//Задание 5.12
function getLengthsOfStrings(stringsArray) {
    const lengthsArray = stringsArray.map(str => str.length);
    return lengthsArray;
}
const words = ["apple", "banana", "cherry", "date"];
const lengths = getLengthsOfStrings(words);
console.log(lengths);

//Задание 5.13
function getNegativeNumbers(numbersArray) {
    const negativeNumbers = numbersArray.filter(num => num < 0);
    return negativeNumbers;
}
const numbers6 = [1, -2, 3, -4, 5, -6];
const negatives = getNegativeNumbers(numbers6);
console.log(negatives);

//Задание 5.14
const randomNumbers = [];
for (let an = 0; an < 10; an++) {
  randomNumbers.push(Math.floor(Math.random() * 11)); 
}
const evenNumbers = randomNumbers.filter(num => num % 2 === 0);
console.log("Исходный массив:", randomNumbers);
console.log("Массив с чётными числами:", evenNumbers);

//Задание 5.15
const array8 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const sum8 = array8.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum8 / array8.length;
console.log("Массив:", array8);
console.log("Сумма элементов:", sum8);
console.log("Среднее арифметическое:", average);