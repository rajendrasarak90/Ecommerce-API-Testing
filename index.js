
const express = require('express')
const PORT = process.env.PORT || 3000
const dotenv = require('dotenv')
const connectDB = require('./db/connect')
const products = require('./routes/products')
const notFound = require('./middleware/not-found')

// DB Connection 
require('./db/connect')

const app = express()

dotenv.config() 

// Middlewares
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('<a href="/products">Products List</a>');
  });
  
app.use('/products', products);  // products route
app.use(notFound)  // not found page middlware

app.listen(PORT, (err) => {
    if (err) {
        console.log(`There is an error: ${err}`)
        return;
    }

    console.log(`The Express Server is up and running on PORT: ${PORT}...`)
})

connectDB()