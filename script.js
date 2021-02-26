import {translateMorseToEnglish, translateEnglishToMorse } from "./translator.js";



const translateText = (event) => {

  const labelInput = document.getElementById('labelInput');
  const inputInput = document.getElementById('inputInput');
  const inputTranslation = document.getElementById('inputTranslation');
  const labelError = document.getElementById('errMessage');
  
    // Get the input from the input box
  const inputLang = inputInput.value;
  console.log(`To be translated: ${inputLang}`);
  
  if (labelInput.innerHTML == 'English') {

    // English to Morse code
    // Call the translate function
    const translation = translateEnglishToMorse(inputLang.trim());
    inputTranslation.value = translation[0];
    if (translation[1] !== '') {
      labelError.style.visibility = 'visible';
      labelError.value = `Could not translate: ${translation[1]}`;
    } else {
      labelError.style.visibility = 'hidden';
      labelError.value = '';
    }

  } else {

    // Morse code to English
    // Call the translate function
    const translation = translateMorseToEnglish(inputLang.trim());
    inputTranslation.value = translation[0];
    if (translation[1] !== '') {
      labelError.style.visibility = 'visible';
      labelError.value = `Could not translate: ${translation[1]}`;
    } else {
      labelError.style.visibility = 'hidden';
      labelError.value = '';
    }
  }
}

const swap = (event) => {
  console.log(event);
  const labelInput = document.getElementById('labelInput');
  const labelTranslate = document.getElementById('labelTranslation');
  
  // Swap labels 
  // Also change page title
  if (labelInput.innerHTML == 'English') {
    labelInput.innerHTML = 'Morse code';
    labelTranslate.innerHTML = 'English';
    document.title = 'Morse code to English translator';
    document.getElementById('header').innerHTML = 'Morse code to English translator';
    document.getElementById('inputInput').value = '';
    document.getElementById('inputTranslation').value = '';
    document.getElementById('errMessage').value = '';
    document.getElementById('errMessage').style.visibility = 'hidden';
        
  } else {
    labelInput.innerHTML = 'English';
    labelTranslate.innerHTML = 'Morse code';
    document.title = 'English to Morse code translator';
    document.getElementById('header').innerHTML = 'English to Morse code translator';
    document.getElementById('inputInput').value = '';
    document.getElementById('inputTranslation').value = '';
    document.getElementById('errMessage').value = '';
    document.getElementById('errMessage').style.visibility = 'hidden';
  }
}



// Event handlers in here

document.getElementById('swapDiv').addEventListener('click', swap);
document.getElementById('butTranslate').addEventListener('click', translateText);
document.getElementById('inputInput').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('butTranslate').click();
  }
})
document.getElementById('inputInput').value = "";
document.getElementById('inputTranslation').value = "";