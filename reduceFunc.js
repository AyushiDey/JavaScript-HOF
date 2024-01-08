function reduceFunc(arr, callback, initialVal){
    let accumulator = 0;
    let startVal = 0;
    if(initialVal!==undefined)
        accumulator=initialVal;
    else{
        accumulator = arr[0];
        startVal = 1;
    }
    for(let i = startVal; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

let arr = [10, 21, 30, 41, 50, 61];
let sum = reduceFunc(arr, (accumulator, current)=>{
    return accumulator+current;
}, 0);
console.log(sum);