function mapFunc(arr, callback){
    let result = [];
    for(let element of arr){
        let newNum = callback(element);
        result.push(newNum);
    }
    return result;
}

let arr = [10, 20, 30, 40, 50, 60];
let mapArr = mapFunc(arr, (number)=>{
    return number*number;
});
