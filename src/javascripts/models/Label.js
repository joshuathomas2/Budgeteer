import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let labelSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'users'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'categories'
    },
    name: {
        type: String
    },
    planned_amount: {
        type: Number
    },
    received_amount: {
        type: Number
    },
    status: {
        type: String
    },
    due_date: {
        type: Date
    },
    notes: {
        type: String,
    },
    created_date: {
        type: Date,
    },
    modified_date: {
        type: Date
    }
    
})

export let Label = mongoose.model('Label', labelSchema);