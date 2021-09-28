const { readFile } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');
const View = (path) => {
  let ViewFilePath = join(__dirname, '../views', path);
  ViewFilePath = existsSync(`${ViewFilePath}.html`)
    ? `${ViewFilePath}.html`
    : existsSync(`${ViewFilePath}/index.html`)
    ? `${ViewFilePath}/index.html`
    : null;
  return ViewFilePath ? readFile(ViewFilePath, 'utf8') : async (req, res) => null;
};

module.exports = View;
