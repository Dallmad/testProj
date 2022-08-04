import {createNote, getExactTime, loading} from '../actions/data'
import {timeZonesAPI} from '../../api/timeZones-api'
import {noteAPI} from '../../api/note-api'
import {AppRootStateType, TypedDispatch} from '../store'
import {NoteType} from '../../common/types'

export const createNoteTC = () => async (dispatch: TypedDispatch, getState: () => AppRootStateType) => {
    let note: NoteType = getState().notes
    try {
        await noteAPI.createNote(note)
        dispatch(createNote(note))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error', error)
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
        }
    }
}