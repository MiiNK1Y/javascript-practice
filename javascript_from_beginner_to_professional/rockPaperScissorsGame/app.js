function createPcPick() {
    const options = ["rock", "paper", "scissors"];
    const min = 0;
    const max = 2;
    let pcPickOption = Math.floor(Math.random() * (max - min + 1)) + min;

    return String(options[pcPickOption]);
}

function userWin(userPick, pcPick) {
    if (
        userPick === "rock" && pcPick === "scissors" ||
        userPick === "paper" && pcPick === "rock" ||
        userPick === "scissors" && pcPick === "paper"
    ) {
        return true;
    }
    else if (userPick == pcPick) {
        return null;
    }
    else {
        return false;
    }
}

function rollGame(userPick) {
    pcPick = createPcPick();

    console.log(`pc picks: ${pcPick}`); // log

    document.getElementById("pc-pick-window").innerHTML = pcPick;
    winner = userWin(userPick, pcPick);
    if (winner) {
        console.log("user wins");
    }
    else if (winner == null) {
        console.log("no winner, roll again.");
    }
    else {
        console.log("pc wins");
    }
}

function clientPick(option) {
    document.getElementById("user-pick-window").innerHTML = option;

    console.log(`user picks: ${option}`); // log

    rollGame(option);
}
