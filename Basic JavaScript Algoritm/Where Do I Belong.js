function getIndexToIns(arr, num) {
  // Find my place in this sorted array.  
  arr.push(num);
  //add element to my array
  var arrSorted = arr.sort(function(a, b) {
  return a - b;
});
  //sort my new array
                            
   return arrSorted.indexOf(num);
}
  //return the index position of the element added in my new string 
getIndexToIns([40, 60], 50);