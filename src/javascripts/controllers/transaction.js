import {Transaction} from '../models/Transaction';

export const allTransactionsAPI = (req, res, next) => {
    Transaction.find().exec((err, transactions) => {
        if (err) {
            res.json({success: false, message: 'allTransactionsAPI query failed'});
            res.end();
        } else {
            res.json(JSON.stringify(transactions));
            res.end();
        }
    })
}

export const oneTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.find({_id: transactionID}).exec((err, transaction) => {
        if (err) {
            res.json({success: false, message: 'oneTransactionAPI failed'});
            res.end();
        } else {
            res.json({transaction: JSON.stringify(transaction), success: true, message: 'oneTransactionAPI passed'});
            res.end();
        }
    })
}

export const createTransactionAPI = (req, res, next) => {
    let transaction = new Transaction;

    transaction.user_id = req.body.user_id;
    transaction.category_id = req.body.category_id;
    transaction.label_id = req.body.label_id;
    transaction.title = req.body.title_id;
    transaction.notes = req.body.notes;
    transaction.amount = req.body.amount;

    transaction.save(err => {
        if (err) {
            res.json({success: false, message: 'createTransactioAPI failed'});
            res.end();
        } else {
            res.json({success: true, message: 'createTransactionAPI passed'});
            res.end();
        }
    })
}

export const updateTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.find({_id: transactionID}).exec((err, transaction) => {
        Transaction.updateOne({_id: transactionID}, {
            user_id: req.body.user_id ? req.body.user_id : transaction.user_id,
            category_id: req.body.category_id ? req.body.category_id : transaction.category_id,
            label_id: req.body.label_id ? req.body.label_id : transaction.label_id,
            title: req.body.title ? req.body.title : transaction.title,
            notes: req.body.notes ? req.body.notes : transaction.notes,
            amount: req.body.amount ? req.body.amount : transaction.amount
        }, err => {
            if (err) {
                res.json({success: false, message: 'updateTransactionAPI failed'});
                res.end();
            } else {
                res.json({success: true, message: 'updateTransactionAPI passed'})
                res.end();
            }
        })
    })
}

export const deleteTransactionAPI = (req, res, next) => {
    const transactionID = req.params.transactionID;

    Transaction.deleteOne({_id: transactionID}, err => {
        if (err) {
            res.json({success: false, message: 'deleteTransactionAPI failed'});
            res.end();
        } else {
            res.json({success: true, message: 'deleteTransactionAPI passed'})
            res.end();
        }
    })
}