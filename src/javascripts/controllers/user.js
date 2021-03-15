// Controller for the various user functions TODO

import passport from 'passport';
import {User} from '../models/User';

export const registerUserAPI = (req, res, next) => {

    console.log(`user: ${req.body.first_name}`);

    let user = new User;

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(err => {
        if (err) {
            console.log(err);
            res.json({success: false, message: 'User registration failed'});
            res.end();
        } else {
            res.end();
        }
    })
}

export const loginUserAPI = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            res.status(404).json(err);
            res.end();
        } else {
            if (user) {
                let token = user.generateJWT();
                res.cookie('token', token, {maxAge: 1000 * 60 * 60 * 24});
                res.end();
            } else {
                res.status(401).json(err);
                res.end();
            }
        }
    })(req, res, next)
}

export const userAPI = (req, res, next) => {
    res.write(JSON.stringify(getCurrentUser(req)));
    res.end();
}