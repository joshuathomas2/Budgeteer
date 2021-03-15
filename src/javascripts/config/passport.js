const LocalStrategy = require('passport-local').Strategy;
import {User} from '../models/User';

export const strategy = new LocalStrategy(
    function(email, password, done) {
        User.findOne({email: email}, (err, user) => {
            console.log(user);
            if (err) {
                return done(err);
            } else {
                if (!user) {
                    return done(null, false, {message: 'User not found'});
                } else {
                    if (!user.isValidPassword(password)) {
                        return done(null, false, {message: 'Invalid password'});
                    } else {
                        return done(null, user);
                    }
                }
            }
        })
    }
)