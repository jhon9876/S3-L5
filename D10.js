/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// const somma = (valore1, valore2) => valore1 + valore2;

// console.log(somma(1, 2));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
// const variabileRandom = Math.floor(Math.random() * 21);
// console.log(variabileRandom);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// const me = {
//   name: "Giovanni",
//   surname: "Iacono",
//   age: 26,
// };

// console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// delete me.age;
// console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
// me.skills = ["c++", "python", "html", "css", "javascript"];
// console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.push("typescript");
// console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
// me.skills.pop();
// console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

// const dice = function () {
//   const numeroRandom = Math.floor(Math.random() * 7 + 1);
//   return numeroRandom;
// };
// console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
// const whoIsBigger = () => {
//   const valore1 = 5;
//   const valore2 = 10;

//   if (valore1 > valore2) {
//     return valore1;
//   } else {
//     return valore2;
//   }
// };

// console.log(whoIsBigger());

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
// const splitMe = function (stringa) {
//   const arrayDiStringhe = stringa.split(" ");
//   return arrayDiStringhe;
// };
// console.log(splitMe("ciao mi chiamo Giovanni e ho 26 anni"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
// const deleteOne = function (stringa, booleano) {
//   if (booleano === true) {
//     return stringa.substring(1, stringa.length);
//   } else {
//     return stringa.substring(0, stringa.length - 1);
//   }
// };

// console.log(deleteOne("ciao", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// const isThisAnEmail = (stringa) => {
//   if (stringa.search("@") === -1) {
//     return false;
//   } else {
//     return true;
//   }
// };

// console.log(isThisAnEmail("provaEmail"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// const whatDayIsIt = function () {
//   const data = new Date();
//   const giorni = [
//     "Lunedi",
//     "Martedi",
//     "Mercoledi",
//     "Giovedi",
//     "Venerdi",
//     "Sabato",
//     "Domenica",
//   ];
//   const giornoOdierno = data.getDate();
//   let counter = 1;
//   for (let index = 0; index < giornoOdierno; index++) {
//     counter++;
//     if (counter === 7) {
//       counter = 0;
//     }
//   }
//   return giorni[counter];
// };
// console.log(`Il giorno odierno è: ${whatDayIsIt()}`);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
// const rollTheDices = function (numero) {
//   const arrayNumeriEstratti = [];
//   let sum = 0;
//   for (let i = 0; i < numero; i++) {
//     const numeroGenerato = dice();
//     arrayNumeriEstratti.push(numeroGenerato);
//     sum += numeroGenerato;
//   }
//   console.log(arrayNumeriEstratti);
//   const oggettoRitornato = {
//     sum: sum,
//     values: arrayNumeriEstratti,
//   };
//   return oggettoRitornato;
// };

// console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
// const howManyDays = function (data) {
//   const giornoPrecedente = data.getDate();
//   console.log(giornoPrecedente);
//   const DataAttuale = new Date();
//   const giornoAttuale = DataAttuale.getDate();
//   const giorniPassati = giornoAttuale - giornoPrecedente;
//   return giorniPassati;
// };

// const data = new Date(2024, 4, 10);
// const giorniPassati = howManyDays(data);
// console.log(giorniPassati);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// const isTodayMyBirthday = function () {
//   const DataCompleanno = new Date(2024, 1, 5);
//   console.log(DataCompleanno);
//   const giornoCompleanno = DataCompleanno.getDate();
//   // console.log(giornoCompleanno);
//   const meseCompleanno = DataCompleanno.getMonth();
//   // console.log(meseCompleanno);
//   const dataOdiera = new Date();
//   if (
//     giornoCompleanno === dataOdiera.getDate() &&
//     meseCompleanno === dataOdiera.getMonth()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// const deleteProp = function (stringa, oggetto) {
//   delete oggetto[stringa];
//   return oggetto;
// };
// const stringa = "nome";
// const oggetto = {
//   nome: "Giovanni",
//   cognome: "Iacono",
//   età: 26,
// };
// const nuovoOggetto = deleteProp(stringa, oggetto);
// console.log(nuovoOggetto);
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// const newestMovie = function (array) {
//   let anno = 0;
//   let nuovoOggetto = {};
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].Year > anno) {
//       anno = array[i].Year;
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].Year === anno) {
//       nuovoOggetto = { ...array[i] };
//     }
//   }
//   return nuovoOggetto;
// };

// console.log(newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
// const countMovies = (oggetto) => oggetto.length;

// console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
// */
// const onlyTheYears = movies.map((anno) => anno.Year);
// console.log(onlyTheYears);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
// const onlyInLastMillennium = movies.filter(
//   (oggetto) => oggetto.Year >= 1900 && oggetto.Year <= 1999
// );
// console.log(onlyInLastMillennium);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// const sumAllTheYears = function (array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum += Number(array[index].Year);
//   }
//   return sum;
// };

// console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// const searchByTitle = function (stringa, array) {
//   const new_array = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].Title === array[i].Title.IndexOf(stringa)) {
//       new_array.push(array[i]);
//     }
//   }
//   return new_array;
// };

// console.log(searchByTitle("Avengers", movies));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
// const selezionaContainer = function (event) {
//   const divElement = document.getElementById("container");
//   return divElement;
// };

//console.log(selezionaContainer());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
// const selezionaTd = function () {
//   const tdElement = document.querySelectorAll("td");
//   return tdElement;
// };
// const x = selezionaTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// for (let i = 0; i < x.length; i++) {
//   console.log(x[i].textContent);
// }
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// const coloreRosso = function () {
//   const aElement = document.getElementsByTagName("a");
//   console.log(aElement);
//   for (let i = 0; i < aElement.length; i++) {
//     aElement[i].classList.add("coloreRosso");
//   }
// };

//coloreRosso();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// const nuovoElemento = function () {
//   const ulElement = document.getElementById("myList");
//   console.log(ulElement);
//   const newLiElement = document.createElement("li");
//   newLiElement.innerText = "4";
//   ulElement.appendChild(newLiElement);

// };

// nuovoElemento();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// const svuotaLista = function () {
//   const ulElement = document.querySelectorAll("#myList li");
//   console.log(ulElement);
//   for (let i = 0; i < ulElement.length; i++) {
//     ulElement[i].innerText = "";
//   }
// };

// svuotaLista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// const addClass = function () {
//   const trElement = document.querySelectorAll("tr");
//   console.log(trElement);
//   for (let i = 0; i < trElement.length; i++) {
//     trElement[i].classList.add("test");
//   }
// };
// addClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
