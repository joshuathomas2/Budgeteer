import {Transaction} from '../models/Transaction';
const { ObjectId } = require('mongodb')
export const allTransactionsByUserAPI = (req, res, next) => {

    const userID = req.params.userID; 

    Transaction.find({user_id: userID}).exec((err, transactions) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200).json(transactions);
            res.end();
        }
    })
}

export const allTransactionsByCategoryAPI = (req, res, next) => {

    const categoryID = req.params.categoryID;

    Transaction.find({category_id: categoryID}).exec((err, transactions) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200).json(transactions);
            res.end();
        }
    })
}   



export const oneTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.find({_id: transactionID}).exec((err, transaction) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            let singleTransaction = transaction[0];
            res.status(200).json(singleTransaction);
            res.end();
        }
    })
}

export const createTransactionAPI = (req, res, next) => {
    let transaction = new Transaction;


    transaction.user_id = req.body.user_id;
    transaction.category_id = req.body.category_id;
    transaction.label_id = req.body.label_id;
    transaction.title = req.body.title;
    transaction.notes = req.body.notes;
    transaction.amount = req.body.amount;
    transaction.created_date = new Date;
    transaction.modified_date = new Date;

    transaction.save(err => {
        if (err) {
            res.status(404).json(err);
            res.end();
        } else {
            res.status(200);
            res.end();
        }
    })
}

export const updateTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.findOne({_id: transactionID}).exec((err, transaction) => {
        Transaction.updateOne({_id: transactionID}, {
            user_id: req.body.user_id ? req.body.user_id : transaction.user_id,
            category_id: req.body.category_id ? req.body.category_id : transaction.category_id,
            label_id: req.body.label_id ? req.body.label_id : transaction.label_id,
            title: req.body.title ? req.body.title : transaction.title,
            notes: req.body.notes ? req.body.notes : transaction.notes,
            amount: req.body.amount ? req.body.amount : transaction.amount,
            modified_date: new Date()
        }, err => {
            if (err) {
                res.status(404);
                res.end();
            } else {
                res.status(200);
                res.end();
            }
        })
    })
}

export const deleteTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.deleteOne({_id: transactionID}, err => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200);
            res.end();
        }
    })
}