import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let categorySchema = new Schema({
    user_id: {
        type: Number,
    },
    name: {
        type: String,
    },
    labels: {
        type: Array
    }
})


export let Category = mongoose.model('Category', categorySchema);