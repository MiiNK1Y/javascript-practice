function createPCPick(){

	const options = ["rock", "paper", "scissors"];

	const min = 0;
	const max = 2;

	let pcPickOption = Math.floor(Math.random() * (max - min + 1)) + min;

	return String(options[pcPickOption]);
}
