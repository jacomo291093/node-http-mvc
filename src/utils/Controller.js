const { join } = require('path');
const { existsSync } = require('fs');

const Controller = (route) => {
  let ControllerFilePath = join(__dirname, '../controllers', route);
  ControllerFilePath =  existsSync(`${ControllerFilePath}.js`)
    ? `${ControllerFilePath}.js`
    : existsSync(`${ControllerFilePath}/index.js`)
    ? `${ControllerFilePath}/index.js`
    : null;
  return ControllerFilePath ? require(ControllerFilePath) : async (req, res) => null;
};

module.exports = Controller;
