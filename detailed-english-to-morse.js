

export const morse = (letter) => {
  let translation;
  switch (letter) {
  case ' ':
    translation = '    ';
    break;
  case 'a':
    translation = '.-';
    break;
  case 'b':
    translation = '-...';
    break;
  case 'c':
    translation = '-.-.';
    break;
  case 'd':
    translation = '-..';
    break;
  case 'e':
    translation = '.';
    break;
  case 'f':
    translation = '..-.';
    break;
  case 'g':
    translation = '--.';
    break;
  case 'h':
    translation = '....';
    break;
  case 'i':
    translation = '..';
    break;
  case 'j':
    translation = '.---';
    break;
  case 'k':
    translation = '-.-';
    break;
  case 'l':
    translation = '.-..';
    break;
  case 'm':
    translation = '--';
    break;
  case 'n':
    translation = '-.';
    break;
  case 'o':
    translation = '---';
    break;
  case 'p':
    translation = '.--.';
      break;
  case 'q':
    translation = '--.-';
    break;
  case 'r':
    translation = '.-.';
    break;
  case 's':
    translation = '...';
    break;
  case 't':
    translation = '-';
    break;
  case 'u':
    translation = '..-';
    break;
  case 'v':
    translation = '...-';
    break;
  case 'w':
    translation = '.--';
    break;
  case 'x':
    translation = '-..-';
    break;
  case 'y':
    translation = '-.--';
    break;
  case 'z':
    translation = '--..';
    break;
  case '1':
    translation = '.----';
    break;
  case '2':
    translation = '..---';
    break;
  case '3':
    translation = '...--';
    break;
  case '4':
    translation = '....-';
    break;
  case '5':
    translation = '.....';
    break;
  case '6':
    translation = '-....';
    break;
  case '7':
    translation = '--...';
    break;
  case '8':
    translation = '---..';
    break;
  case '9':
    translation = '----.';
    break;
  case '0':
    translation = '-----';
    break;
  default:
    translation = '*';
    break;
  }
  return translation;
}

