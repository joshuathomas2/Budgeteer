import express from 'express';
import jwt from 'jsonwebtoken';
import {homePage, registerPage, loginPage, categoriesListPage, categoryPage, transactionPage, transactionsListPage} from '../controllers/index';
import { loginUserAPI, registerUserAPI } from '../controllers/user';
import { APP_SECRET } from './vars';

let router = express.Router();

export function configureRoutes(app) {
    console.log('Configuring routes');

    app.all('*', (req, res, next) => {
        app.locals.signedIn = isSignedIn(req);
        app.locals.getCurrentUser = getCurrentUser(req);
        next();
    })

    // PAGES
    router.get('/registerPage', registerPage);
    router.get('/login', loginPage);
    router.get('/categories', categoriesListPage);
    router.get('/transactions', transactionsListPage);
    
    // Needs to have an id passed in to access specific resource TODO
    router.get('/category', categoryPage);
    router.get('/transaction', transactionPage);

    // Needs to be locked behind auth once done, sends user to login if not logged in TODO
    router.get('/', homePage);

    // API
    // TODO

    // USERS
    router.post('/api/v1/users/register', registerUserAPI);
    router.post('/api/v1/users/login', loginUserAPI);

    app.use('/', router);
}

function isSignedIn(req) {
    try {
        jwt.verify(req.cookies.token, APP_SECRET);
        return true;
    } catch (err) {
        return false;
    }
}

function requireSignIn(req, res, next) {
    if (isSignedIn(req)) {
        next();
    } else {
        res.status(401);
        res.end();
    }
}

export function getCurrentUser(req) {
    if (req.cookies.token) {
        return jwt.decode(req.cookies.token, APP_SECRET);
    } else {
        return null;
    }
}

export function getCurrentUserByToken(token) {
    if (token) {
        return jwt.decode(token, APP_SECRET);
    } else {
        return null;
    }
}
