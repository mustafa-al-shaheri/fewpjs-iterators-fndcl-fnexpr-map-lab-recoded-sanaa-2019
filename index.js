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


// const titleCased = function() {
//   return tutorials.map(function(item){
//     let array=item.split(" ")
//     let cap="";
//     array.map(function(item){
//       cap+=item[0].toUpperCase()+item.slice(1)+" ";
//     })
//     return cap.slice(0,cap.length-1);
//   })
// }
// console.log(titleCased());

// const titleCased =function () {
//   const tut= tutorials.map(item=>item.split(' ').map(item=>{
//   return item.charAt(0).toUpperCase() + item.substr(1)}).join(' '));
//  return tut;
// }


const titleCased=function(){
  const tut=tutorials.map(item=>item.split(" ").map(item=>{
    return item.charAt(0).toUpperCase() + item.substr(1)}).join(' '));
  return tut;
}
