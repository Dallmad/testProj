import {useDispatch} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {timeZoneReducer, TZActionsType} from './reducers/time-zone'
import {CreateNoteActionsType, dataReducer} from './reducers/data'

const rootReducer = combineReducers({
    timeZone: timeZoneReducer,
    notes: dataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const useTypedDispatch = () => useDispatch<TypedDispatch>()

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = TZActionsType | CreateNoteActionsType
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>

// @ts-ignore
window.store = store