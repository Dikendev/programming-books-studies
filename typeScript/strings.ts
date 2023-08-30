let stringTest = "String to test";
let newText = stringTest.charAt(0).toLowerCase() + stringTest.slice(1);
// console.log(newText);
let charCode = stringTest.charCodeAt(1);
// console.log(charCode);

let text1 = "Hello",
	text2 = "World";
let concatenate = text1.concat(` ${text2}`);
// console.log(concatenate);

let indexOf = stringTest.indexOf("Test");
// console.log("indexOf", indexOf);

let re = /apples/gi;
let str = "Apples are round, and apples are juice";
let newstr = str.replace(re, "oranges");

let re2 = /(\w+)\s(\w+)/;
let str2 = "zara ali";
let newStr2 = str2.replace(re, "$2, $1");
console.log(newStr2);

let str3 = "Apples are round, and apples are juicy";
let srt3 = "Apples are round, and apples are juicy";
if (str.search(re) === -1) {
	console.log("Does not contains appels");
} else {
	console.log("Contains Apples");
}
