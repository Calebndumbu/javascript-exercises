const palindromes = function (str) {
  const normStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = normStr.split("").reverse().join("");
  return normStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
