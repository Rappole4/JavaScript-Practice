// inverting arrays
function invert(array) {
for (i=0; i<array.length; i++){
  array[i] *= (-1);
  }
   return array;
}

invert([0 , -32 , 66]);
// end