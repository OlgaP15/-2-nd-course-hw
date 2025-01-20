//Задание 1//
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2//
let firstlPhoneReleaseYear = 2007;
alert(firstlPhoneReleaseYear);

//Задание 3//
let creatorOfJavaScript = "Брендан Эйх";
alert(creatorOfJavaScript);

//Задание 4//
let c = 10;
let b = 2;

let sum = c + b;
let difference = c - b;
let product = c * b;
let quotient = c / b;

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

//Задание 5//
let result = 2 ** 5;
alert(result);

//Задание 6//
let d = 9;
let e = 2;

let remainder = d % e;

alert(remainder);

//Задание 7//
let num = 1;
num  += 5;
num  -= 3;
num  *= 7;
num  /= 3;
num ++;
num --;
alert(num);

//Задание 8//
let age = prompt("Сколько Вам лет?");

alert("Вам " + age + " лет");

//Задание 9//
let user = {
    name: "Иван",
    age: 30,
    inAdmin:true
};

//Задание 10//
let userName = prompt ("Как Вас зовут?");

alert (`Привет, ${userName}`);

//Дополнительное задание//
let number = prompt("Загадайте любое число: ");

number = Number(number);

let doubledNumber = number * 2;
alert("Удвоенное число: " + doubledNumber);

let plusTen = doubledNumber + 10;
alert("Удвоенное число + 10: " + plusTen);

let dividedByTwo = plusTen / 2;
alert("Результат деления на 2: " + dividedByTwo);

let finalResult = dividedByTwo - number;
alert("Результат после вычитания загаданного числа: " + finalResult);

alert("Ответ равен 5!");
