import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {v1} from 'uuid'
import './CreateNotePage.css'
import {AppRootStateType, useTypedDispatch} from '../../state/store';
import {getTZTC} from '../../state/time-zone-reducer';
import {useSelector} from 'react-redux';

export const CreateNotePage = () => {

    const dispatch = useTypedDispatch()
    const timeZones = useSelector<AppRootStateType, string[]>(state => state.timeZone.tz)

    const [inputValues, setInputValue] = useState<InputValuesType>({
        id: v1(),
        text: '',
        sign: '',
        date: ''
    })

    type InputValuesType = {
        id: string
        text: string
        sign: string
        date: string
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setInputValue({...inputValues, [name]: value})
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        //dispatch(createUserTC(inputValues))
        e.preventDefault()
    }

    useEffect(() => {
        dispatch(getTZTC())
    }, [timeZones])

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
                        value={inputValues.text}
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
                            value={inputValues.sign}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <select
                            className={'select'}
                            name="nationality"
                            //onChange={(e) => handleChange(e)}
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