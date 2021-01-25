// function evenify(num) {
//   for (let i = 0; i < num.length; i++) {
//     const nums = num[i];
//     if (nums % 2 == 0) {
//       console.log(nums);
//     } else {
//       console.log(nums * 2);
//     }
//   }
// }
// var result = [34, 54, 34, 2, 4, 5, 13, 7];
// evenify(result);

// function multiply(numbers) {
//   var result;
//   if (numbers % 2 == 0) {
//     result = numbers;
//   } else {
//     result = numbers * 2;
//   }
//   return result;
// }
// function evenResult(arrayList) {
//   var result = [];
//   for (let i = 0; i < arrayList.length; i++) {
//     const num = arrayList[i];
//     var multiList = multiply(num);
//     result.push(multiList);
//   }
//   return result;
// }

// var list =[12,11,3,7,13,17,20,19,21];
// var output=evenResult(list);
// console.log(output);


// this function using for square root 
function multiply(numbers) {
    var result;
    if (numbers % 2 == 0) {
      result = numbers;
    } else {
      result = numbers * 2;
      result*=result;
    }
    return result;
  }
  function evenResult(arrayList) {
    var result = [];
    for (let i = 0; i < arrayList.length; i++) {
      const num = arrayList[i];
      var multiList = multiply(num);
      result.push(multiList);
    }
    return result;
  }
  
  var list =[5,3,4,7];
  var output=evenResult(list);
  console.log(output);