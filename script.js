function startGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    const maxAttempts = 3;

    const container = document.querySelector('.container');
    container.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'row';

    const form = document.createElement('form');
    form.setAttribute('id', 'guessForm');

    const label = document.createElement('label');
    label.textContent = 'Guess a number between 1 and 10:';
    label.setAttribute('for', 'guessInput');

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'guessInput');
    input.setAttribute('min', '1');
    input.setAttribute('max', '10');
    input.setAttribute('name', 'guessInput');

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.setAttribute('type', 'submit');

    const message = document.createElement('p');
    message.setAttribute('id', 'message');

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    div.appendChild(form);
    div.appendChild(message);
    container.appendChild(div);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        attempts++;
        const guess = parseInt(input.value);

        if (guess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number.';
            message.style.backgroundColor = 'green';
            endGame();
        } else if (attempts >= maxAttempts) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            message.style.backgroundColor = 'red';
            endGame();
        } else {
            message.textContent = guess < randomNumber ? 'Too low. Try again!' : 'Too high. Try again!';
            message.style.backgroundColor = 'red';
        }
    });

    function endGame() {
        input.disabled = true;
        submit.disabled = true;
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.setAttribute('type', 'button');
        restartButton.addEventListener('click', startGame);
        container.appendChild(restartButton);
    }
}

document.querySelector('#start-button').addEventListener('click', startGame);
