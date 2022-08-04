import React, {useState} from 'react'
import './Paginator.css'

export const Paginator: React.FC<PaginatorTypeProps> = ({
                                                            totalCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged
                                                        }) => {

    const portionSize = 5

    const pagesCount = Math.ceil(totalCount / pageSize)

    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)//?
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return (
        <div className={'container_paginator'}>
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} disabled={portionNumber <= 1}>{'<'}</button>
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p, i) => {
                    return (
                        <span key={i} onClick={() => {
                            onPageChanged(p);
                        }} className={currentPage === p ? 'selectedPage' : 'simplePage'}>{p} </span>
                    )
                })}
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}
                    disabled={portionCount <= portionNumber}>{'>'}
            </button>
            {pagesCount !== 1 && <div>{`${pagesCount} pages total`}</div>
            }
        </div>
    )
}

//types
type PaginatorTypeProps = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (numberPage: number) => void
}