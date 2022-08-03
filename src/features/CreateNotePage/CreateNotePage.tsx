import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {v1} from 'uuid'
import './CreateNotePage.css'
import {AppRootStateType, useTypedDispatch} from '../../state/store';
import {getTimeZonesTC} from '../../state/time-zone-reducer';
import {useSelector} from 'react-redux';
import {createNoteTC, getExactTimeTC} from '../../state/data-reducer';

export const CreateNotePage = () => {

    const dispatch = useTypedDispatch()
    const timeZones = useSelector<AppRootStateType, string[]>(state => state.timeZone.timeZones)

    const [note, setNote] = useState<NoteType>({
        id: v1(),
        text: '',
        sign: '',
        date: '',
        timeZone:''
    })
    console.log('inputValues',note.timeZone)

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setNote({...note, [name]: value})
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(getExactTimeTC(note.timeZone))
        dispatch(createNoteTC(note))
        e.preventDefault()
        setNote({...note, text: '', id: v1(), date: ''})
    }

    useEffect(() => {
        dispatch(getTimeZonesTC())
    }, [])

    return (
        <div>
            <form
                id="CreateEntryForm"
                onSubmit={handleSubmit}
                className={'form'}
            >
                <div>
                    <textarea
                        rows={6}
                        className={'text'}
                        placeholder={'Запись'}
                        name={'text'}
                        value={note.text}
                        onChange={(e) => handleChange(e)}
                        autoFocus
                    />
                </div>
                <div className={'sign_container'}>
                    <div>
                        <input
                            placeholder={'Подпись*'}
                            className={'input'}
                            name={'sign'}
                            value={note.sign}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <select
                            className={'select'}
                            name='timeZone'
                            onChange={(e) => handleChange(e)}
                            value={note.timeZone}
                        >
                            {timeZones.map((o, i) => (<option key={o + i} value={o}>{o}</option>))}
                        </select>
                    </div>
                </div>

                <button type="submit" className={'button'}>
                    Создать
                </button>

            </form>
        </div>
    )
}

//types
export type NoteType = {
    id: string
    text: string
    sign: string
    date: string
    timeZone: string
}

