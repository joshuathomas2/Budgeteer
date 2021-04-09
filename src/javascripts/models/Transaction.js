import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'users'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'categories'
    },
    label_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'labels'
    },
    title: {
        type: String
    },
    notes: {
        type: String
    },
    amount: {
        type: Number
    },
    created_date: {
        type: Date,
    },
    modified_date: {
        type: Date
    }
})

export let Transaction = mongoose.model('Transaction', transactionSchema);