import React from 'react'
import './App.css'
import {Header} from './features/Header/Header'
import {AppRoutes} from './features/Routes/Routes'


export const App = () => {

    return (
        <div className={'app'}>
            <Header/>
            <AppRoutes/>
        </div>
    )
}