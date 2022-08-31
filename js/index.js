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

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let i = 0; i < colors.length; i++) {
//   let a = colors[i];
//   hexColors.push(a.hex);
//   rgbColors.push(a.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValues = [];
//   for (const key of products) {
//     const keys = Object.keys(key);
//     const values = Object.values(key);

//     if (key.hasOwnProperty(propName)) {
//       for (let i = 0; i < keys.length; i++) {
//         if (keys[i] === propName) {
//           propValues.push(values[i]);
//         }
//       }
//     }
//   }
//   return propValues;
// }

// console.log(getAllPropValues('name'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price * key.quantity;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice('Radar'));

// function findMatches(arr, ...numbers) {
//   const matches = [];
//   for (const number of numbers) {
//     if (arr.includes(number)) {
//       matches.push(number);
//     }
//   }
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const indexOldBook = this.books.indexOf(oldName);
//     const newNameArr = this.books;
//     let a = newNameArr.splice(indexOldBook, 1);
//     a = newNameArr.splice(indexOldBook, 0, newName);
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       const index = this.potions.indexOf(potionName);
//       this.potions.splice(index, 1);
//     }
//   },
// };

// console.log(atTheOldToad.removePotion('Speed potion'));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     const nameNew = Object.values(newPotion);
//     for (let i = 0; i < potions.length; i++) {
//       const { name } = potions[i];
//       if (nameNew[0] === name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i++) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const a of this.potions) {
//       if (a.name === oldName) {
//         a.name = newName;
//         return this.potions;
//       }
//     }
//     return this.potions;
//   },
// };
// console.log(atTheOldToad);
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// const t = [5, 'Hello', 3, 'World'];
// const [a, d, f, y] = t;
// console.log(a);
// console.log(d, y);
// console.log(f);

// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
//   return;
// }

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
//   return;
// }

// console.log(registerGuest('Mango', greet));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (let i = 0; i < this.pizzas.length; i++) {
//       // console.log(this.pizzas[i], pizzaName);
//       if (this.pizzas[i] === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(pizzaName);
//   },
// };     fc
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(genre => genre.genres);

// console.log(genres);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, time) => {
//   const alltime = time.playtime / time.gamesPlayed;
//   return total + alltime;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates, `-----`, releaseDates, `===`, ascendingReleaseDates === releaseDates);
// console.log(alphabeticalAuthors, `-----`, authors, `===`, alphabeticalAuthors === authors);

class Storage {
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    // this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.items.includes(itemToRemove)) {
      const indexRemoveElem = this.indecOf(itemToRemove);
      this.splice(indexRemoveElem, 1);
    }
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
