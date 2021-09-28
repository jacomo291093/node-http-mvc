const Controller = require('../../src/utils/Controller');

const requestHandler = async (req, res) => {
  const { url } = req;
  const [host, route] = url.split('/');
  const response = await Controller(route)(req, res);
  if (response) {
    res.write(response);
  } else {
    res.write('404 - Page Not Found');
  }
  res.end();
};

module.exports = requestHandler;
