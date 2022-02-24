//first getting the text want to check
var text = document.querySelector("h1").innerHTML;
let flag = 1;
// calculating its length
var length_of_text = text.length;
// dividing the length into two halves and check
// check every char from the first part with the last char from the second part and moving inside
for (var index = 0; index < Math.floor(length_of_text / 2); index++) {
  // check if first and last char are same
  // if it missed once then it changes the flag
  if (text[index] !== text[length_of_text - 1 - index]) {
    flag = 0;
    break;
  }
}
if (flag === 1) {
  document.querySelector("h2").innerHTML = "A palindrome";
} else {
  document.querySelector("h2").innerHTML = "Not a palindrome";
}
