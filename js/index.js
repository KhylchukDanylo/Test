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
