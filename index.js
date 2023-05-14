const db=require('./config/database');
// db();
const express = require('express');
const cookieParser = require('cookie-parser'); // parse cookie header and populate req.cookies
const bodyParser = require('body-parser'); // parses incoming request bodies (req.body)
const app = express();
const { PORT, DATABASE_URL, SESSION_SECRET_KEY } = process.env;
const expressLayouts = require('express-ejs-layouts');

// use express router
app.use('/', require('./routes'));

app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${PORT}`);
});
