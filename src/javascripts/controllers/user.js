// Controller for the various user functions TODO

import passport from 'passport';
import {User} from '../models/User';
import {getCurrentUserByToken} from '../config/routes';

export const registerUserAPI = (req, res, next) => {

    let user = new User;

    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(err => {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({success: false, message: 'User registration failed'});
            res.end();
        } else {
            res.json({success: true, message: 'User registration successful'})
            res.end();
        }
    })
}

export const getCurrentUserIdAPI = (req, res, next) => {
    const decodedToken = getCurrentUserByToken(req.cookies.token);
    
    if (decodedToken) {
        const user_id = decodedToken._id;

        res.status(200).json(user_id);
        res.end();
    } else {
        res.status(404);
        res.end();
    }

    // Below is old method of getting the user id, I think it revealed too much info
    // to the client so I commented it out and did the above version instead.

    // User.findOne({_id: decodedToken._id}, (err, user) => {
    //     if (err) {
    //         res.status(404).json(err);
    //         res.end();
    //     } else {
    //         if (user) {
    //             res.status(200).json(user);
    //             res.end();
    //         } else {
    //             res.status(404);
    //             res.end();
    //         }
    //     }
    // })
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
                res.json({success: true, message: 'Login successful'});
                res.end();
            } else {
                res.status(401);
                res.json({success: false, message: 'Login failed, incorrect password or username'});
                res.end();
            }
        }
    })(req, res, next)
}

export const userAPI = (req, res, next) => {
    res.write(JSON.stringify(getCurrentUser(req)));
    res.end();
}