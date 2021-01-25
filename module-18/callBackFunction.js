function callBack(name, age, task) {
  console.log("Hello ", name);
  console.log("Your age : ", age);
  task();
}
// passing function as an argument/parameter
function drinkCoffee() {
  console.log("Drink Coffee");
}
function drinkTea() {
  console.log("Drink Tea");
}
callBack("Jalal Uddin", 23, drinkCoffee);
callBack("malal Uddin", 17, drinkTea);
