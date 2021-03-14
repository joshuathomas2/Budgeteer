import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    user_id: {
        type: Number,
    },
    category_id: {
        type: Number,
    },
    label_id: {
        type: Number
    },
    title: {
        type: String
    },
    notes: {
        type: Array
    },
    amount: {
        type: Number
    }
})

export let Transaction = mongoose.model('Transaction', transactionSchema);