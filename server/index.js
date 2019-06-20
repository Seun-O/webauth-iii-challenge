const PORT = process.env.PORT || 3300;

server = require("./server");

server.listen(PORT, () => {
  console.log(`The Server is Listening on Port: ${PORT}`);
});
