import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {APP_SECRET, AUTH_TOKEN_EXPIRES_IN} from '../config/vars';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password_salt: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
    daily_spending_limit: {
        type: Number
    },
    created_date: {
        type: Date
    }
})

// Auth methods go here TODO

userSchema.methods.setPassword = function(password) {
    this.password_salt = crypto.randomBytes(16).toString('hex');
    this.password_hash = crypto.pbkdf2Sync(password, this.password_salt, 1000, 128, 'sha512').toString('hex');
}

userSchema.methods.isValidPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.password_salt, 1000, 128, 'sha512').toString('hex');

    return this.password_hash === hash;
}

userSchema.methods.generateJWT = function() {
    let expiresOn = new Date();

    expiresOn.setDate(expiresOn.getDate() + AUTH_TOKEN_EXPIRES_IN);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        exp: parseInt(expiresOn.getTime() / 1000)
    }, APP_SECRET);
}

export let User = mongoose.model('User', userSchema);

