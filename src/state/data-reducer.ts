import {Dispatch} from 'redux'
import {NoteType} from '../features/CreateNotePage/CreateNotePage'
//import {noteAPI} from '../api/note-api'
import {timeZonesAPI} from '../api/timeZones-api'

const CREATE_NOTE = 'CREATE_NOTE'
const GET_EXACT_TIME = 'GET_EXACT_TIME'

const initialState = {
    id: '',
    text: '',
    sign: '',
    timeZone: '',
    date: ''
}

export const dataReducer = (state: InitialStateType = initialState, action: CreateNoteActionsType): InitialStateType => {
    switch (action.type) {
        case CREATE_NOTE:
            return {...state, ...action.note}
        case GET_EXACT_TIME:
            return {...state, date: action.date}
        default:
            return state
    }
}
// actions
export const createNote = (note: NoteType) => ({type: CREATE_NOTE, note} as const)
export const getExactTime = (date: string) => ({type: GET_EXACT_TIME, date} as const)

// thunks
export const createNoteTC = (note: NoteType) => async (dispatch: Dispatch) => {
    try {
        //dispatch(loading(true))
        //await noteAPI.createNote(note)
        dispatch(createNote(note))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error',error)
            //handleServerNetworkError(error.message, dispatch)
        }
    } finally {
        //dispatch(loading(false))
    }
}


export const getExactTimeTC = (timeZone: string) => async (dispatch: Dispatch) => {
    try {
        //dispatch(loading(true))
        let response = await timeZonesAPI.getExactTime(timeZone)
        dispatch(getExactTime(response.data.datetime.toString() as any))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error',error)
            //handleServerNetworkError(error.message, dispatch)
        }
    } finally {
        //dispatch(loading(false))
    }
}
// types
type InitialStateType = typeof initialState

export type CreateNoteActionsType =
    ReturnType<typeof createNote>
    | ReturnType<typeof getExactTime>
