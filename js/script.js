/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto.*/


// 1. Utente sceglie pari o dispari
var pariDispari = prompt("inserisci pari o dispari");
console.log(pariDispari);

// 2. Utente inserisce un numero da 1 a 5
var numero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numero);

// 3. Generiamo un numero random per il computer
function getRandomNum (min, max) {
  return Math.floor(Math.random()*(max - min + 1)+ min);
}
// 4. Definisco entro quali numeri può scegliere casualmente
var random = getRandomNum (1, 5);
console.log(random);

// 5. Sommo i due numeri
var somma = 0;
somma = numero + random;
console.log(somma);

// 6. Stabilisco se la somma dei due numeri è pari o dispari
function isEven(numero){
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

var risultato = isEven(somma);
console.log(risultato);

// 7. Se è pari stampo "Hai vinto" altrimenti "Hai perso"
if (pariDispari == risultato) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
