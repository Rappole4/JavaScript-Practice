// inverting arrays
function invert(array) {
for (i=0; i<array.length; i++){
  array[i] *= (-1);
    if (array[i] == -0){
    array[i] = 0;
    }
  }
   return array;
}
// end

// string cleaning
function stringClean(s){
   return s.replace(/[0-9]/g, '');
}
// end

// difference of volumes of cuboids
function find_difference(a, b) {
  var A = (a[0]*a[1]*a[2])
  var B = (b[0]*b[1]*b[2])
  if (A > B){
  return (A - B);
  }
  else {
  return (B - A);
  }
}
// end

// basic mathematical operations
function basicOp(operation, value1, value2)
{
  if (operation == '+'){
  return (value1 + value2);
  } else if (operation == '-'){
  return (value1 - value2);
  } else if (operation == '*'){
  return (value1 * value2);
  } else {
  return (value1 / value2);
  }
}
//end

// heads and legs
function animals(heads, legs){
  var Cows = ((legs/2)-heads);
  var Chickens = (heads - Cows);
  if ((heads < 0)||(legs < 0)){
  return 'No solutions';
  }
  else if ((Cows < 0)||(Chickens < 0)){
  return 'No solutions';
  }
  else if ((Cows % 1 !== 0)||(Chickens % 1 !== 0)){
  return 'No solutions';
  }
  else {
  return [Chickens, Cows];
  }
 }
// other answer
function animals(heads, legs){
  var Cows = ((legs/2)-heads);
  var Chickens = (heads - Cows);
  if ((legs < heads < 0)||(Cows < 0)||(Chickens < 0)||(Cows % 1 !== 0)){
  return 'No solutions';
  }
  else {
  return [Chickens, Cows];
  }
}
// end

// remove string spaces
function noSpace(x){
  return x.replace(/ /g,'')
}
//end

// Enumerable Magic #1 - True for All?
function all( arr, fun ) {
  for(i = 0; i < arr.length; i++) {
    if(!fun(arr[i])) {
      return false;
    }
  }
  return true;
}
// other answer
function all( arr, fun ){
  return arr.every(fun)
}
// end

// Rock Paper Scissors!
const rps = (p1, p2) => {
  if((p1 == 'rock')&&(p2 == 'scissors')){
  return 'Player 1 won!'
  }
  else if((p1 == 'scissors')&&(p2 == 'paper')){
  return 'Player 1 won!'
  }
  else if((p1 == 'paper')&&(p2 == 'rock')){
  return 'Player 1 won!'
  }
  else if (p1===p2){
  return 'Draw!'
  }
  else{
  return 'Player 2 won!'
  }
}
// other answer
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
// end

// Simple multiplication
function simpleMultiplication(d){
    if (d % 2 == 0){
     return d * 8
    }
    else{
     return d * 9
    }
}
// other answer
function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}
// other answer
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
// end

// Keep Hydrated
function litres(time) {
  return parseInt(time/2);
}
// other answer
function litres(time) {
  return Math.floor(time * 0.5);
}
// end

// Even or Odd
function even_or_odd(number) {
  if(number%2==0){
  return "Even"
  }
  else{
  return "Odd"
  }
}
// other answer
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
// end

// Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for (i=0; i<arr.length-1; i++){
    if (arr[i]+1 !== arr[i+1]){
    return arr[i+1];
    }
  }
  if('undefined'){
    return null;
  }
}
// end