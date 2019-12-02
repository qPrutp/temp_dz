import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from './components/Header'
import ErrorIndicator from './components/UI/ErrorIndicator'
import Home from './containers/Home'
import Test1 from './containers/Test1'
import Test2 from './containers/Test2'
import './style.scss'

import { rootHref } from './config'

const App = () => {
    
    return (
        <>
            <Helmet
                titleTemplate="%s - Boilerplate!"
                defaultTitle="Boilerplate!"
            >
            </Helmet>

            <Header />

            <Switch>
                <Route
                    exact
                    path={rootHref}
                    component={Home} />
                <Route
                    path={`${rootHref}test1`}
                    component={Test1} />
                <Route
                    path={`${rootHref}test2/:param1?`}
                    component={Test2} />

                <Route
                component={ErrorIndicator} />
            </Switch>
        </>
    )
}

export default App
