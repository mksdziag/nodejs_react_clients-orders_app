const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const mongoConfig = require('./config/mongo.json');

const clientRoutes = require('./routes/clients');
const ordersRoutes = require('./routes/orders');
const clientsOrdersRoutes = require('./routes/clients-orders');

mongoose.set('useFindAndModify', false);
mongoose.connect(
  mongoConfig.databaseUrl,
  { useNewUrlParser: true },
  err => {
    if (err) return console.log({ message: 'Problem with MongoDB connection...', error: err });
    console.log('Succesfully connected to MongoDB database...');
  }
);

app.use(cors());
app.use(express.json());
app.use('/clients', clientRoutes);
app.use('/orders', ordersRoutes);
app.use('/clients-orders', clientsOrdersRoutes);
app.use('/', (req, res, next) =>
  res.status(404).send({ message: 'Bad request. Something is wrong with your request.' })
);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`App started sucesfully at port ${port}`));
