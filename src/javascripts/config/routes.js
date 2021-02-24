import express from 'express';
import {indexPage} from '../controllers/index';

let router = express.Router();

export function configureRoutes(app) {
    // PAGES
    router.get('/', indexPage);

    // API
    // TODO

    // USERS
    // TODO

    app.use('/', router);
}