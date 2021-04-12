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
}