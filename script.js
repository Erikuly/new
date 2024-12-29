const numberOfSnowflakes = 100; // Количество снежинок

// Функция для создания снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';  // Символ снежинки

    // Случайные начальные параметры для снежинок
    const size = Math.random() * 10 + 10; // Размер снежинки от 10px до 20px
    const left = Math.random() * 100; // Случайная позиция по горизонтали
    const animationDuration = Math.random() * 5 + 5; // Случайная продолжительность анимации от 5 до 10 секунд

    // Устанавливаем случайные значения
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${left}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    // Добавляем случайное движение по горизонтали с помощью переменной CSS
    const randomX = Math.random() * 100 - 50;  // Генерируем случайное движение по оси X

    snowflake.style.setProperty('--x', `${randomX}px`);

    // Добавляем снежинку в тело документа
    document.body.appendChild(snowflake);

    // Удаляем снежинку после окончания анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Генерация снежинок с интервалом
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

// Генерация новых снежинок каждую секунду
setInterval(createSnowflake, 200);