function filterFunc(arr, callback){
    let result=[];
    for(let element of arr){
        if(callback(element)){
            result.push(element);
        }
    }
    return result;
}

let arr=[10, 21, 30, 41, 50, 61];
let mapArr = filterFunc(arr, (number)=>{
    return (number%2==0);
});
console.log(mapArr);