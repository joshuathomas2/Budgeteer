// Required by Webpack - do not touch
//require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import React from 'react';
import ReactDOM from 'react-dom';
import {LoginForm} from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm';
import {TransactionsCardList} from './components/TransactionsCardList';
import {Home} from './components/Home';
import {TransactionForm} from './components/TransactionForm';
import {CategoriesList} from './components/CategoriesList';
import {Category} from './components/Category';
import {LabelForm} from './components/LabelForm'
import {CategoryForm} from './components/CategoryForm'
import {SignOut} from './components/SignOut'
import { Error } from './components/Error'

import 'bootstrap';

if (document.getElementById('LoginForm')) {
    ReactDOM.render(<LoginForm/>, document.getElementById('LoginForm'));
} else if (document.getElementById('RegisterForm')) {
    ReactDOM.render(<RegisterForm/>, document.getElementById('RegisterForm'));
} else if (document.getElementById('TransactionsCardList')) {
    ReactDOM.render(<TransactionsCardList/>, document.getElementById('TransactionsCardList'))
} else if (document.getElementById('main')) {
    ReactDOM.render(<Home/>, document.getElementById('main'))
} else if (document.getElementById('TransactionForm')) {
    ReactDOM.render(<TransactionForm/>, document.getElementById('TransactionForm'))
} else if (document.getElementById('categories_list')) {
    ReactDOM.render(<CategoriesList/>, document.getElementById('categories_list'))
} else if (document.getElementById('category')) {
    ReactDOM.render(<Category/>, document.getElementById('category'))
} else if (document.getElementById('label_form')) {
    ReactDOM.render(<LabelForm/>, document.getElementById('label_form'))
} else if (document.getElementById('category_form')) {
    ReactDOM.render(<CategoryForm/>, document.getElementById('category_form'))
} else if (document.getElementById('data_error')) {
    ReactDOM.render(<Error/>, document.getElementById('data_error'))
}


if(document.querySelector('#_sign_user_out')) {
    document.querySelector('#_sign_user_out').onclick = (e) => {
        let el = document.createElement('div')
        document.body.appendChild(el)
        ReactDOM.render(<SignOut/>,el)
    }
}
