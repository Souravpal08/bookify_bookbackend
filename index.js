const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

const mongoose = require('mongoose')
require('dotenv').config()


//middleware
app.use(express.json());
app.use(cors({
  origin :['http://localhost:5173','https://bookify-bookapp-theta.vercel.app'],
  credentials:true
}

));


//routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')




app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)



async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to MongoDB successfully');
}

main().catch(err => console.log(err));

// Moved outside `main()`
app.get('/', (req, res) => {
  res.send('Book server is running');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
