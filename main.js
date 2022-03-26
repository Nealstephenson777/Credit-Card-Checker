const words = new URLSearchParams(window.location.search);
const num1 = words.get('ccnum');



 function isNumber(){
  if(isNaN(num1) || num1.length < 15){
    return 'The credit card number you have enterd is invalid. Please check the number and try again!';
  }
  const validateCred = cNum => {
  let ccNum = [...cNum];
  let len = ccNum.length;
  if(len % 2 === 0){
    ccNum = ccNum.map((ele, idx)=> idx % 2 === 0 ? ele * 2 : ele);
    ccNum = ccNum.map(ele => ele > 9? ele - 9 : ele);
    let total = ccNum.reduce((acc, ele) => acc += ele,0);
    return(total % 10 === 0 ? 'Unfortunately, The credit card number you have provided do met the valid credit card number requirements': '<h2>Congratulations!</h2><p>The credit card number you have provided has met the valid credit card number criterior<p>')
  } else {
    ccNum = ccNum.map((ele, idx)=> idx % 2 === 1 ? ele * 2 : ele)
    ccNum = ccNum.map(ele => ele > 9? ele - 9 : ele);
    let total = ccNum.reduce((acc, ele) => acc += ele,0);
     return(total % 10 === 0 ? 'Unfortunately, The credit card number you have provided do met the valid credit card number requirements': '<h2>Congratulations!</h2><p>The credit card number you have provided has met the valid credit card number criterior<p>')
  }
}
return validateCred(num1.split(''));
}


// Assigning the variables with values used in the story
const display = document.getElementById('screen');
// Populating the story element with the value of the story variable
display.innerHTML = isNumber();
