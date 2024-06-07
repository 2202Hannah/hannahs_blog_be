const contents = require(`../endpoints.json`);

exports.getAllEndPoints = (request, response) => {
  return response.status(200).send({ message: contents });
};
