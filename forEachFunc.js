function customForEach(arr, callback){
    let result=[];
    for(let i = 0; i < arr.length; i++){
        let arrNew = callback(arr[i]);
        result.push(arrNew);
    }
    return result;
}

let arr = [10, 21, 30, 41, 50, 61];
arr = customForEach(arr, (num)=>{
    return num*2;
});
console.log(arr);