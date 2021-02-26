import { morse } from './detailed-english-to-morse.js';
import { english } from './detailed-morse-to-english.js';

export const translateEnglishToMorse = (input) => {
  //Stub
  console.log('translateEnglishToMorse');

  let translation = "";
  let errors = "";

  for (let index=0; index < input.length; index++) {
    const letter = morse(input.slice(index,index+1).toLowerCase());
    if (letter !== '*') {
      if (translation.length > 0) {
       translation=translation + "   " + letter ;
      } else {
        translation = letter;
      }
    } else {
      errors = errors + input.slice(index,index+1);
    }
  }
  
  return [translation, errors];
}


export const translateMorseToEnglish = (input) => {
  //Stub
  console.log('translateMorseToEnglish');

  // Morse characters should be seperated by spaces
    // 3 for letters
    // 7 for words

    // Look for spaces to split string before passing to english()
    // determine number of spaces
      // How strict are we?
      // Suggest 5 or less no action
      // 6 or more add space after letter

  const inputArr = input.split(" ");
  let spacesCount = 0;
  let translation = "";
  let errors = "";

  if (inputArr.len == 1 && inputArr[0] == "") {
    translation = "";
    errors = "Empty";
  } else {
  inputArr.forEach(morseLetter => {
    if (morseLetter == " " || morseLetter == "") {
      // It's a space, increment the counter
      spacesCount++;

    } else {
      // it's a character
      const letter = english(morseLetter.trim());
      if (spacesCount < 5) {
        // seperator, reset the counter
        spacesCount = 0;
      } else {
        if (letter == "*") {
        // Can't translate it
        errors = errors + '"'+ morseLetter + '"/';
        }
        // More than 5 spaces so insert a space and reset the counter
        translation = translation + " ";
        spacesCount = 0;
      }
      translation = translation + letter;
    }
  });
  return [translation,errors];
}
}
