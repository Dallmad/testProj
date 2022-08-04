import React, {useState} from 'react'
import './NotesPage.css'
import {ARR_LENGTH, PAGE_SIZE} from '../../constants/notes'
import {Paginator} from '../Paginator/Paginator'

export const NotesPage = () => {

    const fillArray = (n: number) => {
        let arr = [];
        if (n) for (let i = 1; i <= n;) arr.push(i++);
        return arr;
    }
    const dateArray = fillArray(ARR_LENGTH)

    const [page, setPage] = useState(1);
    const onPageChanged = (value: number) => {
        setPage(value)
    }

    return (
        <>
            <div className={'container_notes'}>
                {dateArray.slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE).map((d, i) =>
                    <div key={d + i} className={'item'}>Запись{'\u00A0'}№{d}</div>)}
            </div>
            <div>
                <Paginator
                    currentPage={page}
                    onPageChanged={onPageChanged}
                    totalCount={ARR_LENGTH}
                    pageSize={PAGE_SIZE}
                />
            </div>
        </>

    )
}