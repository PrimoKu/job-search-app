const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDb = require('./config/dbConnection');
const engine = require('ejs-locals');
const cookieParser = require('cookie-parser');
const http = require('http');
const multer = require('multer');
const upload = multer();

require("dotenv").config();

connectDb();
const app = express();
const port = process.env.LocalHostPort;
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
  if (error.syscall !== 'listen') {
      throw error;
  }

  var bind = typeof port === 'string' ?
      'Pipe ' + port :
      'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
      case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
      default:
          throw error;
  }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log(bind);
    console.info('Listening on ' + port);
}

// view engine setup
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('trust proxy', true);
// app.use(expressLayouts);
// app.set('layout', 'dashboard');

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('12345678'));
app.use(upload.array());

app.use('/api/jobs', require("./routes/JobRoutes"));
app.use('/api/users', require("./routes/UserRoutes"));
app.use('/', require("./routes/DashboardRoutes"));