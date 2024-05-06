function createPCPick() {
    const options = ["rock", "paper", "scissors"];
    const min = 0;
    const max = 2;
    let pcPickOption = Math.floor(Math.random() * (max - min + 1)) + min;

    return String(options[pcPickOption]);
}



function rollGame(userPick) {
    pcPick = createPCPick();
    document.getElementById("pc-pick-window").innerHTML = pcPick;
    switch (userPick) {
        case (userPick == pcPick):
            console.log("same pick, roll again");
            break;
        case (userPick == "scissors") && (pcPick == "rock"):
            console.log("PC chose rock, and wins!");
            break;
        default:
            console.log("undecided");
            break;
    }
}

function clientPick(pick) {
    document.getElementById("user-pick-window").innerHTML = pick;
    rollGame(pick);
}
