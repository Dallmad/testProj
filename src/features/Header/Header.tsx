import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import {CREATE_NOTE, NOTES} from '../../constants/header'
import {PATH} from '../../constants/routes'

export const Header = () => {

    return (
        <div className={'container'}>
            <NavLink
                to={PATH.CREATE_NOTE}
                className={ navData => navData.isActive ? 'link_active' : 'link'}
            >{CREATE_NOTE}</NavLink>
            <NavLink
                to={PATH.NOTES}
                className={ navData => navData.isActive ? 'link_active' : 'link'}
            >{NOTES}</NavLink>
        </div>
    )
}