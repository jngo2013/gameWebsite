const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(routes);
require('./services/passport');
// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamewebsite',
//mongoose.connect("mongodb+srv://User21:K973Mjs7DJPLVDU@dogweb.oqxs2.mongodb.net/gamewebsite?retryWrites=true&w=majority",
 { useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useFindAndModify: false });

app.listen(PORT);
