const fs = require("fs")
fs.readFile("database.txt", "utf-8", function(err, data){
    console.log(data);
})
console.log("Hii there!!")