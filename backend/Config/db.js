const {default:mongoose} = require("mongoose");

function dbConnect () {
    mongoose.connect("mongodb+srv://palatul8141:atul123@atul.0srzgcf.mongodb.net/BOOK_STORE")
    .then(()=>{
        console.log("Db Connect Successfully ..❤️");
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {dbConnect};