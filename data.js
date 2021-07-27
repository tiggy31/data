function binarySearch(arr, item){
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false
    var arrayIndex = -1
    while( (first <= last) && !found){
        mid = Math.floor((first + last) / 2)
        if( arr[mid] == item){
            arrayIndex = mid
            found = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (found)
         return item
     else
         return false
 }
 
 function findSum(arr,value){
    arr.sort(function(a, b) {
         return a - b
     })
 var index;
  for(var j = 0; j<arr.length; j++){
    index = binarySearch(arr,(value-arr[j]))
    if(index!=false )
      return [arr[j],value-arr[j]]
  }
   return false;
 }
 
 
 console.log(findSum([1,2,3,4],5))
 console.log(findSum([4,3,2,1],9))