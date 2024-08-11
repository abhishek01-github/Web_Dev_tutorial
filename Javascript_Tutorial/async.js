async function fn(arr)
{
   for(let i=0;i<100000;i++)
       arr.push(i);
}

let arr=[];
fn(arr);
console.log(arr);