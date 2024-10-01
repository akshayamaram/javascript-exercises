const reverseString = function(str) {
  let reversedStr = str.split('').reverse().join('')
  console.log(reversedStr)
  return reversedStr
};

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
