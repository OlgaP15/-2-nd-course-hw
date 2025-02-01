const playButtons = document.querySelectorAll('.games-icons__button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gameType = button.getAttribute('data-game'); 
        switch (gameType) {
            case 'guess-number':
                startGuessNumberGame();
                break;
            case 'simple-arithmetic':
                alert("Игра 'Простая арифметика' пока недоступна!"); 
                break;
            case 'turn-over':
                alert("Игра 'Перевертыши' пока недоступна!"); 
                break;
            case 'quiz':
                alert("Игра 'Викторина' пока недоступна!"); 
                break;
            case 'rock-paper-scissors':
                alert("Игра 'Камень-ножницы-бумага' пока недоступна!"); 
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

