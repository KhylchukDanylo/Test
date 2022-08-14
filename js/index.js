// function makeAbbr(words) {
//   let a = [];
//   let b = [];
//   for (let i = 0; i < words.length; i += 1) {
//     a.push(words[i]);
//   }
//   b.push(a[0]);
//   for (let i = 0; i < a.length; i += 1) {
//     if (a[i] === ' ') {
//       b.push(a[i + 1]);
//     }
//   }
//   let c = b.join('');
//   c = c.toUpperCase();
//   console.log(c);
//   return c;
// }
// makeAbbr('national aeronautics space administration');
// makeAbbr('central processing unit');
// makeAbbr('simplified molecular input line entry specification');

// function delArr(a, b) {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//       arr[i] = b;
//     } else {
//       console.log('error');
//     }
//   }
//   console.log(arr);
//   if (arr.includes(a)) {
//     let g = arr.indexOf(a);
//     arr[g] = b;
//   } else {
//     console.log('error');
//   }
//   console.log(arr);
// }

// delArr(1, 9);
// delArr(2, 8);
// delArr(10, 1);
// delArr(-9, 24);

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(150, 0));

// function getExtremeElements(array) {
//   const arrStEnd = [];
//   const indxEndArr = array.length - 1;
//   arrStEnd.push(array[0], array[indxEndArr]);
//   console.log(arrStEnd);
//   return arrStEnd;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);

// function calculateEngravingPrice(message, pricePerWord) {
//   const arrMessage = message.split(' ');
//   const arrLengMes = arrMessage.length * pricePerWord;
//   return arrLengMes;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));

// function slugify(title) {
//   let slugs = title.split(' ');
//   slugs = slugs.join('-');
//   slugs = slugs.toLowerCase();
//   return slugs;
// }

// console.log(slugify('Arrays for begginers'));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function findLongestWord(string) {
//   const arrWord = string.split(' ');
//   let maxLengString = '';
//   let numberLengthString = 0;
//   for (let i = 0; i < arrWord.length; i++) {
//     const elmArr = arrWord[i];
//     const arrElm = elmArr.split('');
//     if (arrElm.length > numberLengthString) {
//       maxLengString = elmArr;
//       numberLengthString = arrElm.length;
//     }
//   }
//   return maxLengString;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// function makeStickers(detailsCount, robotPart) {
//   let a = [];
//   for (let i = 1; i <= detailsCount; i++) {
//     if (detailsCount !== 0) {
//       a.push(`${robotPart} detail #${i}`);
//     }
//   }
//   return a;
// }

// console.log(makeStickers(3, 'Body'));
// console.log(makeStickers(4, 'Head'));
// console.log(makeStickers(0, 'Foot'));

// function isSorted(boxNumbers) {
//   const a = true;

//   for (let i = 0; i < boxNumbers.length; i++) {
//     if (i + 1 === boxNumbers.length || boxNumbers.length === 1) {
//       return a;
//     } else if (boxNumbers[i + 1] >= boxNumbers[i]) {
//     } else {
//       return false;
//     }
//   }
//   return a;
// }
// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(locationisSorted([0, 1, 1, 1, 2]));
// console.log(isSorted([1, 2, 11]));
// console.log(isSorted([5]));
// console.log(isSorted([]));
// console.log(isSorted([0, 3, 1, 2, 2, 2]));
// console.log(isSorted([1, 11, 2]));

// function getLocation(coordinates, commands) {
//   let a = coordinates;
//   for (let i = 0; i < commands.length; i++) {
//     if (commands[i] === 'forward') {
//       a = [a[0], a[1] + 1];
//     } else if (commands[i] === 'back') {
//       a = [a[0], a[1] - 1];
//     } else if (commands[i] === 'right') {
//       a = [a[0] + 1, a[1]];
//     } else if (commands[i] === 'left') {
//       a = [a[0] - 1, a[1]];
//     }
//   }
//   return a;
// }

// console.log(getLocation([0, 0], ['forward', 'right']));
// console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));

// function getPlan(startProduction, numberOfMonths, percent) {
//   let a = startProduction;
//   const g = [];
//   for (let i = 0; i < numberOfMonths; i++) {
//     a = Math.floor(a + (a / 100) * percent);
//     g.push(a);
//   }
//   return g;
// }

// console.log(getPlan(10, 4, 30));
// console.log(getPlan(1000, 6, 20));

// function getSpeedStatistic(testResults) {
//   let maxSpeed = 0;
//   let minSpeed = 0;
//   let midlSpeed = 0;
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }
//   for (let i = 0; i < testResults.length; i++) {
//     if (testResults[i] >= maxSpeed) {
//       maxSpeed = testResults[i];
//     }
//   }
//   minSpeed = maxSpeed;

//   for (let i = 0; i < testResults.length; i++) {
//     if (testResults[i] <= minSpeed) {
//       minSpeed = testResults[i];
//     }
//     midlSpeed = midlSpeed + testResults[i];
//   }
//   midlSpeed = Math.floor(midlSpeed / testResults.length);
//   return [minSpeed, maxSpeed, midlSpeed];
// }
// console.log(getSpeedStatistic([]));
// console.log(getSpeedStatistic([10]));
// console.log(getSpeedStatistic([8, 9, 3, 12]));
// console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]));

// console.log(Array(1, 4, 5, 6));
// console.log(new Array(1, 4, 5, 6));
