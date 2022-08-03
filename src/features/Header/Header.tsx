import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from '../Routes/Routes'

export const Header = () => {

    return (
        <div>
            <NavLink to={PATH.CREATE_ENTRY}>Создать запись</NavLink>
            <NavLink to={PATH.ENTRIES}>Записи</NavLink>
        </div>
    )
}