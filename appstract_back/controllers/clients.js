const { Client, validate } = require('../models/client');

const getClients = async (req, res, next) => {
  const clients = await Client.find();

  if (!clients) return res.status(404).send({ message: 'Therae are no users in the database.' });

  res.send(clients);
};

const getClient = async (req, res, next) => {
  const { id } = req.params;
  const client = await Client.findById(id);

  if (!client)
    return res
      .status(404)
      .send({ message: 'Therae are no client with the given id in the database.' });

  res.send(client);
};

const createClient = async (req, res, next) => {
  const { name, surname } = req.body;

  const { error } = validate({ name, surname });
  if (error) return res.status(400).send(error.details[0].message);

  const newClient = new Client({ name, surname });
  await newClient.save();

  if (!newClient) return res.status(500).send({ message: 'Something went wrong... Try again.' });

  res.status(201).send(newClient);
};

module.exports = {
  getClients,
  getClient,
  createClient,
};
