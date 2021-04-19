// Controller for all of the sites pages

export const homePage = (req, res, next) => {
    res.render('layout', {content: 'index'});
}

export const loginPage = (req, res, next) => {
    res.render('layout', {content: 'login'});
}

export const registerPage = (req, res, next) => {
    res.render('layout', {content: 'register'});
}

export const settingsPage = (req, res, next) => {
    res.render('layout', {content: 'settings'});
}

export const transactionsListPage = (req, res, next) => {
    res.render('layout', {content: 'transactions_list'});
} 

export const transactionForm = (req, res, next) => {
    res.render('layout', {content: 'transaction_form'});
}

export const categoriesListPage = (req, res, next) => {
    res.render('layout', {content: 'categories_list'});
} 

export const categoryPage = (req, res, next) => {

    res.render('layout', {content: 'category'} );
} 