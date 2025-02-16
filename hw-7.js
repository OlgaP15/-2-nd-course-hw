//Задание 8.1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//Задание 8.2
function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]); 
        }
    }
    return result; в
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const peopleFloor = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleFloor, isMale)); 

//Задание 8.3
function printCurrentDate() {
    console.log(new Date().toLocaleString());
}

const intervalId = setInterval(printCurrentDate, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000); 

//Задание 8.4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 8.5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
