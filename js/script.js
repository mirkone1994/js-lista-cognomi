/*1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/

var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var surname = prompt("Quale è il tuo cognome?");
var list = document.getElementById("list");
var position = document.getElementById("position")
listSurname.push(surname);
listSurname.sort();
list.innerHTML += listSurname;
position.innerHTML = "Il congome inserito è in posizione " + (listSurname.indexOf(surname) + 1);
