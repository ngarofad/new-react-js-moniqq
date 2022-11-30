import { Table } from 'flowbite-react'
import React from 'react'

const TweetToPrint = ({ filteredTweet, tanggalMulaiLaporan, tanggalAkhirLaporan, lokasiLaporan }) => {
    return (
        <div>
            <div className='flex flex-col  m-5'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='flex text-2xl font-bold mb-2'>
                        Laporan Analisis Sentimen
                    </h3>
                    <h3 className='flex text-2xl font-bold mb-2'>
                        Pendapat Pengguna ISP
                    </h3>
                    <h3 className='flex text-2xl font-bold mb-8'>
                        di Sosial Media Twitter
                    </h3>

                    <h6 className='text-base font-regular mb-8'>
                        Daftar Tweet dari <strong>{tanggalMulaiLaporan}</strong> sampai <strong>{tanggalAkhirLaporan}</strong> dengan lokasi <strong>{lokasiLaporan}</strong>
                    </h6>
                </div>

                {/* tabel tweet seluruhnya */}
                <h6 className='font-bold my-8 text-base font-regular'>
                    Rincian Tweet
                </h6>
                <div>
                    <div className=''>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    <div className=''>
                                        Tanggal
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Username
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Tweet
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Sentimen
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {filteredTweet.map((row) => (
                                    <Table.Row
                                        key={row.id}
                                    >
                                        <Table.Cell>
                                            {row.created_date}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.username}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.text}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.sentimen}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetToPrint