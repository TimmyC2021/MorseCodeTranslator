

export const english = (code) => {
  let translation;
  switch (code) {
  case  '    ':
      translation = ' ';
      break;
    case  '.-':
      translation = 'a';
      break;
    case  '-...':
      translation = 'b';
      break;
    case  '-.-.':
      translation = 'c';
      break;
    case  '-..':
      translation = 'd';
      break;
    case  '.':
      translation = 'e';
      break;
    case  '..-.':
      translation = 'f';
      break;
    case  '--.':
      translation = 'g';
      break;
    case  '....':
      translation = 'h';
      break;
    case  '..':
      translation = 'i';
      break;
    case  '.---':
      translation = 'j';
      break;
    case  '-.-':
      translation = 'k';
      break;
    case  '.-..':
      translation = 'l';
      break;
    case  '--':
      translation = 'm';
      break;
    case  '-.':
      translation = 'n';
      break;
    case  '---':
      translation = 'o';
      break;
    case  '.--.':
      translation = 'p';
        break;
    case  '--.-':
      translation = 'q';
      break;
    case  '.-.':
      translation = 'r';
      break;
    case  '...':
      translation = 's';
      break;
    case  '-':
      translation = 't';
      break;
    case  '..-':
      translation = 'u';
      break;
    case  '...-':
      translation = 'v';
      break;
    case  '.--':
      translation = 'w';
      break;
    case  '-..-':
      translation = 'x';
      break;
    case  '-.--':
      translation = 'y';
      break;
    case  '--..':
      translation = 'z';
      break;
    case  '.----':
      translation = '1';
      break;
    case  '..---':
      translation = '2';
      break;
    case  '...--':
      translation = '3';
      break;
    case  '....-':
      translation = '4';
      break;
    case  '.....':
      translation = '5';
      break;
    case  '-....':
      translation = '6';
      break;
    case  '--...':
      translation = '7';
      break;
    case  '---..':
      translation = '8';
      break;
    case  '----.':
      translation = '9';
      break;
    case  '-----':
      translation = '0';
      break;
    default:
      translation = '*';
      break;
  }
  return translation;
}

