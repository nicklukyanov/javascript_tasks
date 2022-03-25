const string = "Привет! как дела?";

const vowels = ["У","е","ы","а","о","э","ё","я","и",];

const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentletter = stringToFilter[i] .toLowerCase();

    if (vowels.indexOf(currentletter) != -1) {
      extractedVowels += currentletter;
    }
  }
  
  return extractedVowels;
}

console.log(getVowels(string));