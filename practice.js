// inverting arrays
function invert(array) {
for (i=0; i<array.length; i++){
  array[i] *= (-1);
  }
   return array;
}

invert([0 , -32 , 66]);
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
}// end