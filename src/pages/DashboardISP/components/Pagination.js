import React from 'react'

const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

    return (
        <div className='flex flex-col items-center mt-2 gap-2'>
            <div className="flex flex-row gap-4">
                <button disabled={activePage === 1} onClick={() => setActivePage(1)} className='flex flex-row text-sm hover:text-blue-400 items-center justify-center gap-2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span>First</span>

                </button>
                <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)} className='flex flex-row text-sm hover:text-blue-400 items-center justify-center gap-2'>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span>Previous</span>
                </button>
                <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)} className='flex flex-row text-sm hover:text-blue-400 items-center justify-center gap-2'>
                    <span>Next</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </button>
                <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)} className='flex flex-row text-sm hover:text-blue-400 items-center justify-center gap-2'>
                    <span>Last</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className='border w-1/3'></div>
            <p className='text-xs'>
                Halaman {activePage} dari {totalPages} | Baris: {beginning === end ? end : `${beginning} - ${end}`} dari {count}
            </p>

        </div>
    )
}

export default Pagination
