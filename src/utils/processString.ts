export const processString = (currentString: string, newLetter: string) : string => {
	let result = currentString + newLetter;
  
	const regex = /(\w)\1{2,}/g;
	let match;
	while ((match = regex.exec(result)) !== null) {
	  const repeatedChar = match[1];
	  const repeatedLength = match[0].length;
	  const underscoreLength = Math.floor(repeatedLength / 3);
	  result = result.replace(new RegExp(repeatedChar + `{${repeatedLength}}`), '_'.repeat(underscoreLength));
	}
  
	return result;
  };