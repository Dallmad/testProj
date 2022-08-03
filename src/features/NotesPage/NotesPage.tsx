import React from 'react'
import './NotesPage.css'

export const NotesPage = () => {

    const dateArray = ['1','2','3','4','5','6']


    return (
        <div className={'container_notes'}>
            {dateArray.map((d,i) => <div key={d+i} className={'item'}>{d}</div>)}
        </div>
    )
}