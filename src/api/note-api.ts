import {AxiosResponse} from 'axios'
import {setNote} from './instance'
import {NoteType} from '../common/types'

export const noteAPI = {
    createNote(data: NoteType) {
        return setNote.post<AxiosResponse<NoteType>>('createNote', data)
    }
}
