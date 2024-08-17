const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];

let selectedWord;
let guessedLetters = [];
let displayWord = "";
let guessResultElement = document.getElementById("guess-result");

function startGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    console.log(selectedWord);

    displayWord = "";
    for (let i = 0; i < selectedWord.length; i++) {
        displayWord += "_ ";
    }
    document.getElementById("displayWord").textContent = displayWord;
}

startGame();

function guessLetter() {
    let inputElement = document.getElementById("letter-input");
    let letter = inputElement.value.toLowerCase();
    inputElement.value = "";

    if (guessedLetters.includes(letter)) {
        guessResultElement.textContent = "You have already guessed that letter!";
        return;
    }

    guessedLetters.push(letter);

    let updatedDisplay = "";
    let allLettersGuessed = true;
    let correctGuess = false;

    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedLetters.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
        if (letter === selectedWord[i]) {
            correctGuess = true;
        }
    }

    document.getElementById("displayWord").textContent = updatedDisplay;

    if (allLettersGuessed) {
        guessResultElement.textContent = "Congratulations! You guessed the word correctly!";
    } else if (!correctGuess) {
        guessResultElement.textContent = "Incorrect guess!";
    }
}

// Handle enter key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        guessLetter();
    }
});
