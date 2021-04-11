import {Label} from '../models/Label';

export const allLabelsAPI = (req, res, next) => {

    const userID = req.params.userID; 

    Label.find({user_id: userID}).exec((err, labels) => {
        if (err) {
            res.json({success: false, message: 'allLabelsAPI failed'});
            res.end();
        } else {
            res.json({labels, success: true, message: 'allLabelsAPI passed'})
        }
    })
}

export const oneLabelAPI = (req, res, next) => {
    const labelID = req.params.labelID;

    Label.find({_id: labelID}).exec((err, label) => {
        if (err) {
            res.json({success: false, message: 'oneLabelAPI failed'});
            res.end();
        } else {
            res.json({label, success: true, message: 'oneLabelAPI passed'});
            res.end();
        }
    })
}

export const createLabelAPI = (req, res, next) => {
    let label = new Label;

    label.user_id = req.body.user_id;
    label.category_id = req.body.category_id;
    label.name = req.body.name;
    label.planned_amount = req.body.planned_amount;
    label.received_amount = req.body.received_amount;
    label.status = req.body.status;
    label.due_date = req.body.due_date;
    label.notes = req.body.notes;
    label.created_date = new Date;
    label.modified_date = new Date;

    label.save(err => {
        if (err) {
            res.json({success: false, message: 'createLabelAPI failed', err});
            res.end();
        } else {
            res.json({success: true, message: 'createLabelAPI passed'});
            res.end();
        }
    })
}

export const updateLabelAPI = (req, res, next) => {
    const labelID = req.params.labelID;

    Label.findOne({_id: labelID}).exec((err, label) => {
        Label.updateOne({_id: labelID}, {
            user_id: req.body.user_id ? req.body.user_id : label.user_id,
            category_id: req.body.category_id ? req.body.category_id : label.category_id,
            name: req.body.name ? req.body.name : label.name,
            planned_amount: req.body.planned_amount ? req.body.planned_amount : label.planned_amount,
            received_amount: req.body.received_amount ? req.body.received_amount : label.received_amount,
            status: req.body.status ? req.body.status : label.status,
            due_date: req.body.due_date ? req.body.due_date : label.due_date,
            notes: req.body.notes ? req.body.notes : label.notes,
            modified_date: new Date
        }, err => {
            if (err) {
                console.log(err);
                res.json({success: false, message: 'updateLabelAPI failed', err});
                res.end();
            } else {
                res.json({success: true, message: 'updateLabelAPI passed'})
                res.end();
            }
        })
    })
}

export const deleteLabelAPI = (req, res, next) => {
    const labelID = req.params.labelID;

    Label.deleteOne({_id: labelID}, err => {
        if (err) {
            res.json({success: false, message: 'deleteLabelAPI failed', err});
            res.end();
        } else {
            res.json({success: true, message: 'deleteLabelAPI passed'})
            res.end();
        }
    })
}