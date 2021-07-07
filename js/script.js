/*1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/

var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var surname = prompt("Quale è il tuo cognome?");
var firstLetter = surname.charAt(0).toUpperCase();
var restOfSurname = surname.substring(1).toLocaleLowerCase();
surname = firstLetter + restOfSurname;
var list = document.getElementById("list");
var position = document.getElementById("position");
listSurname.push(surname);
listSurname.sort();
var listItems = "";
for(var i = 0; i < listSurname.length; i++) {
    listItems += "<li>" + listSurname[i] + "</li>";
}
list.innerHTML += listItems;
position.innerHTML = "Il congome inserito è in posizione " + (listSurname.indexOf(surname) + 1);
console.log(listSurname);