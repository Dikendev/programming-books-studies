let stringTest = "String to test";
let newText = stringTest.charAt(0).toLowerCase() + stringTest.slice(1);
// console.log(newText);
let charCode = stringTest.charCodeAt(1);
console.log(charCode);

let text1 = "Hello",
	text2 = "World";
let concatenate = text1.concat(` ${text2}`);
console.log(concatenate);

let indexOf = stringTest.indexOf("Test");
console.log("indexOf", indexOf);
