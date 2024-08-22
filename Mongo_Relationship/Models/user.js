const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
    .then(() => {
        console.log("Mongo Connection Open!!")
    })
    .catch((err) => {
        console.log('Mongo Connection Error!!')
        console.log(err)
    })

const userSchema = new Schema({
    first : String,
    last : String, 
    address : [
        {
            street : String,
            city : String,
            state : String,
            country : String
        }
    ]
})

const User = mongoose.model('User', userSchema);