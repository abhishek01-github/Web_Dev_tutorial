alert('HEY!! Welcome to The Guessing Game!');
alert('The rule is you have to enter a maximum number, we will be alloting you a random number in between 1 to that maximum number, You have to guess it correctly to WIN THE GAME!!');
alert('you can quit at any point by writing "quit"');
alert('Get ready!!!!!!')

let maximum = prompt("Enter a maximum number!");

while (true) {
    if (maximum.toLowerCase() === 'quit') {
        alert("You have decided to quit the game this early, OH!! you must be scared to lose, GOODBYEEE COWARD!!!");
        throw new Error("Player quit the game.");
    } else if (!isNaN(parseInt(maximum))) {
        break;
    } else {
        maximum = prompt("Enter a valid number");
    }
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let count = 1;

while (guess !== null) {
    if (guess.toLowerCase() === 'quit') {
        alert("You have decided to quit the game, Thank you");
        throw new Error("Player quit the game.");
    }
    
    const parsedGuess = parseInt(guess);
    
    if (!isNaN(parsedGuess)) {
        if (parsedGuess === targetNum) {
            alert(`Congratulations!!! YOU WIN in ${count} guesses! You must throw a partyyy!!!!`);
            break;
        } else if (parsedGuess > targetNum) {
            guess = prompt("Your guess is higher than the number! Try again!!");
            count++;
        } else if (parsedGuess < targetNum) {
            guess = prompt("Your guess is lower than the number! Try again!!");
            count++;
        }
    } else {
        guess = prompt("Please enter a valid number or 'quit'");
    }
}
