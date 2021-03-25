// Required by Webpack - do not touch
//require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import React from 'react'
import ReactDOM from 'react-dom'
import {LoginForm} from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm';
import 'bootstrap';

if (document.getElementById('LoginForm')) {
    ReactDOM.render(<LoginForm/>, document.getElementById('LoginForm'));
} else if (document.getElementById('RegisterForm')) {
    ReactDOM.render(<RegisterForm/>, document.getElementById('RegisterForm'));
}