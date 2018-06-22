//Express dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const cors = require('cors');

const corsOptions = {
  origin: 'localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

//Body parser
const bodyParser = require('body-parser');

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/myapp/dist/myapp'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/myapp/dist/myapp/index.html');
});

app.listen(port, () => console.log('Started on port ' + port));
