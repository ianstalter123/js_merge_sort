
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right) {
 var res = [];
  var i = 0;
  var j = 0;
  while (i < left.length || j < right.length)
    {
      if(!left[i])
        {
         res.push(right[j]);
          j++; 
        }
      else if(!right[j])
        {
         res.push(left[i]);
          i++; 
        }
      else if(left[i] < right[j])
        {
          //console.log(i);
          res.push(left[i]);
          i++;
        }     
      else if(right[j] <= left[i])
        {
          console.log(j);
          res.push(right[j]);
          j++;
        }    
    }
  return res;


}

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
	if(arr.length < 2)
	{return arr};
	var mid = Math.floor(arr.length/2);	
  	var left = arr.slice(0,mid);
  	var right = arr.slice(mid,arr.length);
  	var SortedL = exports.mergeSort(left);
  	var SortedR = exports.mergeSort(right);
  	return exports.merge(SortedL,SortedR);

}

