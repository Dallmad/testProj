import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404} from '../ErrorPage/Error404'
import {CreateNotePage} from '../CreateNotePage/CreateNotePage'
import {NotesPage} from '../NotesPage/NotesPage'

export const PATH = {
    CREATE_NOTE:'/create-note',
    NOTES:'/notes',
    ERROR404: '/404',
}

export const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.CREATE_NOTE}/>}/>
                <Route path={PATH.CREATE_NOTE} element={<CreateNotePage/>}/>
                <Route path={PATH.NOTES} element={<NotesPage/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
}