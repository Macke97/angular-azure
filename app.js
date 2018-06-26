//Express dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = require('./config/database');
const mongoose = require('mongoose');

//Express session
const session = require('express-session');

//Connect-mongo
const MongoStore = require('connect-mongo')(session);

const path = require('path');


//mongoose connection
mongoose.connect(dbUrl.url);
const db = mongoose.connection;
db.once('open', () => {
  console.log('DB CONNECTED!');
});

//Cors related
const cors = require('cors');

const apiRouter = require('./api/index');

//Body parser
const bodyParser = require('body-parser');

app.disable('x-powered-by'); //Tells Express not showing the client the servers is running Express

app.use(require('prerender-node').set('prerenderToken', '6cJDnfypMOuMIIrudXKk')); //To enable pre-rendering for Angular App


app.use(cors());


app.use(express.static(path.join(__dirname, '/myapp/dist/myapp')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  // store: new MongoStore({mongooseConnection: mongoose.connection}),
  name: 'sessionId'
}));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/myapp/dist/myapp/index.html'));
});

app.listen(port, () => console.log('Started on port ' + port));
