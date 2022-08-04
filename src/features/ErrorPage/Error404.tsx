import React from 'react'
import './Error404.css'
import {ERROR404, PAGE_NOT_FOUND} from '../../constants/error'

export const Error404 = () => {

    return (
        <div className={'error'}>
            <>{ERROR404}</>
            {'\u00A0'}
            <>{PAGE_NOT_FOUND}</>
        </div>
    )
}

