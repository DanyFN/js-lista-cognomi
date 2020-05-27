// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

// inizializzo array con i cognomi
var arrayCognomi = ["daultrey","joplin","hendrix","mercury","lennon","gilmur"];

// inserisco un prompt per generare un cognome
var cognome = prompt("inserisci cognome");

// dico al programma di reinserire il cognome se non si scrive nulla o si scrive un numero
while ((isNaN(parseInt(cognome))===false) || cognome.length == 0) {
  cognome = prompt("ERRORE!! Inserisci di nuovo il tuo cognome");
}

//pusho all'intenro dell'array il mio prompt(cognome inserito)
var cognomePush = arrayCognomi.push(cognome);

// ordino l'array alfabeticamente
document.writeln(arrayCognomi.sort());

// stampo a schermo la posizione del cognome inserito all'interno dell'array secondo js
document.writeln("<br>" + "<h4>per js il cognome si trova in posizione: </h4>"   + arrayCognomi.indexOf(cognome));

//inizializzo una variabile che permette di far partire l'array da 1 anzichè 0
var posizioneUmana = arrayCognomi.indexOf(cognome) + 1;

// stampo a schermo la posizione del cognome inserito all'interno dell'array secondo noi esseri umani
document.writeln("<br>" + "<h4>per noi umani il cognome si trova in posizione: </h4>"   +  posizioneUmana);
