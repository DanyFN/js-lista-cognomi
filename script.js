// . Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

//
var arrayCognomi = ["daultrey","joplin","hendrix","mercury","lennon","gilmur"];

var cognome = prompt("inserisci cognome");

var cognomePush = arrayCognomi.push(cognome);
console.log(arrayCognomi.sort());

document.writeln("<br>" + "<h3>per js il cognome si trova in posizione: </h3>"   + arrayCognomi.indexOf(cognome));

var posizioneUmana = arrayCognomi.indexOf(cognome) + 1;

document.writeln("<br>" + "<h3>per noi umani il cognome si trova in posizione: </h3>"   +  posizioneUmana);
