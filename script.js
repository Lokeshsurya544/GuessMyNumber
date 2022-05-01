'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// // console.log(document.querySelector('.message').textContent = 'Correct Number!');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 21;


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (score > 0) {

        // When there is no input
        if (!guess) {
            document.querySelector('.message').textContent = '💁 No number!';

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🏆 Correct Number!';

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }


        } else if (guess !== secretNumber) {
            document.querySelector('.message').textContent = guess > secretNumber ? '↗️ Too High!' : '↘️ Too Low!';
            score--;
            document.querySelector('.score').textContent = score;

            //     // When guess is too high
            // } else if (guess > secretNumber) {
            //     document.querySelector('.message').textContent = '↗️ Too High!';
            //     score--;
            //     document.querySelector('.score').textContent = score;
            //     // When guess is too low
            // } else if (guess < secretNumber) {
            //     document.querySelector('.message').textContent = '↘️ Too Low!';
            //     score--;
            //     document.querySelector('.score').textContent = score;
            // }
        }
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})



