import express from 'express';
import jwt from 'jsonwebtoken';
import {homePage, registerPage, loginPage, categoriesListPage, categoryPage, transactionsListPage, transactionForm} from '../controllers/index';
import { loginUserAPI, registerUserAPI } from '../controllers/user';
import {allTransactionsAPI, oneTransactionAPI, createTransactionAPI, updateTransactionAPI, deleteTransactionAPI} from '../controllers/transaction';
import {allCategoriesAPI, oneCategoryAPI, createCategoriesAPI, updateCategoryAPI, deleteCategoryAPI} from '../controllers/category';
import {allLabelsAPI, oneLabelAPI, createLabelAPI, updateLabelAPI, deleteLabelAPI} from '../controllers/label';


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
    router.get('/register', registerPage);
    router.get('/login', loginPage);
    router.get('/categories', categoriesListPage);
    router.get('/transactions', transactionsListPage);
    router.get('/transaction', transactionForm);

    // Needs to have an id passed in to access specific resource TODO
    router.get('/category', categoryPage);
    

    // How do we want to do this? Going to / should take a user to the homepage if signed in
    // and login page if not signed in? TODO
    router.get('/', homePage);

    // API
    // TODO

    //TRANSACTIONS API
    router.get('/api/v1/transactions', allTransactionsAPI);
    router.get('/api/v1/transactions/:transactionID', oneTransactionAPI);
    router.post('/api/v1/transactions', createTransactionAPI);
    router.put('/api/v1/transactions/:transactionID', updateTransactionAPI);
    router.delete('/api/v1/transactions/:transactionID', deleteTransactionAPI);

    //CATEGORIES API
    router.get('/api/v1/categories', allCategoriesAPI)
    router.get('/api/v1/categories/:categoryID', oneCategoryAPI)
    router.post('/api/v1/categories', createCategoriesAPI)
    router.put('/api/v1/categories/:categoryID', updateCategoryAPI)
    router.delete('/api/v1/categories/:categoryID', deleteCategoryAPI)

    //LABELS API
    router.get('/api/labels', allLabelsAPI);
    router.get('/api/labels/:labelID', oneLabelAPI);
    router.post('/api/labels', createLabelAPI);
    router.put('/api/labels/:labelID', updateLabelAPI);
    router.delete('/api/labels/:labelID', deleteLabelAPI);


    // USERS API
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
