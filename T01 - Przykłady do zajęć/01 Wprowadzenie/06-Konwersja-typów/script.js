let amount = 'hello';

// Konwertuj ciąg na liczbę
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Konwertuj liczbę na ciąg
amount = amount.toString();
amount = String(amount);

// Konwertuj ciąg na liczbę dziesiętną
amount = parseFloat(amount);

// Konwertuj liczbę na wartość logiczną
amount = Boolean(amount);

// Sposoby na uzyskanie NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
