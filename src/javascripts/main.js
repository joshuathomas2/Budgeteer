// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// TODO
import React from 'react'
import ReactDOM from 'react-dom'

function Main (props) {
    return (
        <div>Hello world!</div>
    )
}

function Test (props) {
    return (
        <div>Kolten Test!</div>
    )
}

ReactDOM.render(<Main/>, document.getElementById('main'));
ReactDOM.render(<Test/>, document.getElementById('test'));