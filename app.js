const http = require("http");

function handler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Docker!");
}

if (require.main === module) {
  http.createServer(handler).listen(8080, () => {
    console.log("Server listening on 8080");
  });
}

module.exports = handler;
