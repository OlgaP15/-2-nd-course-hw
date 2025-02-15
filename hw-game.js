const playButtons = document.querySelectorAll('.games-icons__button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gameType = button.getAttribute('data-game'); 
        switch (gameType) {
            case 'guess-number':
                startGuessNumberGame();
                break;
            case 'simple-arithmetic':
                startSimpleArithmeticGame(); 
                break;
            case 'turn-text-over':
                startTurnTextOverGame(); 
                break;
            case 'quiz':
                startQuizGame(); 
                break;
            case 'rock-paper-scissors':
                startRockPaperScissors(); 
                break;
            case 'random-color-generator':
                alert("Игра 'Генератор случайных цветов' пока недоступна!"); 
                break;
            default:
                alert("Игра не найдена!");
        }
    });
});

function startGuessNumberGame() {
    alert("Запускаем игру 'Угадай число'!");
    alert("После каждой попытки ты получишь подсказку: больше или меньше загаданное число. Игра продолжается до тех пор, пока ты не угадаешь число!");

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (true) {
        const userGuess = prompt("Введите число от 1 до 100:");

        if (userGuess === null) {
            alert("Игра завершена. До свидания!");
            break;
        }

        const guessNumber = parseInt(userGuess);

        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            alert("Пожалуйста, введите корректное число от 1 до 100!");
            continue;
        }

        attempts++; 

        if (guessNumber < randomNumber) {
            alert("Мое число больше!");
        } else if (guessNumber > randomNumber) {
            alert("Мое число меньше!");
        } else {
            alert(`Поздравляю! Ты угадал число за ${attempts} попыток.`);
            break;
        }
    }
}
function startSimpleArithmeticGame() {
    alert("Запускаем игру 'Простая арифметика'!");
    alert("В этой игре Ваша задача дать правильный ответ. Арифметические задачи на сложение, вычитание, умножение и деление генерируются случайным образом.");

    let correctCount = 0; 
    let incorrectCount = 0;

    while (true) {
        const task = generateTask();

        const userAnswer = prompt(`Решите задачу: ${task}`);

        if (userAnswer === null) {
            alert(`Игра завершена! Правильных ответов: ${correctCount}, ошибок: ${incorrectCount}`);
            break;
        }

        const numericAnswer = parseFloat(userAnswer);

        const correctAnswer = eval(task); 

        if (numericAnswer === correctAnswer) {
            alert("Правильно! Молодец!");
            correctCount++;
        } else {
            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
            incorrectCount++;
        }

        const playAgain = confirm("Хотите решить ещё одну задачу?");
        if (!playAgain) {
            alert(`Игра окончена! Правильных ответов: ${correctCount}, ошибок: ${incorrectCount}`);
            break;
        }
    }
}
function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    return `${num1} ${operator} ${num2}`;
}
function startTurnTextOverGame() {
    alert("Запускаем игру 'Переверни текст'!");
    alert("Попробуйте ввести текст, который будет перевернут.");

    while (true) {
        const userText = prompt("Введите любой текст:");

        if (userText === null) {
            alert("Игра завершена. До свидания!");
            break;
        }

        const trimmedText = userText.trim();

        if (trimmedText === "") {
            alert("Пожалуйста, введите текст!");
            continue;
        }

        if (!/[a-zA-Zа-яА-Я]/.test(trimmedText)) {
            alert("Пожалуйста, введите текст, содержащий буквы!");
            continue;
        }

        const flippedText = trimmedText.split("").reverse().join("").toLowerCase();

        alert(`Перевернутый текст: ${flippedText}`);

        const playAgain = confirm("Хотите перевернуть ещё один текст?");
        if (!playAgain) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }
    }
}
const quiz = [
    {
        question: "Полосабый большой кот, только в Джунглях он живет. Младший брат царя зверей, отгадай его скорей?",
        options: ["1. Лиса", "2. Тигр", "3. Кот"],
        correctAnswer: 2 
    },
    {
        question: "Я нужна всем безусловно: Нарисую домик ровно, точки две соеденю и длину вам назову?",
        options: ["1. Циркуль", "2. Линейка", "3. Ножницы"],
        correctAnswer: 2
    },
    {
        question: "Какая птица носит название фрукта?",
        options: ["1. Галка", "2. Сойка", "3. Киви"],
        correctAnswer: 3
    }
];
function startQuizGame() {
    alert("Добро пожаловать в игру 'Викторина'!");
    alert("Ответе на вопросы викторины с вариантами ответов.");
    let correctAnswers = 0; 

    quiz.forEach((question, index) => {
        const questionText = `Вопрос ${index + 1}: ${question.question}\n${question.options.join("\n")}`;

        const userAnswer = prompt(questionText);

        if (userAnswer !== null && parseInt(userAnswer) === question.correctAnswer) {
            alert("Правильно! Молодец!");
            correctAnswers++; 
        } else if (userAnswer === null) {
            alert("Игра завершена.");
            return; 
        } else {
            alert(`Неправильно! Правильный ответ: ${question.correctAnswer}`);
        }
    });

    alert(`Викторина завершена! Правильных ответов: ${correctAnswers} из ${quiz.length}`);
}
function startRockPaperScissors() {
    alert("Запускаем игру 'Камень, ножницы, бумага'!");
    alert("В этой игре Ваша задача сыграть с компьютером. Введите текст на выбор: камень, ножницы или бумага.");

    const choices = ["камень", "ножницы", "бумага"];

    while (true) {
        const userChoice = prompt("Введите ваш выбор (камень, ножницы, бумага):");

        if (userChoice === null) {
            alert("Игра завершена. До свидания!");
            break;
        }

        const userChoiceLower = userChoice.toLowerCase().trim();

        if (!choices.includes(userChoiceLower)) {
            alert("Пожалуйста, введите корректный выбор: камень, ножницы или бумага!");
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        alert(`Компьютер выбрал: ${computerChoice}`);

        let result;
        if (userChoiceLower === computerChoice) {
            result = "Ничья!";
        } else if (
            (userChoiceLower === "камень" && computerChoice === "ножницы") ||
            (userChoiceLower === "ножницы" && computerChoice === "бумага") ||
            (userChoiceLower === "бумага" && computerChoice === "камень")
        ) {
            result = "Вы победили!";
        } else {
            result = "Вы проиграли!";
        }

        alert(`Ваш выбор: ${userChoiceLower}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);

        const playAgain = confirm("Хотите сыграть ещё раз?");
        if (!playAgain) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }
    }
}



