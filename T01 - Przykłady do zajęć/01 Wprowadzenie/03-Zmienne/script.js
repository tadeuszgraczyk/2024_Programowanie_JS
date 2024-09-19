// Sposoby deklarowania zmiennych

let firstName = 'Janusz';
const lastName = 'Dolny';
let age = 30;

console.log(age);

// Konwencje nazewnictwa
// Tylko litery, cyfry, podkreślenia i znaki dolara
// Nie mogą zaczynać się od cyfry

// Formatowanie wielu słów
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Możemy ponownie przypisać zmienne `let`. Jeśli zmienisz `age` na `const`, otrzymasz błąd
age = 31;
console.log(age);

// Za pomocą let możemy zadeklarować wartość bez przypisywania wartości
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// Nie możemy ponownie przypisać zmiennej const
// x = 200 // Spowoduje to błąd

// Nadal możemy manipulować tablicami i obiektami za pomocą const

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// choć, jeśli pamiętamy testowanie konsoli, to można to napisać tak

console.table(arr)

const person = {
  name: 'Wtorek',
};
person.name = 'Janusz';
person.email = 'Janusz_wtorek@gmail.com';
console.log(person);

// Deklaruj wiele wartości jednocześnie
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
