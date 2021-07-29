function findProduct(array){
let left = 1
let currentProduct
let result = []
for( let i = 0; i < array.length; i++){
    currentProduct = 1
   for(let j = i+1 ; j < array.length; j++){
       currentProduct = array[j] * currentProduct
   }

   result.push(currentProduct*left)
   left = left * array[i]
}

return result
}

console.log(findProduct([1,2,3]))