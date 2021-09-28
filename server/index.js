const http = require('http');
const requestHandler = require("./router")
const PORT = 3001;
const httpServer = http.createServer(requestHandler);

httpServer.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
