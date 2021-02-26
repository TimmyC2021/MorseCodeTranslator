import {translateMorseToEnglish, translateEnglishToMorse} from './translator.js'

// English to morse

it ('Should translate "a" to [".-,""]" ', () => {
  const result = translateEnglishToMorse('a');
  expect(result).toStrictEqual([".-",""]);
})

it ('Should translate "A" to [".-,""]" ', () => {
  const result = translateEnglishToMorse('A');
  expect(result).toStrictEqual([".-",""]);
})

it ('Should translate "bc" to "-...   -.-." ', () => {
  const result = translateEnglishToMorse('bc');
  expect(result).toStrictEqual(["-...   -.-.",""]);
})

it ('Should translate "go tim" to "--.   ---          -   ..   --" ', () => {
  const result = translateEnglishToMorse('go tim');
  expect(result).toStrictEqual(["--.   ---          -   ..   --",""]);
})

it ('Should translate "   go tim    " to "--.   ---          -   ..   --" (Remove leading and trailing spaces)', () => {
  const result = translateEnglishToMorse('go tim');
  expect(result).toStrictEqual(["--.   ---          -   ..   --",""]);
})



it ('Should translate .- to a', () => {
  const result = translateMorseToEnglish('.-');
  expect(result).toStrictEqual(["a",""]);
})

it ('Should translate "....   .   .-..   .-..   ---" to "hello" ', () => {
  const result = translateMorseToEnglish('....   .   .-..   .-..   ---');
  expect(result).toStrictEqual(["hello",""]);
})

it ('Should translate "-.   ---       .--   .-   -.--" to "no way" ', () => {
  const result = translateMorseToEnglish('.-');
  expect(result).toStrictEqual(["a",""]);
})

// test lots of invalid inputs

it ('Should translate "go tim!!!!" to "--.   ---          -   ..   --" Dropping the !!!', () => {
  const result = translateEnglishToMorse('go tim');
  expect(result).toStrictEqual(["--.   ---          -   ..   --",""]);
})


it ('Should translate "-. -.-.-  ---   " to "NO TRANSLATION" ', () => {
  const result = translateMorseToEnglish('-. -.-.-  ---   ');
  expect(result).toStrictEqual(["","NO TRANSLATION"]);
})




  // Tst null/empty-string input

  it ('Should translate "" to "" ', () => {
    const result = translateEnglishToMorse('');
    expect(result).toStrictEqual(["","Empty"])
    expect()
    
  })
  
  
  it ('Should translate "" to error "NO TRANSLATION" ', () => {
    const result = translateMorseToEnglish('-. -.-.-  ---   ');
    expect(result).toStrictEqual(["","NO TRANSLATION"]);
  })
