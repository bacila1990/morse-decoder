const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const characters = [];
  for (let i = 0; i < expr.length; i += 10) {
    characters.push(expr.substr(i, 10));
  }
  return characters.map((element) => {
    if (element === '**********') {
      return ' ';
    }
    let result = '';
    for (let i = 0; i < element.length; i += 1) {
      if (element[i] + element[i + 1] === '10') {
        result += '.';
      } else if (element[i] + element[i + 1] === '11') {
        i += 1;
        result += '-';
      }
    }
    return MORSE_TABLE[result];
  }).join('');
}

module.exports = {
    decode
}
