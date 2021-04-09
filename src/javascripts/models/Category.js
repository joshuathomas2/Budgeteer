import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let categorySchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref:'users'
    },
    name: {
        type: String
    },
    created_date: {
        type: Date
    },
    modified_date: {
        type: Date
    }
    
})


export let Category = mongoose.model('Category', categorySchema);