//Задание 1 //
let password = 'пароль';
let userInput = prompt("Введите пароль");

if (userInput === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

//Задание 2//
let i = 2;
if (i > 0 && i <10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 3//
let k = 120;
let l = 50;

if (k > 100 || l > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
//Задание 4//
let m = '2';
let n = '3';
alert(Number(m) + Number(n)); 

//Задание 5//
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

//Доп.задание 1//
let usertInput = prompt("Пожалуйста, введите любое число: ");
let number = Number(usertInput);
if (isNaN(number)) {
    alert("Вы ввели не число!");
} else {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

//Доп.задание 2//

//Доп.задание 3//