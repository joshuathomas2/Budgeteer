import express from 'express';
import jwt from 'jsonwebtoken';
import {homePage, registerPage, loginPage, categoriesListPage, categoryPage, transactionsListPage, transactionForm, categoryForm, labelForm, errorPage} from '../controllers/index';
import { loginUserAPI, registerUserAPI, getCurrentUserIdAPI } from '../controllers/user';
import {allTransactionsByUserAPI, allTransactionsByCategoryAPI, oneTransactionAPI, createTransactionAPI, updateTransactionAPI, deleteTransactionAPI} from '../controllers/transaction';
import {allCategoriesByUserAPI, oneCategoryAPI, createCategoriesAPI, updateCategoryAPI, deleteCategoryAPI} from '../controllers/category';
import {allLabelsAPI, oneLabelAPI, createLabelAPI, updateLabelAPI, deleteLabelAPI, allLabelsByCategoryAPI, labelNamesByCategoryAPI} from '../controllers/label';


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
    router.get('/categories', requireSignIn, categoriesListPage);
    router.get('/transactions', requireSignIn, transactionsListPage);
    router.get('/transaction/form', requireSignIn, transactionForm);
    router.get('/category/form', requireSignIn, categoryForm);
    router.get('/label/form', requireSignIn, labelForm);
    router.get('/category', requireSignIn, categoryPage);
    router.get('/error', requireSignIn, errorPage);



    
    // How do we want to do this? Going to / should take a user to the homepage if signed in
    // and login page if not signed in? TODO
    router.get('/', requireSignIn, homePage);

    //TRANSACTIONS API
    router.get('/api/v1/transactions/user/:userID', allTransactionsByUserAPI);
    router.get('/api/v1/transactions/categories/:categoryID', allTransactionsByCategoryAPI);
    router.get('/api/v1/transactions/one/:transactionID', oneTransactionAPI);
    router.post('/api/v1/transactions', createTransactionAPI);
    router.put('/api/v1/transactions/:transactionID', updateTransactionAPI);
    router.delete('/api/v1/transactions/:transactionID', deleteTransactionAPI);

    //CATEGORIES API
    router.get('/api/v1/categories/user/:userID', allCategoriesByUserAPI)
    router.get('/api/v1/categories/one/:categoryID', oneCategoryAPI)
    router.post('/api/v1/categories', createCategoriesAPI)
    router.put('/api/v1/categories/:categoryID', updateCategoryAPI)
    router.delete('/api/v1/categories/:categoryID', deleteCategoryAPI)

    //LABELS API
    router.get('/api/v1/labels', allLabelsAPI);
    router.get('/api/v1/labels/category/:categoryID', allLabelsByCategoryAPI);
    router.get('/api/v1/labels/one/:labelID', oneLabelAPI);
    router.get('/api/v1/labels/name/:categoryID', labelNamesByCategoryAPI);
    router.post('/api/v1/labels', createLabelAPI);
    router.put('/api/v1/labels/:labelID', updateLabelAPI);
    router.delete('/api/v1/labels/:labelID', deleteLabelAPI);


    // USERS API
    router.post('/api/v1/users/register', registerUserAPI);
    router.post('/api/v1/users/login', loginUserAPI);
    router.get('/api/v1/users/getCurrentUser', getCurrentUserIdAPI);

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
        res.render('layout', {content: 'login'});
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
