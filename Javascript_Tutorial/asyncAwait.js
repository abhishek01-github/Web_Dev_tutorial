const fs = require("fs")

function readData(){
    let d = new Promise(function (resolve){
        fs.readFile("database.txt", "utf-8", function (err, data){
            resolve(data)
        })
    });
    return d;
}

async function main(){
    const something = await readData();
    console.log(something)
}

main()
console.log("HI There!!")