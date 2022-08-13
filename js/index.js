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
