import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import './Header.css'

const CREATE_NOTE = 'создать запись'
const NOTES = 'записи'


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