    //Задание 3.1
for (let z = 0; z < 2; z++) {
    console.log("Привет");
}

    //Задание 3.2
for (let g =1; g <= 5; g++) {
    console.log(g);
}

    //Задание 3.3
for (let h =7; h <= 22; h++) {
    console.log(h);
}

    //Задание 3.4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}

    //Задание 3.5
let q =1000;
let numX = 0;
while (q >= 50) {
    q /= 2;
    numX++;
}
console.log("Полученное число: ", q);
console.log("Количество итераций: ", numX);

    //Задание 3.6
let firstFriday = 5;
for (let day = 1; day <= 31; day++) {
    if (day === firstFriday || (day - firstFriday) % 7 === 0) {
        console.log(`Сегодня пятница, ${day}-e число. Необходимо подготовить отчет.`);
    }
}

    //Доп. Задание 3.1
let u = 100;
let iterations = 0;
while (u >= 0) {
    u -= 7;
    iterations++;
}
console.log("Полученное число: ", u);
console.log("Количество итераций: ", iterations);

    //Доп. Задание 3.2
let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
for (let x = 0; x < months.length; x++) {
    console.log(`${x + 1}. ${months[x]}`);
}

    //Доп. Задание 3.3
let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopia"
};
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

    //Доп. Задание 3.4
let numbers = [];
for (let y = 0; y < 10; y++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
let minNumber = Math.min(...numbers);
console.log("Массив чисел: ", numbers);
console.log("Минимальное число: ", minNumber); 
