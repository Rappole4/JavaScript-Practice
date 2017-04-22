// inverting arrays
// WILL TAKE AN ARRAY SUCH AS [3,0,-2] AND RETURN THE ARRAY [-3,0,2]
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

// difference of volumes of cuboids
// WILL FIND THE DIFFERENCE IN THE VOLUMES OF TWO CUBOIDS, SO TWO ARRAYS [1,2,3] AND [2,4,6] WOULD HAVE VOLUMES 6 AND 48, AND THE FUNCTION WOULD RETURN THE DIFFERENCE BETWEEN THEM 42
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
// FINDS THE NUMBER OF COWS AND CHICKENS USING TOTAL NUMBER OF HEADS AND LEGS, SO 14 HEADS AND 48 LEGS WOULD RETURN 4 CHICKENS AND 10 COWS IN AN ARRAY [4,10]
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
// REMOVES ALL SPACES FROM A STRING SO "HI I'M ROB" IS RETURNED AS "HII'MROB"
function noSpace(x){
  return x.replace(/ /g,'')
}
//end

// string cleaning
// WILL REMOVE ALL NUMBERS FROM A STRING, SO "GREAT34 TO ME46ET 1Y2O3U" WILL RETURN "GREAT TO MEET YOU"
function stringClean(s){
   return s.replace(/[0-9]/g, '');
}
// end

// Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
// end

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

// Dollars and Cents
function formatMoney(amount){
  return '$'+amount.toFixed(2);
}
// end

// To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  var newarray = [];
  for(i=0;i<array.length;i++){
    var index = array[i];
    if(Math.sqrt(index)%1==0){
      newarray.push(Math.sqrt(index));
    }
    else{
      newarray.push(index*index);
    }
  } 
  return newarray;
}
// other answer
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}
// end

// Number of People in the Bus
function minus(a, b) {
    return a - b;
}

function getSum(total, num) {
    return total + num;
}

var number = function(busStops){
  for (i=0;i<busStops.length;i++){
    busStops[i] = busStops[i].reduce(minus);
  }
  return busStops.reduce(getSum);
}
// other answer
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
// other answer
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
//call using number([[5,0],[4,0],[0,3]]); or some other size array and numbers
// end

// Volume of a Cuboid
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length*width*height
  };

  return Kata;

})();
// other answer
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
};
// end