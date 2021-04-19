import {connect} from './src/javascripts/config/db/connect';
import {configureRoutes} from './src/javascripts/config/routes';
import {strategy} from './src/javascripts/config/passport';
import passport from 'passport';
import { userData } from './src/javascripts/config/db/userData';
import { categoryData } from './src/javascripts/config/db/categoryData';
import { labelData } from './src/javascripts/config/db/labelData';
import { transactionData } from './src/javascripts/config/db/transactionData';
import { User } from './src/javascripts/models/User';
import { Category } from './src/javascripts/models/Category';
import { Label } from './src/javascripts/models/Label';
import { Transaction } from './src/javascripts/models/Transaction';

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

connect('mongodb+srv://budgeteer:koltenjoshuajaythan@cluster0.sv6ly.mongodb.net/budgeteer?retryWrites=true&w=majority');

export let app = express();

// Configure middleware
app.set('views', path.join(__dirname, 'src', 'javascripts', 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Authentication
passport.use(strategy);
app.use(passport.initialize());

//Routes
configureRoutes(app);

// Error handling
app.use(function(req, res, next) {
    next(createError(404));
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('layout', {error: err, status: err.status, content: 'error'});
})

// Web server
let http = require('http');
let server = http.createServer(app);

server.listen(process.env.PORT || '8080');

server.on('error', err => {
    throw err;
});

server.on('listening', () => {
    let address = server.address();
    let bind = typeof address === 'string' ? address : address.port;
    console.log(`Listening on ${bind}`);
});


User.find().exec((err, users) => {
    if (err) {
        console.log(err);
    } else {
        if (users.length == 0) {
            console.log('No users were found in the database, creating records now!');
            User.create(userData);
        }
    }
})

Category.find().exec((err, categories) => {
    if (err) {
        console.log(err);
    } else {
        if (categories.length == 0) {
            console.log('No categories were found in the database, creating records now!');
            Category.create(categoryData);
        }
    }
})

Label.find().exec((err, labels) => {
    if (err) {
        console.log(err);
    } else {
        if (labels.length == 0) {
            console.log('No labels were found in the database, creating records now!');
            Label.create(labelData);
        }
    }
})

Transaction.find().exec((err, transactions) => {
    if (err) {
        console.log(err);
    } else {
        if (transactions.length == 0) {
            console.log('No transactions were found in the database, creating records now!');
            Transaction.create(transactionData);
        }
    }
})

