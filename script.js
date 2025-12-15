/* Uppgift 1 */

// Globala konstanter och variabler
const wordList = [
  "BLOMMA",
  "LASTBIL",
  "SOPTUNNA",
  "KÖKSBORD",
  "RADIOAPPARAT",
  "VINTER",
  "SOMMAR",
  "DATORMUS",
  "LEJON",
  "ELEFANT",
  "JULTOMTE",
  "SKOGSHYDDA",
  "BILNUMMER",
  "BLYERTSPENNA",
  "SUDDGUMMI",
  "KLÄDSKÅP",
  "VEDSPIS",
  "LJUSSTAKE",
  "SKRIVBORD",
  "ELDGAFFEL",
  "STEKPANNA",
  "KASTRULL",
  "KAFFEBRYGGARE",
  "TALLRIK",
  "SOFFBORD",
  "TRASMATTA",
  "FLYGPLAN",
  "FLYGPLATS",
  "TANGENTBORD",
  "DATORSPEL",
  "WEBBPLATS",
  "TELEFON",
  "STJÄRNA",
  "KANELBULLE",
  "SEMLA",
  "ÄPPELPAJ",
  "BLÅBÄR",
  "LINGONSYLT",
  "TRAKTOR",
  "CYKELKEDJA",
  "BOKHYLLA",
  "BOKSTAV",
  "GRILLPLATS",
  "SOLSTOL",
  "BADPLATS",
  "SNÖGUBBE",
  "PARAPLY",
]; // Lista (array) med ord som ska väljas slumpmässigt

const startButton = document.querySelector("#start"); // button-element för startknappen
const infoElement = document.querySelector("#message"); // div-element för meddelanden
const letterButtons = document.querySelectorAll("#letterButtons button"); // Array med button-element för bokstavsknapparna
const hangmanImage = document.querySelector("#hangman"); // img-elementet för bilder på galgen och gubben
let guessNr; // Nummer för aktuell bild som visas (0-6)
let randomWord; // Textsträng med det ord som slumpmässigt väljs ur wordList
let boxElements; // Array med span-element för bokstäverna i ordet
let startTime; // Tid då spelet startas

// --------------------------------------------------
// Global setup

// add startGame to the startbutton as an eventlistener.
startButton.addEventListener('click', startGame);
startButton.disabled = false;
// Assing eventlistners to all letterbuttons and disable them.
for (let i = 0; i < letterButtons.length; i++) {
  letterButtons[i].disabled = true;
  letterButtons[i].addEventListener('click', guessLetter);
}


// TODO:

// --------------------------------------------------
// Initiera ett nytt spel. Visa första bilden (h0.png),
// sätt bildnummer till 0, inaktivera startknapp och aktivera bokstavsknappar.
function startGame() {
  //TODO:
  console.log('startgame');
  guessNr = 0
  hangmanImage.src = ('img/h' + guessNr + '.png');
  console.log(hangmanImage)
  // enable buttons
  for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].disabled = false;
  }
  selectRandomWord();
  
}

// --------------------------------------------------
// Ett ord väljs slumpmässigt. Visa en ruta för varje bokstav i ordet
// Ordet ska ej vara samma som föregående ord, om man spelar flera gånger
function selectRandomWord() {
  //TODO:
  randomWord = wordList[0];
  const wordBox = document.querySelector('#boxes');
  console.log('Word: ' + randomWord, randomWord.length)
  for (let i = 0; i < randomWord.length; i++) {
    const span = document.createElement('span');
    wordBox.appendChild(span);
    // boxElements.append(span);
  }
  boxElements = document.querySelectorAll('#boxes span');
  console.log(boxElements)
}

// --------------------------------------------------
// Kontrollera om bokstaven finns i ordet och skriv i så fall ut den.
// Om bokstaven ej finns, uppdateras bilden med galgen och gubben
// Om alla bokstäver är gissade eller om den sista bilden visades, avslutas spelet
function guessLetter(event) {
  // event är klickhändelsen från en bokstavsknapp
  //TODO:
  const guessedLetter = event.target.value;
  console.log('guessLetter', event.target.value);
}

// --------------------------------------------------
// Avsluta spelet genom att skriva ut ett meddelande och
// sedan aktivera startknappen och inaktivera bokstavsknapparna
function endGame(manHanged) {
  // manHanged är true eller false
  //TODO:
}
