const app = require('./app');
const { port } = require('./config');

function main() {
  app.listen(port);
  console.log(`Server on port ${port}`);
}

main();
