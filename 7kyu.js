//7kyu
	// Partial Word Searching
	function wordSearch(query, seq){
	  var next = [];
	  for(i=0;i<seq.length;i++){
	    if((seq[i].toLowerCase()).includes(query.toLowerCase())){
	      next.push(seq[i]);
	    }
	  }
	  if(next[0]==undefined){
	    next.push('Empty');
	  }
	  return next;
	}
	// end
	
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
	
	// Sum of all the multiple of 3 or 5
	function findSum(n) {
	  var mul3 = 0;
	  var mul5 = 0;
	  for(i=1;i<n+1;i++){
	    if(i%3==0){
	      mul3 += i;
	    }
	    if((i%5==0)&&(i%3!==0)){
	      mul5 += i;
	    }
	  }
	  return mul3+mul5;
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

// Other 7kyu Solved

	// Count all the sheep on farm in the heights of New Zealand

	// Turn any word into a beef taco

	// Sectional Array Sort
