import {NoteType} from '../../common/types'
import {CREATE_NOTE, GET_EXACT_TIME, LOADING} from '../../constants/data'

export const createNote = (note: NoteType) => ({type: CREATE_NOTE, note} as const)
export const getExactTime = (date: string) => ({type: GET_EXACT_TIME, date} as const)
export const loading = (isLoading: boolean) => ({type: LOADING, isLoading} as const)