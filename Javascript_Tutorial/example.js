function reverse(arr){
    if(arr.length == 1) 
        return arr;

    let num = arr.shift();
    reverse(arr);
    insert(num, arr);
}

function insert(num, arr){
    if(arr.length == 0){
        arr.unshift(num)
        return;
    }
    
    let n = arr.shift();
    if(n < num){
        insert(num, arr);
        arr.unshift(n);
    } else {
        arr.unshift(n)
        arr.unshift(num)
    }
}

let arr = [3, 2, 1, 5, 4]

reverse(arr)
console.log(arr.toString());