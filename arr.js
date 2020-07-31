const numToSeparate = ck;

const arrayOfDigits = Array.from(String(numToSeparate), Number);
const item = arrayOfDigits.pop();

document.getElementById('calvalue').value=arrayOfDigits;