
function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  //Tranforms the argumntes of arr into a proper array.
  
  for (i=0; i<arr.length; i++){
    //Seeks all the elements of arr
    for (j=0; j < args.length; j++) {
      //Seeks all the elements of args
      if ( arr[i] === args[j] ) {
        //if the elements of arr match the elements of args
        delete arr[i];
        //Destroy the element from arr
      }
    }   
  }
  return arr.filter(Boolean);
  //return arr with elements Sought and destroied
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);