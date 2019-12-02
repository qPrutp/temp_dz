import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './app/App'
import ErrorBoundry from './app/components/ErrorBoundry'
import AppService from './app/services/app-service'
import {
    AppServiceProvider
} from './app/components/AppServiceContext'

import store from './app/store'
import * as actions from './app/actions'
import { isMobile } from './app/utils'

const MOUNT_NODE = document.getElementById('root')
const appService = new AppService()

const { dispatch } = store
const { screenResize } =
    bindActionCreators(actions, dispatch)

window.addEventListener('resize', () => {
    screenResize(isMobile())
})

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <AppServiceProvider value={appService}>
                <Router>
                    <App />
                </Router>
            </AppServiceProvider>
        </ErrorBoundry>
    </Provider>,
    MOUNT_NODE
)
