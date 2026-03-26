const http = require("http");
const handler = require("../app");

let server;

beforeAll((done) => {
  server = http.createServer(handler).listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

test("returns Hello from Docker!", async () => {
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}`);
  const text = await res.text();

  expect(res.status).toBe(200);
  expect(text).toContain("Hello from Docker!");
});
