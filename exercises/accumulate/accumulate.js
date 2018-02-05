export function accumulate(arr, fn) {
   let resArr = [];
   for (let i = arr.length - 1; i >= 0; i--) {
     resArr.push(fn(arr[i]));
   }

   return resArr
}