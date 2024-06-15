const fs = require("fs")

function readTheDatabase(){
    return new Promise(function (resolve){
        fs.readFile("database.txt", "utf-8", function(err, data){
            resolve(data)
        });
    })
}

function onDone(data){
    console.log(data);
}

readTheDatabase().then(onDone);