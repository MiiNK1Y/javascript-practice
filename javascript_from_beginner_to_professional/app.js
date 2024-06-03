


// SELF-CHECK
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
    // htmlOutput = "Welcome, that is a user";
// } else {
    // htmlOutput = "Denied, not a user";
// }
// console.log(htmlOutput + ": " + userInput);


// SELF-CHECK
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder = "login";
// console.log(userOkay);


// SELF-CHECK
// const q = '1';
// switch (q) {
    // case '1':
        // answer = "one";
        // break;
    // case 1:
        // answer = 1;
        // break;
    // default:
        // answer = "not working";
// }
// console.log(answer);


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


// // Exercise 3.4
// let myCar = {
//     make: "porcshe",
//     model: "911",
//     distanceTraveled: 290.000,
//     color: "black",
//     forSale: false
// }
// let color = "red";
// myCar["color"] = color;
// console.log(myCar.color)
// myCar["forSale"] = true;
// console.log(myCar.make);
// console.log(myCar.forSale);


// Exercise 3.3
// let arr = [1, 2, 3];
// let multiArr = [arr, arr, arr];
// console.log(multiArr[1][1]);

// Exercise 3.2
// let arr = [];
// arr.push("Milk", "Bread", "Apples");
// console.log(`List 0 = ${arr}`);
// arr.splice(1, 1, "Bananas", "Eggs");
// console.log(`List 1 = ${arr}`);

// let lastElement = arr.pop();
// console.log(lastElement);

// let sortedList = arr.sort();
// console.log(sortedList);

// console.log(arr.indexOf("Milk"));

// arr.splice(1, 0, "Carrots", "Lettuce");
// console.log(arr);

// let newArr = ["Juice", "Pop"];
// let combinedArr = arr.concat(newArr, newArr)
// console.log(combinedArr)

// console.log(`Last index value = ${combinedArr.lastIndexOf("Pop")}`)


// let arr = ["Milk", "Bread", "apples"];
// console.log(arr.length);
// arr[1] = "Bananas";
// console.log(arr)

// console.log(true || false)

// let first = 5;
// let second = 10;
// first++;
// second--;
// let total = ++first + second;
// console.log(total)

// let total2 = 500 + 100 / 5 + total--;
// console.log(total2)

// let b = 3 + 4 * 2 / 8;
// console.log(b);

// let a = "hello";
// a = prompt("world");
// console.log(a);


// let a = "hello";
// a = "world";
// let b = `${a}`
// console.log(a);

// let height = 1.73;
// let kilos = 70;
// let BMI = kilos / (height ** 2);

// console.log(`BMI is ${BMI}`)

// let a = 421;
// let b = 765;
// let c = 8;

// a += b; 

// a /= c;

// c = (b % c);

// console.log(a);
// console.log(b);
//console.log(c);
// let num1 = prompt("insert lenght of adjacent: ");
// let num2 = prompt("insert lenght of opposite: ");
// let hypo = (num1 ** 2) + (num2 ** 2)
// let ans = Math.sqrt(hypo)

// console.log(`hypotenus = ${ans}`);

// let hypo1 = Math.sqrt(hypo)

// let age = 23;
// let myName = "Aleksander";
// let iCanCodeJavaScript = true;

// console.log(`Hellp, my name is ${myName}, i am ${age} years old and i can code Javascript: ${iCanCodeJavaScript}`)

// let variable1 = Symbol("string");
// let variable2 = Symbol("string2");

// console.log(variable1)
// console.log(variable2)

// let num = 10;
// let text = `Your number is ${num}`
// console.log(text)

// const b = prompt("Hi, how are you?");

// let math = Math.floor(Math.random() * 100);
// console.log(math);

// let a = 10; // value 10 set
// console.log(b); // printing value 'a' to console

/*
This file was made with the intention of learn JS.
....
WIP.......
*/
