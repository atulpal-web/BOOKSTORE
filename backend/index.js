const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')
const { dbConnect } = require('./Config/db');
const app = express()
const PORT = process.env.PORT || 8000;


const BookRoute = require("./Route/Book.Route.js")
const UserRoute = require("./Route/User.Route.js")
const ContactRoute = require("./Route/Contact.Route.js")

dbConnect()

app.use(express.urlencoded({extended: true}))

// frontend or backend ke data ko sath me karne ke liye 
app.use(cors());

// json ke formmat me data bhejne ke liye 
app.use(express.json());


app.get('/', (req, res) => {
  res.send('BOOK STORE')
})

app.use("/book", BookRoute)
app.use("/users", UserRoute)
app.use("/api", ContactRoute)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
