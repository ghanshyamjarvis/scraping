const app = require('./src/app');
const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
  console.log('Server connected  on port ' + port);
});

server.timeout = 300000;
