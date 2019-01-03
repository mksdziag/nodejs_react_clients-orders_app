const { Client } = require('./models/client');
const { Order } = require('./models/order');
const config = require('./config/mongo.json');
const mongoose = require('mongoose');

const clientsdata = [
  { name: 'Mariuszek', surname: 'Pudzianowski' },
  { name: 'kazimierz', surname: 'Kolanko' },
  { name: 'Przemek', surname: 'Rosiński' },
  { name: 'Andrzej', surname: 'Teleska' },
  { name: 'Franciszek', surname: 'Góraj' },
  { name: 'Kamil', surname: 'Kowalski' },
  { name: 'Wiesław', surname: 'Nowak' },
  { name: 'Edward', surname: 'Pendo' },
];

async function seed() {
  await mongoose.connect(
    config.databaseUrl,
    { useNewUrlParser: true },
    error => {
      err => {
        if (err) return console.log({ message: 'Problem with MongoDB connection...', error: err });
        console.log('Succesfully connected to MongoDB database...');
      };
    }
  );

  await Client.deleteMany({});
  await Order.deleteMany({});

  await Client.insertMany(clientsdata);

  mongoose.disconnect();

  console.info('Database filling done successfully!');
}

seed();
