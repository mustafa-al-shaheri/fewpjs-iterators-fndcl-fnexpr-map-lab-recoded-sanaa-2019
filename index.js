let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let titleCased= (str) => str[0].toUpperCase() +
str.slice(1).toLowerCase();

let capitalizeWords = (str) => str.split('  ').map
(titleCased).join('  ');
  console.log(capitalizeWords(tutorials));

<<<<<<< HEAD
let map = tutorials.map(function titleCased(str){
  return str.toLowerCase().split(' ').map(function(chunk){
    return chunk.charAt(0).toUpperCase() + chunk.substring(1);
}).join(' ');
titleCased(tutorials);
})
=======
>>>>>>> 6723c59de3ac2d3e8de8efd979f90468ae6ccd05
