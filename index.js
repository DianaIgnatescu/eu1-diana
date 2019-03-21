const server = require('./api/server.js');

const PORT = process.env.PORT || 9000;
 console.log('hi');
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n'`);
});
