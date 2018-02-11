var imiona = ["Paweł", "Krzysiek", "Kasia", "Nikola", "Kamil"];

//console.log( imiona[2] );

console.log(imiona);

imiona[5] = "Monika";
imiona[6] = "Marcin";

console.log(imiona);

//push dodaje element na koncu tablicy i z automatu przypisze kolejny

imiona.push("Mikołaj", "Dawid");
console.log(imiona);

//pop usuwa ostatni element tablicy

imiona.pop();
console.log(imiona);

// wstawianie elementu na początku tablicy
imiona.unshift("Kasia", "Michał");
console.log(imiona);

// usuwanie elementu z początku tablicy
imiona.shift();
console.log(imiona);
// spr ilosci elementów w tablicy
console.log(imiona.length);

//rozbijanie tablicy na ciąg tekstowy

var tablicaJakoTekst = imiona.join();
console.log(tablicaJakoTekst);

// odwrócenie elementów tablicy
var imionaReverse = imiona.reverse();
console.log(imionaReverse);

// sortowanie
var imionaSort = imiona.sort();
console.log(imionaSort);