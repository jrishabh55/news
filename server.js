const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

const app = express();

// Parser for the post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', api);

app.get('/', (req, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));

