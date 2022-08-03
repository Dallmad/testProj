import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import './Header.css'


export const Header = () => {

    return (
        <div className={'container'}>
            <NavLink to={PATH.CREATE_NOTE} className={'link'}>СОЗДАТЬ ЗАПИСЬ</NavLink>
            <NavLink to={PATH.NOTES} className={'link'}>ЗАПИСИ</NavLink>
        </div>
    )
}