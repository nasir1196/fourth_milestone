function evenify(num) {
  for (let i = 0; i < num.length; i++) {
    const nums = num[i];
    if (nums % 2 == 0) {
      console.log(nums);
    } else {
      console.log(nums * 2);
    }
  }
}
var result = [34, 54, 34, 2, 4, 5, 13, 7];
evenify(result);


