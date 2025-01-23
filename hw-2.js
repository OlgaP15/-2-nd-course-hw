//Задание 2.1//
let password = 'пароль';
let userInput = prompt("Введите пароль");

if (userInput === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

//Задание 2.2//
let i = 2;
if (i > 0 && i <10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 2.3//
let k = 120;
let l = 50;

if (k > 100 || l > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
//Задание 2.4//
let m = '2';
let n = '3';

alert(Number(m) + Number(n)); 

//Задание 2.5//
let monthNumber = 12;
if(monthNumber < 1 || monthNumber > 12) {
    console.log("Номер месяца должен быть от 1 до 12.");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
    }
}

//Доп.задание 2.1//
let enterInput = prompt("Пожалуйста, введите любое число: ");
let date = Number(enterInput);
if (isNaN(date)) {
    alert("Вы ввели не число!");
} else {
    if (date % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

//Доп.задание 2.2//
let clientOS = 0;

if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке.");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке.");
} else {
    console.log("Неизвестная операционная система.");
}

//Доп.задание 2.3//
let clientOB = 0;
let clientDeviceYear = 2015;

if (clientDeviceYear < 2015) {
    if (clientOB ===0) {
        console.log("Установите облегченную версию приложения для iOS по ссылке.");
    } else if (clientOB ===1) {
        console.log("Установите облегченную версию приложения для Android по ссылке.");
    } else {
        console.log("Неизвестная операционная система.");
    }
} else {
    if (clientOB === 0) {
        console.log("Установите облегченную версию приложения для iOS по ссылке.");
    }else if (clientOB === 1) {
        console.log("Установите облегченную версию приложения для Android по ссылке.");
    } else {
        console.log("Неизвестная операционная система.");
    
    }
}
