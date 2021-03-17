import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let labelSchema = new Schema({
    user_id: {
        type: Number
    },
    category_id: {
        type: Number
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
        type: Array
    }
})

export let Label = mongoose.model('Label', labelSchema);