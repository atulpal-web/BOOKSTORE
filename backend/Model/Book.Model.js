const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    Image:String,
    title:String
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book ;