import {Category} from '../models/Category'

export const allCategoriesAPI = (req, res, next) => {

    const userID = req.params.userID; 

    Category.find({user_id: userID}).exec((err, categories) => {
        if (err) {
            res.json({success: false, message: 'allCategoriesAPI failed', err});
            res.end();
        } else {
            res.json({categories, success: true, message: 'allCategoriesAPI passed'});
            res.end();
        }
    })
}

export const oneCategoryAPI = (req, res, next) => {
    const categoryID = req.params.categoryID;

    Category.find({_id: categoryID}).exec((err, category) => {
        if (err) {
            res.json({success: false, message: 'oneCategoryAPI failed', err});
            res.end();
        } else {
            res.json({category, success: true, message: 'oneCategoryAPI passed'});
            res.end();
        }
    })
}

export const createCategoriesAPI = (req, res, next) => {
    let category = new Category();

    category.user_id = req.body.user_id;
    category.name = req.body.name;
    category.created_date = new Date;
    category.modified_date = new Date;

    category.save(err => {
        if (err) {
            res.json({success: false, message: 'createCategoryAPI failed', err});
            res.end();
        } else {
            res.json({success: true, message: 'createCategoryAPI passed'});
            res.end();
        }
    })
}

export const updateCategoryAPI = (req, res, next) => {
    const categoryID = req.params.categoryID;

    Category.findOne({_id: categoryID}).exec((err, category) => {
        Category.updateOne({_id: categoryID}, {
            user_id: req.body.user_id ? req.body.user_id : category.user_id,
            name: req.body.name ? req.body.name : category.name,
            modified_date: new Date()
        }, err => {
            if (err) {
                console.log(err);
                res.json({success: false, message: 'updateCategoryAPI failed', err});
                res.end();
            } else {
                res.json({success: true, message: 'updateCateogryAPI passed'})
                res.end();
            }
        })
    })
}

export const deleteCategoryAPI = (req, res, next) => {
    const categoryID = req.params.categoryID;

    Category.deleteOne({_id: categoryID}, err => {
        if (err) {
            res.json({success: false, message: 'deleteCategoryAPI failed', err});
            res.end();
        } else {
            res.json({success: true, message: 'deleteCategoryAPI passed'})
            res.end();
        }
    })
}