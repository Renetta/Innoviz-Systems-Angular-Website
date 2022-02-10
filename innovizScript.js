const http = require("http");
const app = require("./innovizBackend/app")

const server = http.createServer(app);

const port = process.env.PORT || 8080;

app.set("port", port);
// app.use(
//   proxy("/api", {
//     target: "http://localhost:4200/",

//     headers: {
//       Connection: "keep-alive",
//     },
//   })
// );

server.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

// server.timeout = 120000;
