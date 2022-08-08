import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {v1} from 'uuid'
import './CreateNotePage.css'
import {AppRootStateType, useTypedDispatch} from '../../state/store'
import {restoreState, saveState} from '../../api/localStorage/localStorage'
import {NoteType} from '../../common/types'
import {getExactTimeTC} from '../../state/middlewares/data'
import {getTimeZonesTC} from '../../state/middlewares/time-zone'
import {useSelector} from 'react-redux'

export const CreateNotePage = () => {

    const dispatch = useTypedDispatch()

    const timeZones = useSelector<AppRootStateType, string[]>(state => state.timeZone.timeZones)
    const date = useSelector<AppRootStateType, string>(state => state.notes.date)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.notes.isLoading)

    const [valueSign, setValueSign] = useState<string>('')
    const [valueTimeZone, setValueTimeZone] = useState<string>('')

    const restoreFromLocalStorage = () => {
        setValueSign(restoreState('sign', valueSign))
        setValueTimeZone(restoreState('time-zone', valueTimeZone))
    }

    const [note, setNote] = useState<NoteType>({
        id: v1(),
        text: '',
        sign: valueSign,
        date: '',
        timeZone: valueTimeZone
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setNote({...note, [name]: value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(getExactTimeTC(note))
        e.preventDefault()
        saveToLocalStorage()
        setNote({...note, text:'', date: '', id: v1()})
    }

    const saveToLocalStorage = () => {
        saveState<string>('sign', note.sign)
        saveState<string>('time-zone', note.timeZone)
    }

    useEffect(() => {
        setNote({...note, date})
        restoreFromLocalStorage()
        setNote({...note, sign: valueSign, timeZone: valueTimeZone})
        dispatch(getTimeZonesTC())
    }, [date, isLoading, valueSign, valueTimeZone])

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
                            maxLength={100}
                        />
                    </div>
                    <div>
                        <select
                            className={'select'}
                            name="timeZone"
                            onChange={(e) => handleChange(e)}
                            value={note.timeZone}
                        >
                            {timeZones.map((o, i) => (<option key={o + i} value={o}>{o}</option>))}
                        </select>
                    </div>
                </div>

                <button type="submit" className={'button'} disabled={isLoading}>
                    Создать
                </button>

            </form>
        </div>
    )
}

