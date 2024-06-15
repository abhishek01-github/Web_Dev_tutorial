// shift the even and odd numbers to their relative array
const naturalNum = [1,2,3,4,5,6,7,8,9,10];
const evenNum = [];
const oddNum = [];
let i = 0;
while(naturalNum.length!=0){
    if(naturalNum[i]%2==0){
        evenNum.push(naturalNum[i]);
    } else {
        oddNum.push(naturalNum[i]);
    }
    naturalNum.shift();
}
console.log(`The natural number array after shifting : ${naturalNum}`);
console.log(`The odd number array after shifting : ${oddNum}`);
console.log(`The even number array after shifting : ${evenNum}`);