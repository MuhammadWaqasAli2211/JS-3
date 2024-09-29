//REVERSE A STRING USING LOOP
//var userPrompt = prompt("Enter a value: ");
// var reversePrompt = userPrompt.split("").reverse().join("");
// console.log(reversePrompt);

//REVERSE A STRING USING JS METHODS
// var userPrompt = prompt("Enter a value: ");
// var reversePrompt = "";
// for (var i = userPrompt.length - 1; i >= 0; i--) {
//     reversePrompt += userPrompt[i];
// }
// alert(reversePrompt);
// alert("<==Welcome to Random Number Prediction Game==>");
// var anyNumber= Number(prompt("Enter any Number (0-10): "));

// var randomNumber = Math.round(Math.random()*10);

// if (anyNumber===randomNumber){
//     alert("Congratulations "+randomNumber+" is correct"+"\n"+"Reward: 7 Crore");
// }
// else{
//     alert("Correct Number is "+randomNumber+"\n"+"Better Luck Next Time");
// }




// var arr = ["a", "b", 1, 2, true, 3, "c", "d", false, "false", 4, 5];
// var strCounter = 0;
// var numCounter = 0;
// var boolCounter = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         strCounter++;
//     } else if (typeof arr[i] === "number") {
//         numCounter++;
//     } else {
//         boolCounter++;
//     }
// }
// console.log(`There are ${strCounter} strings are present in the array`);
// console.log(`There are ${numCounter} Numbers are present in the array`);
// console.log(`There are ${boolCounter} Boolean values are present in the array`);







var date = new Date();
console.log(date);

var day = date.getDay();
console.log(day);