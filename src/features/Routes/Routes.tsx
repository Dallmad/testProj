import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404} from '../ErrorPage/Error404';
import {EntriesPage} from '../EntriesPage/EntriesPage';
import {CreateEntryPage} from '../CreateEntryPage/CreateEntryPage';

export const PATH = {
    CREATE_ENTRY:'/create-entry',
    ENTRIES:'/entries',
    ERROR404: '/404',
}

export const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.CREATE_ENTRY}/>}/>
                <Route path={PATH.CREATE_ENTRY} element={<CreateEntryPage/>}/>
                <Route path={PATH.ENTRIES} element={<EntriesPage/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
}