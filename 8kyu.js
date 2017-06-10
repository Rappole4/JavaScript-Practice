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
	// Unfinished Loop - Bug Fixing #1
	function createArray(number){
	  var newArray = [];
	  
	  for(var counter = 1; counter <= number; counter++){
	    newArray.push(counter);
	  }  
	  return newArray;
	}
	// end

	// inverting arrays
	// WILL TAKE AN ARRAY SUCH AS [3,0,-2] AND RETURN THE ARRAY [-3,0,2]
	function invert(array) {
	  var next = [];
	  for (i=0; i<array.length; i++){
	    if (array[i] == -0){
	      next.push(0);
	    }
	    else{
	      next.push(array[i]*-1);
	    }
	  }
	   return next;
	}
	// other answer
	function invert(array) {
	   return array.map(n => n && -n)
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

	// Welcome!
	// make a database that takes a language and returns welcome in that language
	function greet(language) {
	  var lang = ['english','czech','danish','dutch','estonian','finnish','flemish','french','german','irish','italian','latvian','lithuanian','polish','spanish','swedish','welsh']
	  var welc = ['Welcome','Vitejte','Velkomst','Welkom','Tere tulemast','Tervetuloa','Welgekomen','Bienvenue','Willkommen','Failte','Benvenuto','Gaidits','Laukiamas','Witamy','Bienvenido','Valkommen','Croeso']
	  for(i=0;i<lang.length;i++){
	    if(language==lang[i]){
	      return welc[i];
	    }
	  }
	  return welc[0];
	}
	//other answer
	var database = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso'
		}

	function greet(language) {
	return database[language] || "Welcome";
	}
	// end

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
	
	// How old will I be in 2099?
	function  calculateAge(birth,year) {
	  var diff = year - birth;
	  var other = birth - year;
	  if(diff==1){
	    return ("You are "+diff+" year old.");
	  }
	  else if(other==1){
	    return ("You will be born in "+other+" year.");
	  }
	  else if(diff>0){
	    return ("You are "+diff+" years old.");
	  }
	  else if(diff<0){
	    return ("You will be born in "+other+" years.");
	  }
	  return ("You were born this very year!");
	}
	// other answer
	function  calculateAge(a,b) {
	  return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
	         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
	         `You were born this very year!`
	}
	// end