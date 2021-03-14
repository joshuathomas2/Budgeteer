import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password_salt: {
        type: String
    },
    password_hash: {
        type: String
    },
    daily_spending_limit: {
        type: Number
    },
    created_date: {
        type: Date
    }
})

// Auth methods go here TODO

export let User = mongoose.model('User', userSchema);