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

// 6kyu
	// Simple Fun #258: Is Divisible By 6
	  function isDivisibleBy6(s) {
		var num = [];                //an array with all possible s instead of one s with *
		var divi = [];               //an array with all even s possibilities
	  	var divi2 = [];              //an array with all numbers divisible by 6
		var next = [];               //single array of divi[0]
	  	var next1 = [];              //single array of divi[1]
	  	var next2 = [];              //divi[2]
	  	var next3 = [];              //divi[3]
	  	var next4 = [];              //divi[4]
	  	var next5 = [];              //divi[5]
	  	var next6 = [];              //divi[6]
	  	var next7 = [];              //divi[7]
	  	var next8 = [];              //divi[8]
	  	var next9 = [];              //divi[9]
	  	var follow = 0;              //sum of divi[0] digits
	  	var follow1 = 0;             //sum of divi[1] digits
	  	var follow2 = 0;             //divi[2]
	  	var follow3 = 0;             //divi[3]
	  	var follow4 = 0;             //divi[4]
	  	var follow5 = 0;             //divi[5]
	  	var follow6 = 0;             //divi[6]
	  	var follow7 = 0;             //divi[7]
	  	var follow8 = 0;             //divi[8]
	  	var follow9 = 0;             //divi[9]
		for(i=0;i<10;i++){
		  num.push(s.replace(/\*/g, [i]));
		}
		for(j=0;j<num.length;j++){
		  if((num[j].toString().substring((num[j].length)-1,num[j].length))%2==0){
		    divi.push(num[j]);
		  }    
		}
	  if(divi.length>0){
	    for(k=0;k<divi[0].length;k++){
	      next.push((divi[0]).charAt(k));
	    }
	    for(kk=0;kk<next.length;kk++){
	    follow += parseInt(next[kk]);
	    }
	    if(follow%3==0){
	      divi2.push(divi[0]);
	    }
	  }
	  if(divi.length>1){
	    for(l=0;l<divi[1].length;l++){
	      next1.push((divi[1]).charAt(l));
	    }
	    for(ll=0;ll<next1.length;ll++){
	    follow1 += parseInt(next1[ll]);
	    }
	    if(follow1%3==0){
	      divi2.push(divi[1]);
	    }
	  }
	  if(divi.length>2){
	    for(m=0;m<divi[2].length;m++){
	      next2.push((divi[2]).charAt(m));
	    }
	    for(mm=0;mm<next2.length;mm++){
	    follow2 += parseInt(next2[mm]);
	    }
	    if(follow2%3==0){
	      divi2.push(divi[2]);
	    }
	  }
	  if(divi.length>3){
	    for(n=0;n<divi[3].length;n++){
	      next3.push((divi[3]).charAt(n));
	    }
	    for(nn=0;nn<next3.length;nn++){
	    follow3 += parseInt(next3[nn]);
	    }
	    if(follow3%3==0){
	      divi2.push(divi[3]);
	    }
	  }
	  if(divi.length>4){
	    for(m=0;m<divi[4].length;m++){
	      next4.push((divi[4]).charAt(m));
	    }
	    for(mm=0;mm<next4.length;mm++){
	    follow4 += parseInt(next4[mm]);
	    }
	    if(follow4%3==0){
	      divi2.push(divi[4]);
	    }
	  }
	  if(divi.length>5){
	    for(n=0;n<divi[5].length;n++){
	      next5.push((divi[5]).charAt(n));
	    }
	    for(nn=0;nn<next5.length;nn++){
	    follow5 += parseInt(next5[nn]);
	    }
	    if(follow5%3==0){
	      divi2.push(divi[5]);
	    }
	  }
	  if(divi.length>6){
	    for(m=0;m<divi[6].length;m++){
	      next6.push((divi[6]).charAt(m));
	    }
	    for(mm=0;mm<next6.length;mm++){
	    follow6 += parseInt(next6[mm]);
	    }
	    if(follow6%3==0){
	      divi2.push(divi[6]);
	    }
	  }
	  if(divi.length>7){
	    for(n=0;n<divi[7].length;n++){
	      next7.push((divi[7]).charAt(n));
	    }
	    for(nn=0;nn<next7.length;nn++){
	    follow7 += parseInt(next7[nn]);
	    }
	    if(follow7%3==0){
	      divi2.push(divi[7]);
	    }
	  }
	  if(divi.length>8){
	    for(m=0;m<divi[8].length;m++){
	      next8.push((divi[8]).charAt(m));
	    }
	    for(mm=0;mm<next8.length;mm++){
	    follow8 += parseInt(next8[mm]);
	    }
	    if(follow8%3==0){
	      divi2.push(divi[8]);
	    }
	  }
	  if(divi.length>9){
	    for(n=0;n<divi[9].length;n++){
	      next9.push((divi[9]).charAt(n));
	    }
	    for(nn=0;nn<next9.length;nn++){
	    follow9 += parseInt(next9[nn]);
	    }
	    if(follow9%3==0){
	      divi2.push(divi[9]);
	    }
	  }
	  return divi2;
	}
	// other answers
	const isDivisibleBy6=s=>(r=>(r==1 ? [2,5,8] : r ? [1,4,7] : [0,3,6,9]).map(n=>s.replace(/\*/g,n)))([...s].reduce((a,b)=>b=='*' ? a : a+ +b,0)%3).filter(s=>!"13579".includes(s.slice(-1)));
	// other answers
	function isDivisibleBy6(s) {
	  if ( "13579".includes(s.slice(-1)) )
	    return [];
	  else {
	    const plus = (v,w) => v+w ;
	    const sum = [...s].map(Number).filter(Boolean).reduce(plus,0)%3;
	    if ( s.slice(-1)==="*" )
	      return [[0,6],[2,8],[4]][sum].map( v => s.replace( "*", String(v) ) );
	    else
	      return [[0,3,6,9],[2,5,8],[1,4,7]][sum].map( v => s.replace( "*", String(v) ) );
	  }
	}
	// end

	// #6 Matrices: How Many Matrices Do These Elements Produce?
	function factorial(n) {
	  if (n === 0) {
	    return 1;
	  }
	  return n * factorial(n - 1);
	}

	function countPerms(matrix) {
	    var amountDiffMatrices;
	    var mat = [];
	    var count = 1;
	    var ones = 0;
	    var twos = 0;
	    var threes = 0;
	    var fours = 0;
	    var fives = 0;
	    var sixes = 0;
	    var sevens = 0;
	    var eights = 0;
	    var nines = 0;
	    var zeros = 0;
	    for(i=0;i<matrix.length;i++){
	      for(j=0;j<matrix[i].length;j++){
	        mat.push(matrix[i][j]);
	      }
	    }
	    for(k=1;k<mat.length+1;k++){
	      count *= k;
	    }
	    for(k=0;k<mat.length;k++){
	      if(mat[k]==1){
	        ones += 1;
	      }
	      if(mat[k]==2){
	        twos += 1;
	      }
	      if(mat[k]==3){
	        threes += 1;
	      }
	      if(mat[k]==4){
	        fours += 1;
	      }
	      if(mat[k]==5){
	        fives += 1;
	      }
	      if(mat[k]==6){
	        sixes += 1;
	      }
	      if(mat[k]==7){
	        sevens += 1;
	      }
	      if(mat[k]==8){
	        eights += 1;
	      }
	      if(mat[k]==9){
	        nines += 1;
	      }
	      if(mat[k]==0){
	        zeros += 1;
	      }
	    }
	    return count/(factorial(ones)*factorial(twos)*factorial(threes)*factorial(fours)*factorial(fives)*factorial(sixes)*factorial(sevens)*factorial(eights)*factorial(nines)*factorial(zeros));
	}
	// other answer
	function countPerms(a) {
	  const fac = n => n ? n * fac(n-1) : 1 ;        // memoising isn't worth it
	  a = [].concat(...a);                           // 1D is enough and makes calculations simpler
	  const m = new Map( a.map( v => [ v, 0 ] ) );   // initialise unique values
	  for ( const k of a ) m.set( k, m.get(k) + 1 ); // count occurrences per value
	  var d = 1;                                     // multiplication neutral element for divisor
	  m.forEach( v => d *= fac(v) );                 // calculate product of factorials
	  return fac(a.length) / d;                      // calculate and return number of permutations
	}
	// end

	// Simple Fun #231: Kth Divisor
	function kthDivisor(n, k) {
	  var divisors = [];
	  var counter = 0;
	  if(n){
	    for(i=1; i<=n/4; i++){
	      if((n/i==Math.floor(n/i))&&(counter<k+1)){
	        counter += 1;
	        divisors.push(i);
	      }
	    }
	    if(n%3==0){
	      divisors.push(n/3);
	    }
	    if(n%2==0){
	      divisors.push(n/2);
	    }
	    divisors.push(n);
	  }
	  if(divisors[k-1]==undefined){
	    return -1;
	  }
	  return divisors[k-1];
	}
	// end

	// Fruit Machine
	function fruit(reels, spins){
	  var reel1 = [];
	  var reel2 = [];
	  var reel3 = [];
	  reel1.push(reels.toString().split(',')[0],reels.toString().split(',')[1],reels.toString().split(',')[2],reels.toString().split(',')[3],reels.toString().split(',')[4],reels.toString().split(',')[5],reels.toString().split(',')[6],reels.toString().split(',')[7],reels.toString().split(',')[8],reels.toString().split(',')[9]);
	  reel2.push(reels.toString().split(',')[10],reels.toString().split(',')[11],reels.toString().split(',')[12],reels.toString().split(',')[13],reels.toString().split(',')[14],reels.toString().split(',')[15],reels.toString().split(',')[16],reels.toString().split(',')[17],reels.toString().split(',')[18],reels.toString().split(',')[19]);
	  reel3.push(reels.toString().split(',')[20],reels.toString().split(',')[21],reels.toString().split(',')[22],reels.toString().split(',')[23],reels.toString().split(',')[24],reels.toString().split(',')[25],reels.toString().split(',')[26],reels.toString().split(',')[27],reels.toString().split(',')[28],reels.toString().split(',')[29]);
	  // giving each card a score
	  if(reel1[spins[0]]=="Wild"){
	    reel1[spins[0]] = 10;
	  }
	  if(reel2[spins[1]]=="Wild"){
	    reel2[spins[1]] = 10;
	  }
	  if(reel3[spins[2]]=="Wild"){
	    reel3[spins[2]] = 10;
	  }
	  if(reel1[spins[0]]=="Star"){
	    reel1[spins[0]] = 9;
	  }
	  if(reel2[spins[1]]=="Star"){
	    reel2[spins[1]] = 9;
	  }
	  if(reel3[spins[2]]=="Star"){
	    reel3[spins[2]] = 9;
	  }
	  if(reel1[spins[0]]=="Bell"){
	    reel1[spins[0]] = 8;
	  }
	  if(reel2[spins[1]]=="Bell"){
	    reel2[spins[1]] = 8;
	  }
	  if(reel3[spins[2]]=="Bell"){
	    reel3[spins[2]] = 8;
	  }
	  if(reel1[spins[0]]=="Shell"){
	    reel1[spins[0]] = 7;
	  }
	  if(reel2[spins[1]]=="Shell"){
	    reel2[spins[1]] = 7;
	  }
	  if(reel3[spins[2]]=="Shell"){
	    reel3[spins[2]] = 7;
	  }
	  if(reel1[spins[0]]=="Seven"){
	    reel1[spins[0]] = 6;
	  }
	  if(reel2[spins[1]]=="Seven"){
	    reel2[spins[1]] = 6;
	  }
	  if(reel3[spins[2]]=="Seven"){
	    reel3[spins[2]] = 6;
	  }
	  if(reel1[spins[0]]=="Cherry"){
	    reel1[spins[0]] = 5;
	  }
	  if(reel2[spins[1]]=="Cherry"){
	    reel2[spins[1]] = 5;
	  }
	  if(reel3[spins[2]]=="Cherry"){
	    reel3[spins[2]] = 5;
	  }
	  if(reel1[spins[0]]=="Bar"){
	    reel1[spins[0]] = 4;
	  }
	  if(reel2[spins[1]]=="Bar"){
	    reel2[spins[1]] = 4;
	  }
	  if(reel3[spins[2]]=="Bar"){
	    reel3[spins[2]] = 4;
	  }
	  if(reel1[spins[0]]=="King"){
	    reel1[spins[0]] = 3;
	  }
	  if(reel2[spins[1]]=="King"){
	    reel2[spins[1]] = 3;
	  }
	  if(reel3[spins[2]]=="King"){
	    reel3[spins[2]] = 3;
	  }
	  if(reel1[spins[0]]=="Queen"){
	    reel1[spins[0]] = 2;
	  }
	  if(reel2[spins[1]]=="Queen"){
	    reel2[spins[1]] = 2;
	  }
	  if(reel3[spins[2]]=="Queen"){
	    reel3[spins[2]] = 2;
	  }
	  if(reel1[spins[0]]=="Jack"){
	    reel1[spins[0]] = 1;
	  }
	  if(reel2[spins[1]]=="Jack"){
	    reel2[spins[1]] = 1;
	  }
	  if(reel3[spins[2]]=="Jack"){
	    reel3[spins[2]] = 1;
	  }
	  // getting score for all the same
	  if((reel1[spins[0]]==reel2[spins[1]])&&(reel2[spins[1]]==reel3[spins[2]])){
	    return 10*(reel1[spins[0]]);
	  }
    // 2 wilds
    var countW = 0;
    if(reel1[spins[0]]==10){
      countW += 1;
    }
    if(reel2[spins[1]]==10){
      countW += 1;
    }
    if(reel3[spins[2]]==10){
      countW += 1;
    }
    if(countW == 2){
      return 10;
    }
	  // getting score for 2 the same with and without a wild
	  else if((reel1[spins[0]]==reel2[spins[1]])||(reel1[spins[0]]==reel3[spins[2]])){
	    if((reel2[spins[1]]==10)||(reel3[spins[2]]==10)){
	      return (2*reel1[spins[0]]);
	    }
	    return (reel1[spins[0]]);
	  }
	  else if((reel3[spins[2]]==reel2[spins[1]])||(reel1[spins[0]]==reel3[spins[2]])){
	    if((reel2[spins[1]]==10)||(reel1[spins[0]]==10)){
	      return (2*reel3[spins[2]]);
	    }
	    return (reel3[spins[2]]);
	  }
	  else if((reel1[spins[0]]==reel2[spins[1]])||(reel2[spins[1]]==reel3[spins[2]])){
	    if((reel1[spins[0]]==10)||(reel3[spins[2]]==10)){
	      return (2*reel2[spins[1]]);
	    }
	    return (reel2[spins[1]]);
	  }
	  // getting score for no matches
	  return 0;
	}
	// other answer
	function fruit(reels, spins){
	  var r1 = [];
	  var r2 = [];
	  var r3 = [];
	  var s1 = [];
	  var s2 = [];
	  var s3 = [];
	  var countW = 0;
	  var countS = 0;
	  var countBe = 0;
	  var countSh = 0;
	  var countSe = 0;
	  var countC = 0;
	  var countBa = 0;
	  var countK = 0;
	  var countQ = 0;
	  var countJ = 0;
	  // sorting things out
	  r1.push(reels.toString().split(',')[0],reels.toString().split(',')[1],reels.toString().split(',')[2],reels.toString().split(',')[3],reels.toString().split(',')[4],reels.toString().split(',')[5],reels.toString().split(',')[6],reels.toString().split(',')[7],reels.toString().split(',')[8],reels.toString().split(',')[9]);
	  r2.push(reels.toString().split(',')[10],reels.toString().split(',')[11],reels.toString().split(',')[12],reels.toString().split(',')[13],reels.toString().split(',')[14],reels.toString().split(',')[15],reels.toString().split(',')[16],reels.toString().split(',')[17],reels.toString().split(',')[18],reels.toString().split(',')[19]);
	  r3.push(reels.toString().split(',')[20],reels.toString().split(',')[21],reels.toString().split(',')[22],reels.toString().split(',')[23],reels.toString().split(',')[24],reels.toString().split(',')[25],reels.toString().split(',')[26],reels.toString().split(',')[27],reels.toString().split(',')[28],reels.toString().split(',')[29]);
	  s1.push(spins[0]);
	  s2.push(spins[1]);
	  s3.push(spins[2]);
	  // counting number of each spun
	  if(r1[s1]=="Wild"){
	    countW += 1;
	  }
	  if(r2[s2]=="Wild"){
	    countW += 1;
	  }
	  if(r3[s3]=="Wild"){
	    countW += 1;
	  }
	  if(r1[s1]=="Star"){
	    countS += 1;
	  }
	  if(r2[s2]=="Star"){
	    countS += 1;
	  }
	  if(r3[s3]=="Star"){
	    countS += 1;
	  }
	  if(r1[s1]=="Bell"){
	    countBe += 1;
	  }
	  if(r2[s2]=="Bell"){
	    countBe += 1;
	  }
	  if(r3[s3]=="Bell"){
	    countBe += 1;
	  }
	  if(r1[s1]=="Shell"){
	    countSh += 1;
	  }
	  if(r2[s2]=="Shell"){
	    countSh += 1;
	  }
	  if(r3[s3]=="Shell"){
	    countSh += 1;
	  }
	  if(r1[s1]=="Seven"){
	    countSe += 1;
	  }
	  if(r2[s2]=="Seven"){
	    countSe += 1;
	  }
	  if(r3[s3]=="Seven"){
	    countSe += 1;
	  }
	  if(r1[s1]=="Cherry"){
	    countC += 1;
	  }
	  if(r2[s2]=="Cherry"){
	    countC += 1;
	  }
	  if(r3[s3]=="Cherry"){
	    countC += 1;
	  }
	  if(r1[s1]=="Bar"){
	    countBa += 1;
	  }
	  if(r2[s2]=="Bar"){
	    countBa += 1;
	  }
	  if(r3[s3]=="Bar"){
	    countBa += 1;
	  }
	  if(r1[s1]=="King"){
	    countK += 1;
	  }
	  if(r2[s2]=="King"){
	    countK += 1;
	  }
	  if(r3[s3]=="King"){
	    countK += 1;
	  }
	  if(r1[s1]=="Queen"){
	    countQ += 1;
	  }
	  if(r2[s2]=="Queen"){
	    countQ += 1;
	  }
	  if(r3[s3]=="Queen"){
	    countQ += 1;
	  }
	  if(r1[s1]=="Jack"){
	    countJ += 1;
	  }
	  if(r2[s2]=="Jack"){
	    countJ += 1;
	  }
	  if(r3[s3]=="Jack"){
	    countJ += 1;
	  }
	  // getting score
	  if(countW == 2){
	    return 10;
	  }
	  else if(countW == 3){
	    return 10*10;
	  }
	  if((countS == 2)&&(countW ==1)){
	    return 2*9;
	  }
	  else if(countS == 2){
	    return 9;
	  }
	  else if(countS == 3){
	    return 10*9;
	  }
	  if((countBe == 2)&&(countW ==1)){
	    return 2*8;
	  }
	  else if(countBe == 2){
	    return 8;
	  }
	  else if(countBe == 3){
	    return 10*8;
	  }
	  if((countSh == 2)&&(countW ==1)){
	    return 2*7;
	  }
	  else if(countSh == 2){
	    return 7;
	  }
	  else if(countSh == 3){
	    return 10*7;
	  }
	  if((countSe == 2)&&(countW ==1)){
	    return 2*6;
	  }
	  else if(countSe == 2){
	    return 6;
	  }
	  else if(countSe == 3){
	    return 10*6;
	  }
	  if((countC == 2)&&(countW ==1)){
	    return 2*5;
	  }
	  else if(countC == 2){
	    return 5;
	  }
	  else if(countC == 3){
	    return 10*5;
	  }
	  if((countBa == 2)&&(countW ==1)){
	    return 2*4;
	  }
	  else if(countBa == 2){
	    return 4;
	  }
	  else if(countBa == 3){
	    return 10*4;
	  }
	  if((countK == 2)&&(countW ==1)){
	    return 2*3;
	  }
	  else if(countK == 2){
	    return 3;
	  }
	  else if(countK == 3){
	    return 10*3;
	  }
	  if((countQ == 2)&&(countW ==1)){
	    return 2*2;
	  }
	  else if(countQ == 2){
	    return 2;
	  }
	  else if(countQ == 3){
	    return 10*2;
	  }
	  if((countJ == 2)&&(countW ==1)){
	    return 2*1;
	  }
	  else if(countJ == 2){
	    return 1;
	  }
	  else if(countJ == 3){
	    return 10*1;
	  }
	  return 0;
	}
	// other answer
	function fruit(reels, spins) {
	  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
	  
	  let [a, b, c] = reels
	    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
	    .sort((a, b) => a - b);

	  if (a === b && b === c)
	    return a * 10;
	    
	  if (a === b)
	    return c === 10 ? a * 2 : a;
	  
	  return b === c ? b : 0;
	}
	// end