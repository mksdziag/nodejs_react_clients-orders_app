const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const clientRoutes = require('./routes/clients');
const ordersRoutes = require('./routes/orders');

mongoose.connect(
  'mongodb://localhost/appstract',
  { useNewUrlParser: true },
  err => {
    if (err) return console.log({ message: 'Problem with MongoDB connection...', error: err });
    console.log('Succesfully connected to MongoDB database...');
  }
);

app.use(express.json());
app.use('/clients', clientRoutes);
app.use('/orders', ordersRoutes);
app.use('/', (req, res, next) =>
  res.status(404).send({ message: 'Bad request. There is nothing here.' })
);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App started sucesfully at port ${port}`));
