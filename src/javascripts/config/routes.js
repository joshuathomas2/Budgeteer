import express from 'express';
import {homePage, registerPage, loginPage, categoriesListPage, categoryPage, transactionPage, transactionsListPage} from '../controllers/index';

let router = express.Router();

export function configureRoutes(app) {
    console.log('Configuring routes');

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
    // TODO

    app.use('/', router);
}