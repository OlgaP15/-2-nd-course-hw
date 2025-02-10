
          //Задание 4.1
function findMinNumber(ab, ac) {
    return ab <= ac ? ab : ac;
}
console.log(findMinNumber(4, 8));
console.log(findMinNumber(6, 6));

          //Задание 4.2
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(14));

          //Задание 4.3
function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
}
        
function getSquare(number) {
    return number * number;
}

printSquare(5);

const squareValue = getSquare(6);
console.log(`Квадрат числа 6 равен ${squareValue}`);

          //Задание 4.4
function checkAge() {
    const age = prompt("Сколько вам лет?");
        
    const ageNumber = parseInt(age);
        
    if (isNaN(ageNumber)) {
        alert("Вы ввели неправильное значение");
        } else if (ageNumber < 0) {
            alert("Вы ввели неправильное значение");
        } else if (ageNumber >= 0 && ageNumber <= 12) {
            alert("Привет, друг!");
        } else {
            alert("Добро пожаловать!");
            }
}
checkAge();

          //Задание 4.5
function multiplyNumbers(a, b) {
    const numA = parseInt(a);
    const numB = parseInt(b);
        
    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return numA * numB;
    }
}
const cubeResult = multiplyNumbers(5, 3);

console.log(cubeResult); 

          //Задание 4.6
function calculateCube() {
    const input = prompt("Введите число:");
        
    const number = parseFloat(input);
        
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = number ** 3; 
        return `${number} в кубе равняется ${cube}`;
    }
}
console.log(calculateCube());

for (let ai = 0; ai <= 10; ai++) {
    console.log(calculateCube(ai));
}

          //Задание 4.7
const circle1 = {
    radius: 5,
        
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};
        
const circle2 = {
    radius: 10,

    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea()); 
console.log(circle2.getPerimeter()); 
