const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

app.use('/api/v1/words', require('./controllers/words'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
