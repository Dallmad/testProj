import React, {ChangeEvent, FormEvent, useState} from 'react'
import {v1} from 'uuid'
import './CreateNotePage.css'

export const CreateNotePage = () => {

    const [inputValues, setInputValue] = useState<InputValuesType>({
        id: v1(),
        text: '',
        sign: '',
        tz: '',
        date: ''
    })

    type InputValuesType = {
        id: string
        text: string
        sign: string
        tz: string
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
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            {/*{nationalityDate.map((o, i) => (<option key={o + i} value={o}>{o}</option>))}*/}
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