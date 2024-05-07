const green = "#40a02b";
const red = "#e64553";
const defaultColor = "";

roundsPlayed = 0;

function game(RPS) {
    function createPick() {
        const options = ["rock", "paper", "scissors"];
        const min = 0;
        const max = 2;
        let pickOption = Math.floor(Math.random() * (max - min + 1)) + min;

        return String(options[pickOption]);
    }

    function drawWinner(userPick, pcPick) {
        if (
            (userPick === "rock" && pcPick === "scissors") ||
            (userPick === "paper" && pcPick === "rock") ||
            (userPick === "scissors" && pcPick === "paper")
        ) {
            return true;
        } else if (userPick == pcPick) {
            return null;
        } else {
            return false;
        }
    }

    function rollGame(userPick) {
        pcPick = createPick();
        document.getElementById("pc-pick-window").innerHTML = pcPick;
        userWin = drawWinner(userPick, pcPick);
        if (userWin) {
            console.log("user wins");
            document.getElementById("user-pick-window").style.backgroundColor = green;
            document.getElementById("user-pick-window").style.color = "black";
            document.getElementById("pc-pick-window").style.backgroundColor = red;
        } else if (userWin == null) {
            console.log("draw");
        } else {
            console.log("pc wins");
            document.getElementById("pc-pick-window").style.backgroundColor = green;
            document.getElementById("pc-pick-window").style.color = "black";
            document.getElementById("user-pick-window").style.backgroundColor = red;
        }
        document.getElementById("user-pick-window").style.fontStyle = "normal";
        document.getElementById("pc-pick-window").style.fontStyle = "normal";
    }

    document.getElementById("pc-pick-window").style.backgroundColor = "";
    document.getElementById("user-pick-window").style.backgroundColor = "";
    document.getElementById("pc-pick-window").style.color = "";
    document.getElementById("user-pick-window").style.color = "";
    document.getElementById("user-pick-window").innerHTML = RPS;
    roundsPlayed++;
    document.getElementById("round-counter").innerHTML = roundsPlayed
    rollGame(RPS);
}

function clientPick(option) {
    game(option);
}
