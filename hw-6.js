//Задание 6.1
let text = "js";
let uppercaseText = text.toUpperCase();
console.log(uppercaseText);

//Задание 6.2 
function filterStringsByPrefix(array, prefix) {
    const lowerPrefix = prefix.toLowerCase();

    return array.filter((str) => {
        return str.toLowerCase().startsWith(lowerPrefix);
    });
}
const exampleWords = ["Apple", "Banana", "apricot", "Avocado", "berry", "Apollo"];
const prefix = "ap";
const resultObtained = filterStringsByPrefix(exampleWords, prefix);
console.log(resultObtained);

//Задание 6.3
let roundedNumber = 32.58884;

let roundedDown = Math.floor(roundedNumber);
let roundedUp = Math.ceil(roundedNumber);
let roundedNearest = Math.round(roundedNumber);

console.log("Округление вниз:", roundedDown);
console.log("Округление вверх:", roundedUp); 
console.log("Округление до ближайшего:", roundedNearest); 

//Задание 6.4
let numberMinMax = "52, 53, 49, 77, 21, 32";
let numbersArray = numberMinMax.split(", ").map(Number);

let numberMin = Math.min(...numbersArray); 
let numberMax = Math.max(...numbersArray); 

console.log("Минимальное число:", numberMin);
console.log("Максимальное число:", numberMax);

//Задание 6.5
let randomNumber = Math.random() * 10;
console.log(Math.floor(randomNumber));

//Задание 6.6
function generateRandomArray(number) {
    if (typeof number !== "number" || number <= 0 || !Number.isInteger(number)) {
        return "Пожалуйста, передайте положительное целое число.";
    }

    const length = Math.floor(number / 2);

    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const integerRandomNumber = Math.floor(Math.random() * number);
        randomArray.push(integerRandomNumber);
    }
    return randomArray;
}

const numberNew = 10;
const resultNew = generateRandomArray(numberNew);
console.log(resultNew); 

//Задание 6.7
function getRandomInRange(min, max) {
    if (typeof min !== "number" || typeof max !== "number" || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "Пожалуйста, передайте два целых числа.";
    }
    if (min >= max) {
        return "Минимальное значение должно быть меньше максимального.";
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const min = 5;
const max = 10;
const originalResult = getRandomInRange(min, max);
console.log(originalResult);

//Задание 6.8
let currentDateNew = new Date();
console.log(currentDateNew);

//Задание 6.9
const currentDate = new Date();

const futureDate = new Date(currentDate); 
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

//Задание 6.10
function formatDate(date) {
    const months = [
        "январь", "февраль", "март", "апрель", "май", "июнь",
        "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];
    const days = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];

    const dayOfMonth = date.getDate(); 
    const month = months[date.getMonth()];
    const year = date.getFullYear(); 
    const dayOfWeek = days[date.getDay()]; 

    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0"); 
    const seconds = String(date.getSeconds()).padStart(2, "0"); 

    return `Дата: ${dayOfMonth} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const currentDateForm = new Date();
console.log(formatDate(currentDateForm));