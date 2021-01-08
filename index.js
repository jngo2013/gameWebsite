const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();


// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);
require('./services/passport');

// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamewebsite',
 { useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useFindAndModify: false });

// Message informing user database has connected
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected to the database!")
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`App listening on port: ${PORT}!`);
});