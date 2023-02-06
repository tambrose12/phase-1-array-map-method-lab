const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = function(){
  let capWords = tutorials.map((str) => {
    const words = str.split(' ');
    let capitalizedWords = []
    words.forEach(element => {
      capitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length))
  })
  return capitalizedWords.join(' ');
})
  return capWords;
}

titleCased();

// const titleCased = (input) => {
//   const words = input.split(' ');
//   const capitalizedWords = [];
//   words.forEach(element => {
//     capitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
//   });
//   return capitalizedWords.join(' ');
  
// }

// const capitalize = tutorials.map(titleCased);
