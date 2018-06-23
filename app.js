//Express dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = require('./config/database');

//Express session
const session = require('express-session');

const path = require('path');

const mongoose = require('mongoose');

//mongoose connection
mongoose.connect(process.env.MONGOSTRING || dbUrl.url);
const db = mongoose.connection;
db.once('open', () => {
  console.log('DB CONNECTED!');
});

//Cors related
const cors = require('cors');

const whitelist = ['https://angular-och-azure.azurewebsites.net', 'http://localhost:4200', 'http://localhost:3000'];

const corsOptions = {
  origin: function(origin, callback) {
    if(whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
      console.log('Allowed by CORS!');
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

const apiRouter = require('./api/index');

//Body parser
const bodyParser = require('body-parser');

app.use(require('prerender-node').set('prerenderToken', '6cJDnfypMOuMIIrudXKk')); //To enable pre-rendering for Angular App

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '/myapp/dist/myapp')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/myapp/dist/myapp/index.html'));
});

app.listen(port, () => console.log('Started on port ' + port));
