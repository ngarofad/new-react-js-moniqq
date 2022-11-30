
import { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from './helpers'
import Pagination from './Pagination'
import { Table } from 'flowbite-react'

const TableSentimen = ({ columns, rows }) => {
    const [activePage, setActivePage] = useState(1)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
    const rowsPerPage = 5

    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

    const count = filteredRows.length
    const totalPages = Math.ceil(count / rowsPerPage)

    const handleSearch = (value, accessor) => {
        setActivePage(1)

        if (value) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [accessor]: value,
            }))
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters }
                delete updatedFilters[accessor]

                return updatedFilters
            })
        }
    }

    const handleSort = (accessor) => {
        setActivePage(1)
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
            orderBy: accessor,
        }))
    }

    const clearAll = () => {
        setSort({ order: 'asc', orderBy: 'id' })
        setActivePage(1)
        setFilters({})
    }
    return (
        <div >
            <Table hoverable={true} >
                <Table.Head >
                    {columns.map((column) => {
                        const sortIcon = () => {
                            if (column.accessor === sort.orderBy) {
                                if (sort.order === 'asc') {
                                    // arrow naik
                                    return <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                                        </svg>
                                    </div>
                                }
                                return <div>
                                    {/* arrow turun */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                    </svg>
                                </div>
                            } else {
                                return <div>
                                    {/* naik turun filter */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>

                                </div>
                            }
                        }
                        return (
                            <Table.HeadCell key={column.accessor}>
                                <div className='flex justify-between'>
                                    <span>{column.label}</span>
                                    <button onClick={() => handleSort(column.accessor)}>{sortIcon()}</button>
                                </div>
                            </Table.HeadCell>
                        )
                    })}

                </Table.Head>
                <Table.Body>
                    {calculatedRows.map((row) => {
                        return (

                            <Table.Row key={row.id} className={row.sentimen !== 'positif' ? row.sentimen === 'negatif' ? 'bg-rose-50' : 'bg-white' : 'bg-emerald-50'}>
                                {columns.map((column) => {
                                    if (column.format) {
                                        return <Table.Cell key={column.accessor}>{column.format(row[column.accessor])}</Table.Cell>
                                    }
                                    return <Table.Cell key={column.accessor}>{row[column.accessor]}</Table.Cell>
                                })}
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <div className='flex flex-col p-3'>
                {count > 0 ? (
                    <Pagination
                        activePage={activePage}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        totalPages={totalPages}
                        setActivePage={setActivePage}
                    />
                ) : (
                    <div className='flex w-full flex-col text-center justify-center items-center p-8'>
                        <p className='flex'>Tidak ada data yang ditemukan</p>
                    </div>
                )}
                {/* <div className='flex flex-col justify-center items-center'>
                    <button onClick={clearAll}>Clear all</button>
                </div> */}
            </div>
        </div>
    )
}

export default TableSentimen
