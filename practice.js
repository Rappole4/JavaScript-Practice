// Interview question
// Find the first 1,000 prime numbers.
// A prime number is a whole number greater than 1, whose only two whole-number factors are 1 and itself.     
function pri(n){
  prime = [];
  primes = [];
  for (var counter = 0; counter <= n; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        prime.push(counter);
    }
  }
  for(j=0;j<prime.length;j++){
    if(prime[j]!=0 && prime[j]!=1){
      primes.push(prime[j]);
    }
  }
  return primes;
}
pri(7919);//will get the first 1000 prime numbers

//8kyu
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

	// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
	function remove(s){
	  return s.replace(/!/g, '')+'!';
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

	// Convert boolean values to strings 'Yes' or 'No'
	function boolToWord( bool ){
	  if (bool==true){
	  return 'Yes'
	  }
	  else{
	  return 'No'
	  }
	}
	// other answer
	function boolToWord( bool ){
	  return bool ? 'Yes':'No';
	}
	// end

	// Simple Fun #1:Seats in Theater
	function seatsInTheater(nCols, nRows, col, row) {
	  return (nCols-col+1)*(nRows-row); 
	}
	// end

	// get character from ASCII Value
	function getChar(c){
	  return String.fromCharCode(c);
	}
	// end

	// Sum without highest and lowest number
	function sumArray(array) {
	  if ((array==[])||(array==null)||(array.lenth==1)){
	    return 0;
	  }
	  else{
	    var next = array.sort(function (a,b){return a-b});
	    if((next==[])||(next==null)||(next.length<3)){
	      return 0;
	    }
	    else{
	      var more = next.reduce(function (c,d){return c+d});
	      return (more - next[0])-next[next.length-1];
	    }
	  }
	}
	// end

	// Count of positives/sum of negatives
	function plus(a, b) {
	    return a + b;
	}

	function countPositivesSumNegatives(input) {
	  var pos = [];
	  var neg = [0];
	  var newNeg = [0];
	  var count = 0;
	  if((input==0)||(input==[])||(input==null)){
	    return [];
	  }
	  else{
	    for (i=0;i<input.length;i++){
	      if(input[i]>0){
	        pos.push(count+i);
	      }
	      if(input[i]<0){
	        neg.push(input[i]);
	          newNeg = neg.reduce(plus);
	      }
	    }
	    var length = [];
	      length.push(pos.length);
	    var both = length.concat(newNeg);
	    return both;
	  }
	}
	// end

	// How good are you really?
	function add(a,b){
	  return a+b;
	}

	function betterThanAverage(classPoints, yourPoints) {
	  sum=classPoints.reduce(add);
	  avg = sum/classPoints.length;
	  if((yourPoints==0)||(yourPoints<=avg)){
	    return false;
	  }
	  else{
	    return true;
	  }
	}
	// other answer
	function betterThanAverage(classPoints, yourPoints) {
	  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
	}
	// end

	// Find the Remainder
	function remainder(a, b){
	  if((a==0)||(b==0)){
	    return NaN;
	  }
	  else if(b>a){
	    return (b%a);
	  }
	  else if(a>=b){
	    return (a%b);
	  }
	}
	//end

//7kyu
	// Find all non-consecutive numbers
	function allNonConsecutive (arr) {
	  var next = [];
	  for (i=0; i<arr.length-1; i++){
	    if (arr[i]+1 !== arr[i+1]){
	    next.push({i:(i+1),n:arr[i+1]});
	    }
	  }
	  return next;
	}
	// end

	// Statistics 101:Coin Sampling
	function sample(coin) {
	  var h = 0;
	  for (i = 0; i < 131313; i++){ 
	    h += coin();
	  }
	  return h/131313;
	}
	// end

	// Square(n) Sum
	function add(a,b){
	  return a + b;
	}

	function squareSum(numbers){
	  var next = [];
	  for (i=0;i<numbers.length;i++){
	    next.push(numbers[i]*numbers[i]);
	  }
	  return next.reduce(add);
	}
	//end
	
	// Simple Fun#182:Happy"g"
	function gHappy(str) {
	  for (i = 0; i < str.length; i++){
	    if (str[i] == "g" && str[i-1] != "g" && str[i+1] != "g"){
	      return false;
	    }
	  }
	  return true;
	}
	// other answer
	const gHappy = str => !/([^g]|^)g([^g]|$)/.test(str)
	// other answer
	function gHappy(str) {
  		return !/(^|[^g])g($|[^g])/.test(str)
	}
	// end

	// Sum of odd numbers
	// took a number n and returned the sum of all odds
	// n = 1 = 1, n = 2 = 3+5, n = 3 = 7+9+11, n = 4 = 13+15+17+19, ect.
	function add(a,b){
	  return a + b;
	}
	function rowSumOddNumbers(n) {
	  var next = []
	  for(i=0;i<1000000;i++){
	    if(i%2==1){
	      next.push(i);
	    }
	  }
	  for(j=1;j<n+1;j++){
	  var arrays = [], size = j;
	    arrays.push(next.splice(0, size).reduce(add));
	  }
	  return parseInt(arrays);
	}
	// other answer
	function rowSumOddNumbers(n) {
	  return Math.pow(n, 3);
	}
	// end
	
	// Simple Fun #215:Properly Closed Bracket Word
	function closedBracketWord(word) {
	  var next = [];
	  var twentySeven = [];
	  var zero = [];
	  for(i=0;i<word.length;i++){
	    next.push(word[i].charCodeAt(0) - 96);
	  }
	  for(j=0;j<next.length;j++){
	    twentySeven.push(next[j]+next[(next.length-j)-1]);
	  }
	  for(k=0;k<twentySeven.length;k++){
	    if(twentySeven[k]%27==0){
	      zero.push(twentySeven[k]%27);
	    }
	  }
	  if(twentySeven.length==zero.length){
	    return true;
	  }
	  else{
	    return false;
	  }
	}
	// other answers
	function closedBracketWord(word) {
	  if (word.length&1) return false;
	  	for (var i=0;i<word.length>>1;i++) if(word.charCodeAt(i)+word.charCodeAt(word.length-i-1)!=219) return false;
	  return true
	}
	// end
	
	// Most digits
	// finds the integer(s) in an array with the most digits and returns the first of these integers
	function max(a,b){
	  return Math.max(a,b);
	}

	function findLongest(array){
	  var next = []
	  var index = []
	  for(i=0;i<array.length;i++){
	    next.push(array[i].toString().length);
	  }
	  for(j=0;j<next.length;j++){
	    if(next[j]==next.reduce(max)){
	      return array[j]; 
	    }
	  }
	}
	// other answer
	function findLongest(a) {
	  let m = Math.max(...a);
	  for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length ) return a[i];
	}
	// end

	// Simple Fun #223: Parameter Of Number
	// find the LCM between the sum and product of a number
	function gcd(a, b) {
	  return !b ? a : gcd(b, a % b);
	}

	function lcm(a, b) {
	  return (a * b) / gcd(a, b);   
	}

	function parameter(n) {
	  var number = n.toString();
	  var sum = 0;
	  var product = 1;
	  for (var i = 0; i < number.length; i++) {
	    sum += parseInt(number.charAt(i), 10);
	  }
	  for (var j = 0; j < number.length; j++) {
	    product *= parseInt(number.charAt(j), 10);
	  }
	  return lcm(sum,product);
	}
	// end

	// Vowel Count
	function getCount(str) {
	  var vowelsCount = 0;
	  for(i=0;i<str.length;i++){
	    if((str[i]==='a')||(str[i]==='e')||(str[i]==='i')||(str[i]==='o')||(str[i]==='u')){
	      vowelsCount += 1;
	    }
	  }
	  return vowelsCount;
	}
	// other answer
	function getCount(str) {
	  var vowelsCount = 0;
	  var vowels = ["a","e","i","o","u"];
	  for(var i = 0;i < str.length;i++){
	    for(var j=0;j<vowels.length;j++){
	      if(str[i] === vowels[j]){
	        vowelsCount++;
	      }
	    }
	  }
	  
	  return vowelsCount;
	}
	// other answer
	function getCount(str) {
	  return (str.match(/[aeiou]/ig)||[]).length;
	}
	// end

	// Jenny the youngest detective
	// use the 3 number array to pick out the 3 letters from a string to make the secret word
	function missingWord(nums, str) {
	  var stri = str.replace(/ /g,'');
	  var numbs = nums.sort(function (a,b){return a-b});
	    if(numbs[2]>stri.length){
	      return 'No mission today'
	    }
		  return (stri[numbs[0]]+stri[numbs[1]]+stri[numbs[2]]).toLowerCase();
	}
	// end

	// Simple Fun #253:Cool String
	function coolString(s) {
	  var i=0;
	  var character='';
	  if((s.match(/[ ]/))||(s.match(/[1234567890]/))){
	    return false;
	  }
	  while (i <= s.length){
	    if (s.charAt(i) == s.charAt(i).toUpperCase()&&s.charAt(i+1) == s.charAt(i+1).toUpperCase()&&s.charAt(i+1)!=''&&s.charAt(i+1)!=' ') {
	      return false;
	    }
	    if (s.charAt(i) == s.charAt(i).toLowerCase()&&s.charAt(i+1) == s.charAt(i+1).toLowerCase()&&s.charAt(i+1)!=''&&s.charAt(i+1)!=' ') {
	      return false;
	    }
	    i++;
	  }
	  if(s.match(/[abcdefghijklmnopqrstuvwxyz]/ig)){
	    return true;
	  }
	  return false;
	}
	// other answer
	function coolString(s) {
	  return !/[a-z]{2,}|[A-Z]{2,}|[^a-zA-Z]/.test(s)
	}
	// end