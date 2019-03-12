/* eslint-disable no-console */
const app = require('../app');

const port = 8888;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
