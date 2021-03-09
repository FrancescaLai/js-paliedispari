var parola = prompt("Inserisci parola");

function palindromo(parolaPal){
  var parolaReverse = "";

  for (var i = parolaPal.length - 1; i >=0; i--) {
    parolaReverse += parolaPal[i];
    console.log(parolaReverse);
  }
  if (parolaReverse == parolaPal) {
    console.log("la parola è palindroma");
  } else {
    console.log("la parola non è palindroma")
  }
}

palindromo(parola);
