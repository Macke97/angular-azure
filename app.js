//Express dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Express session
const session = require('express-session');

const path = require('path');

const cors = require('cors');

const corsOptions = {
  origin: 'localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

const apiRouter = require('./api/index');

//Body parser
const bodyParser = require('body-parser');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));

app.use(cors(corsOptions));

app.use(express.static('./myapp/dist/myapp'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/myapp/dist/myapp/index.html'));
});

app.listen(port, () => console.log('Started on port ' + port));
