import {CREATE_NOTE, GET_EXACT_TIME, LOADING} from '../../constants/data'
import {createNote, getExactTime, loading} from '../actions/data'

const initialState = {
    id: '',
    text: '',
    sign: '',
    timeZone: '',
    date: '',
    isLoading: false
}

export const dataReducer = (state: InitialStateType = initialState, action: CreateNoteActionsType): InitialStateType => {
    switch (action.type) {
        case CREATE_NOTE:
            return {...state, ...action.note}
        case GET_EXACT_TIME:
            return {...state, date: action.date}
        case LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

// types
type InitialStateType = typeof initialState
export type CreateNoteActionsType =
    ReturnType<typeof createNote>
    | ReturnType<typeof getExactTime>
    | ReturnType<typeof loading>
