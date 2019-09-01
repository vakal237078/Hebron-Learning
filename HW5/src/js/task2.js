let wantUserPlayGame = confirm("Do you want to play a game?");
let guessedNumber;
let userResponse;
let userResponseForNextGame = null;
let totalPrize = 0;
let firstNumberForInterval = 5;
let superPrize = 10;
let middlePrize = 5;
let lastPrize = 2;

function newGame(levelUp, doublingInterval, upPrize) {
    let attempts = 3;
    if (levelUp) {
        firstNumberForInterval = firstNumberForInterval * doublingInterval;
        superPrize = superPrize + upPrize[0];
        middlePrize = middlePrize + upPrize[1];
        lastPrize = lastPrize + upPrize[2];
    }
    if (wantUserPlayGame) {
        guessedNumber = Math.floor(Math.random() * firstNumberForInterval) + 1;
        userResponse = +prompt(`
        Enter a number from 1 to ${firstNumberForInterval}
        Attempts left: ${attempts}
        Total prize: ${totalPrize}$
        Possible prize on current attempts: ${superPrize}$`);
        if (userResponse === guessedNumber) {
            totalPrize += superPrize;
            userResponseForNextGame = confirm(`Congratulation! Your prize is: ${superPrize}$ Do you want to continue?`);
            nextGame();
        } else {
            userResponse = +prompt(`
             Enter a number from 1 to ${firstNumberForInterval}
             Attempts left: ${attempts -= 1}
             Total prize: ${totalPrize}$
             Possible prize on current attempts: ${middlePrize}$`);
            if (userResponse === guessedNumber) {
                totalPrize += middlePrize;
                userResponseForNextGame = confirm(`Congratulation! Your prize is: ${middlePrize}$ Do you want to continue?`);
                nextGame();
            } else {
                userResponse = +prompt(`
                 Enter a number from 1 to ${firstNumberForInterval}
                 Attempts left: ${attempts -= 1}
                 Total prize: ${totalPrize}$
                 Possible prize on current attempts: ${lastPrize}$`);
                if (userResponse === guessedNumber) {
                    totalPrize += lastPrize;
                    userResponseForNextGame = confirm(`Congratulation! Your prize is: ${lastPrize}$ Do you want to continue?`);
                    nextGame();
                } else {
                    alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
                }
            }
        }
    } else {
        alert("You did not become a millionaire, but can.");
    }
}

function nextGame() {
    if (userResponseForNextGame) {
        newGame(true, 2, [20, 10, 5]);
    } else if (userResponseForNextGame === null) {
        newGame();
    } else {
        alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
    }
}

nextGame();
