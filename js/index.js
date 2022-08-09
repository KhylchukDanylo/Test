function makeAbbr(words) {
  let a = [];
  let b = [];
  for (let i = 0; i < words.length; i += 1) {
    a.push(words[i]);
  }
  b.push(a[0]);
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === ' ') {
      b.push(a[i + 1]);
    }
  }
  let c = b.join('');
  c = c.toUpperCase();
  console.log(c);
  return c;
}
makeAbbr('national aeronautics space administration');
makeAbbr('central processing unit');
makeAbbr('simplified molecular input line entry specification');
