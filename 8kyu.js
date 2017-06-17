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
	// end

	// remove string spaces
	// REMOVES ALL SPACES FROM A STRING SO "HI I'M ROB" IS RETURNED AS "HII'MROB"
	function noSpace(x){
	  return x.replace(/ /g,'')
	}
	// end

	// DuckDuckGoose
	// IMPORTANT class object lesson
	function duckDuckGoose(players, goose) {
	  var whole = [];
	  whole.push(players[(goose-1)%(players.length)]);
	  return whole[0].name;
	}
	// end

	// string cleaning
	// WILL REMOVE ALL NUMBERS FROM A STRING, SO "GREAT34 TO ME46ET 1Y2O3U" WILL RETURN "GREAT TO MEET YOU"
	function stringClean(s){
	   return s.replace(/[0-9]/g, '');
	}
	// end

	// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
	function remove(s){
	  return s.replace(/!/g, '')+'!';
	}
	// end

// Other 8kyu solved

	// Remove exclamation marks

	// Enumerable Magic #1 - True for All?

	// Rock Paper Scissors!

	// Simple multiplication

	// Keep Hydrated

	// Even or Odd

	// Find the first non-consecutive number

	// Dollars and Cents

	// To square(root) or not to square(root)

	// Number of People in the Bus

	// Volume of a Cuboid

	// Convert boolean values to strings 'Yes' or 'No'

	// Simple Fun #1:Seats in Theater

	// Get character from ASCII Value

	// Sum without highest and lowest number

	// Count of positives/sum of negatives

	// How good are you really?

	// Find the Remainder
	
	// How old will I be in 2099?

	// Parse nice int from char problem

	// Simple Fun #261: Whose Move

	// My head is at the wrong end!

	// Finish Guess the Number Game