function addNumbers(num1,num2) {
    //when using arguments inside function no need any parameters in function;
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  return sum;
}
var result=addNumbers(2,3,4,5,6,7,8);
console.log(result);
