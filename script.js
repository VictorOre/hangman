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
// Mina variabler
let totalWordLength;
let correctGuesses = 0;
let prevWord = null;

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
  const d = new Date;
  startTime = d.getTime();
  if (randomWord) {
    for (let i = 0; i < randomWord.length; i++) {
      boxElements[i].remove();
  }
  }
  console.log('startgame');
  infoElement.innerHTML = '';
  guessNr = 0;
  correctGuesses = 0;
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
  const randomNum = Math.floor(Math.random() * (wordList.length - 1));
  randomWord = wordList[randomNum];

  if (prevWord == randomWord) {
    console.log('Word duplicate, rerun');
    selectRandomWord();
    return;
  }

  totalWordLength = randomWord.length;
  const wordBox = document.querySelector('#boxes');
  console.log('Word: ' + randomWord, randomWord.length)
  for (let i = 0; i < randomWord.length; i++) {
    const span = document.createElement('span');
    wordBox.appendChild(span);
  }
  boxElements = document.querySelectorAll('#boxes span');
  prevWord = randomWord;
  console.log(boxElements)
}

// --------------------------------------------------
// Kontrollera om bokstaven finns i ordet och skriv i så fall ut den.
// Om bokstaven ej finns, uppdateras bilden med galgen och gubben
// Om alla bokstäver är gissade eller om den sista bilden visades, avslutas spelet
function guessLetter(event) {
  // event är klickhändelsen från en bokstavsknapp
  //TODO:
  // Get letter and disable button.
  const guessedLetter = event.target.value;
  event.target.disabled = true;
  console.log('guessLetter', event.target.value);
  let found = false;

  for (let i = 0; i < randomWord.length; i++) {
    if (guessedLetter == randomWord[i]) {
      found = true;
      correctGuesses += 1;
      console.log(guessedLetter, 'in word!')
      boxElements[i].innerHTML = guessedLetter
      boxElements[i].classList.add('marked');
      console.log(boxElements[i]);
    } 
  }
  if (correctGuesses == totalWordLength) {
    endGame(false);
  }
  if (guessNr == 6) {
    endGame(true);
    return;
  }
  if (!found) {
      guessNr += 1;
      hangmanImage.src = ('img/h' + guessNr + '.png');
  }
}

// --------------------------------------------------
// Avsluta spelet genom att skriva ut ett meddelande och
// sedan aktivera startknappen och inaktivera bokstavsknapparna
function endGame(manHanged) {
  const d = new Date;
  const endTime = d.getTime();
  const playTime = (endTime - startTime) / 1000; // Endtime is always larger since its the time since 1970 in ms.
  if (manHanged) {
    // console.log('Ojdå! Gubben blev hängd. Rätt ord var ' + randomWord)
    const messageElement = document.createElement('p');
    messageElement.innerHTML = 'Ojdå! Gubben blev hängd. Rätt ord var ' + randomWord + ' Spelet tog: ' + playTime + ' sekunder!';
    infoElement.appendChild(messageElement);

  } else {
    console.log('Grattis du lyckades gissa rätt ord!');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = 'Grattis du lyckades gissa rätt ord! Spelet tog: ' + playTime + ' sekunder!';
    infoElement.appendChild(messageElement);
  }

  for (let i = 0; i < letterButtons.length; i++) {
      letterButtons[i].disabled = true;
  }
  // manHanged är true eller false
  //TODO:
}
