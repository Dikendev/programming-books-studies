function mergeAlternately(word1: string, word2: string): string {
	const lowerLengthArray: number = Math.min(word1.length, word2.length);
	let newArray: string[] = [];

	for (let i = 0; i < lowerLengthArray; i++) {
		newArray.push(word1[i], word2[i]);
	}

	if (word2.length > lowerLengthArray)
		newArray.push(word1.substring(lowerLengthArray));

	if (word2.length > lowerLengthArray)
		newArray.push(word2.substring(lowerLengthArray));

	return newArray.join("");
}

const word1 = "abc",
	word2 = "def";

console.log(mergeAlternately(word1, word2));
