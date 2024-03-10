


// CHAPTER PROJECT
// FRIEND CHECKER GAME
// let name = prompt("Insert a name, check if they are your friend: ");
// var friend;
// switch(name){
// 	case "Anders":
// 	case "Robart":
// 	case "Daud":
// 	case "Kalle":
// 		friend = true;
// 		break;
// 	default:
// 		friend = false;
// 		break;
// };
// if(friend){
// 	console.log(name + " is a friend.");
// } else{
// 	console.log(name + " is not a friend.");
// };


// CHAPTER PROJECT
// EVALUATING A NUMBER GAME
// let randNum = Number(Math.floor(Math.random() * 100));
// let num = Number(prompt("input a number, I will check it against: " + randNum));
// if(num > randNum){
// 	console.log("your number is greater than " + randNum);
// }else if(num === randNum){
// 	console.log("your number is equal to " + randNum);
// }else if(num < randNum){
// 	console.log("your number is lower than " + randNum);
// }else {
// 	console.log("what the...");
// };


// Exercise 4.5
// let prize = Number(prompt("select a number between 0 and 10"));
// let output = "My Selection: ";
// var prize_won;
// switch(prize){
// 	case 0:
// 		prize_won = "phone";
// 		break;
// 	case 4:
// 		prize_won = "vacation";
// 		break;
// 	case 9:
// 		prize_won = "PS5";
// 		break;
// 	default:
// 		console.log("sorry, no prize\n" + output + prize);
// 		break;
// };
// 
// if(prize_won !== undefined){
// 	console.log("congratz, you won a " + prize_won + "\n" + output + prize);
// };


// Exercise 4.4
// random number between 0 and 1
// let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
// randomNumber = Math.floor(randomNumber);
// let input = prompt("input some text");
// switch(randomNumber) {
// 	case 0:
// 		console.log(`${input}: you got case 0!`);
// 		break;
// 	case 1:
// 		console.log(`${input}: you got case 1!`);
// 		break;
// 	case 2:
// 		console.log(`${input}: you got case 2!`);
// 		break;
// 	case 3:
// 		console.log(`${input}: you got case 3!`);
// 		break;
// 	case 4:
// 		console.log(`${input}: you got case 4!`);
// 		break;
// 	case 5:
// 		console.log(`${input}: you got case 5!`);
// 		break;
// 	default:
// 		console.log(`your input: ${input}`);
// 		break;
// };


// Exercise 4.3
// let ID = false;
// ID === true ? console.log("accessed") : console.log("access denied");

// Exercise 4.2
//let age = prompt("Input age");
// age = Number(age);
// let message;

// if(age >= 21){
//	message = "you may purchase alcohol";
// } else if(age >= 19){
//	message = "you may enter, but not purchase alcohol";
// } else {
//	message = "you may not enter";
// };
// console.log(message);


// Exercise 4.1
// let val = true;
// let val1 = false;

// console.log(val);
// if(val){
//	console.log("running if statement");
// };
// if(!val1){
//	console.log("running second if statement");
//} else {
//	console.log("running else statement");
// };


//Company Product Catalog
// let inventory = [];

// let itemKeyboard = {
//	name: "Tofu",
//	model: "60",
//	cost: 650,
//	quantity: 34
// };

// let itemKeyboard0 = {
//	name: "Tofu",
//	model: "65",
//	cost: 700,
//	quantity: 19
// };

// let itemKeyboard1 = {
//	name: "Neo",
//	model: "65",
//	cost: 1200,
//	quantity: 15
// };

// inventory.push(itemKeyboard, itemKeyboard0, itemKeyboard1);
// console.log(inventory);
// let accessInventoryItem = inventory[2].quantity;
// console.log(accessInventoryItem);


// Chapter Projects
// Manipulating an Array
//const theList = [
//	'Laurence', 
//	'Svekis', 
//	true, 
//	35, 
//	null, 
//	undefined,
//	{
//		test: 'one',
//		score: 55
//	},
//	[
//		'one',
//		'two'
//	]];

// theList[0] = "FIRST";
// theList.splice(2, 8, "MIDDLE", "hello World", "LAST");
// console.log(theList);


// Exercise 3.5
// let people = {
//	friends: [],
// };

// let friend1 = {
//	name: "Robart",
//	lastName: "Andersen",
//	ID: 1
// };

// let friend2 = {
//	name: "Tina",
//	lastName: "Flodberg",
//	id: 2
// };

// let friend3 = {
//	name: "Daud",
//	lastName: "Bro",
// 	id: 3
// };

// people.friends.push(friend1, friend2, friend3);
// console.log(people);
