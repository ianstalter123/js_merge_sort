var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1,2],[3,4])).toEqual([1,2,3,4]);
  });
   it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });
    it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([3],[5])).toEqual([3,5]);
  });
     it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([6],[9])).toEqual([6,9]);
  });

});

describe('Merge Sort', function() {
  it('should sort two arrays of size 1', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
  });
   it('should sort two arrays of size 1', function() {
     expect(mergeSort.mergeSort([7,5])).toEqual([5,7]);
  });
    it('should sort two arrays of size 1', function() {
     expect(mergeSort.mergeSort([8,2])).toEqual([2,8]);
  });
});

