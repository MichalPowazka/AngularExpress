const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
// Import Routes

const usersRoute = require('./routes/users');
// const { format, dirname } = require('path');


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


app.use(cors({
    origin: "*",
    methods: ['GET','POST','PATCH','PUT','DELETE'],
    allowedHeaders: 'Contet-Type, Authorization, Origin, X-Requested-With, Accept'
}));

// Use Routes
const productsRoute = require('./routes/products');
app.use('/api/products', productsRoute);
// app.use('api/users',usersRoute);

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join( dirname,'public')));




module.exports = app;

