import {NoteType} from '../features/CreateNotePage/CreateNotePage'
//import {noteAPI} from '../api/note-api'
import {timeZonesAPI} from '../api/timeZones-api'
import {AppRootStateType, TypedDispatch} from './store'

const CREATE_NOTE = 'CREATE_NOTE'
const GET_EXACT_TIME = 'GET_EXACT_TIME'
const LOADING = 'LOADING'

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
// actions
export const createNote = (note: NoteType) => ({type: CREATE_NOTE, note} as const)
export const getExactTime = (date: string) => ({type: GET_EXACT_TIME, date} as const)
export const loading = (isLoading: boolean) => ({type: LOADING, isLoading} as const)

// thunks
export const createNoteTC = () => async (dispatch: TypedDispatch, getState: () => AppRootStateType) => {
    let note: NoteType = getState().notes
    try {
        //dispatch(loading(true))
        //await noteAPI.createNote(note)
        dispatch(createNote(note))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error', error)
            //handleServerNetworkError(error.message, dispatch)
        }
    } finally {
        dispatch(loading(false))
    }
}


export const getExactTimeTC = (note: NoteType) => async (dispatch: TypedDispatch) => {
    dispatch(createNote(note))
    try {
        dispatch(loading(true))
        let response = await timeZonesAPI.getExactTime(note.timeZone)
        dispatch(getExactTime(response.data.datetime.toString() as any))
        dispatch(createNoteTC())
    } catch (error) {
        if (error instanceof Error) {
            console.log('error', error)
            //handleServerNetworkError(error.message, dispatch)
        }
    }
}
// types
type InitialStateType = typeof initialState

export type CreateNoteActionsType =
    ReturnType<typeof createNote>
    | ReturnType<typeof getExactTime>
    | ReturnType<typeof loading>
