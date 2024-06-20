let numbers =[1,2,3,4,4,5,5,6,6,7,9,11];
function filterArray(arr,callback){
    return arr.filter(callback);
}
function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
         return false;
    } 
    
}
let newArray = filterArray(numbers,isEven);

console.log("original array",":",numbers);

console.log(" filtered array",":",newArray);