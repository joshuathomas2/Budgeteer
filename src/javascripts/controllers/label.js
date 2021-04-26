import {Label} from '../models/Label';

export const allLabelsAPI = (req, res, next) => {
    Label.find().exec((err, labels) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200).res.json(labels);
        }
    })
}

export const allLabelsByCategoryAPI = (req, res, next) => {
    const category_id = req.params.categoryID;

    Label.find({category_id: category_id}).exec((err, labels) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200).json(labels);
        }
    })
}

export const labelNamesByCategoryAPI = (req, res, next) => {
    const category_id = req.params.categoryID;

    Label.find({category_id: category_id}).exec((err, labels) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            var labelNames = [];
            for (let i = 0; i < labels.length; i++) {
                labelNames[i] = labels[0].name;
            }
            res.status(200).json(labelNames);
        }
    })
}


export const oneLabelAPI = (req, res, next) => {
    const labelID = req.params.labelID;

    Label.find({_id: labelID}).exec((err, label) => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200).json(label);
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
            res.status(404);
            res.end();
        } else {
            res.status(200);
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
                res.status(404);
                res.end();
            } else {
                res.status(200);
                res.end();
            }
        })
    })
}

export const deleteLabelAPI = (req, res, next) => {
    const labelID = req.params.labelID;

    Label.deleteOne({_id: labelID}, err => {
        if (err) {
            res.status(404);
            res.end();
        } else {
            res.status(200);
            res.end();
        }
    })
}

