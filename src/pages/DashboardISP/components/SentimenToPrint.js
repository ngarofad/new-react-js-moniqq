import { Table } from 'flowbite-react'
import React from 'react'
const SentimenToPrint = ({ filteredTweet, sentimenSum, sentimenDaily, tanggalMulaiLaporan, tanggalAkhirLaporan, lokasiLaporan }) => {
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
                        Daftar Sentimen dari <strong>{tanggalMulaiLaporan}</strong> sampai <strong>{tanggalAkhirLaporan}</strong>  dengan lokasi <strong>{lokasiLaporan}</strong>
                    </h6>
                </div>

                {/* tabel tweet seluruhnya */}
                <h6 className='font-bold my-8 text-base font-regular'>
                    Rincian Sentimen
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
                                    Sentimen Positif
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Sentimen Negatif
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Total Sentimen
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {sentimenDaily.map((row) => (
                                    <Table.Row
                                        key={row.id}
                                    >
                                        <Table.Cell>
                                            {row.created_date}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.sentimen_pos}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.sentimen_neg}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.sentimen_sum}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                                <Table.Row></Table.Row>

                                <Table.Row>
                                    <Table.Cell>
                                        <div className='font-bold text-lg'>
                                            Total
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className='font-bold text-lg'>
                                            {sentimenSum.sentimen_pos_total}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className='font-bold text-lg'>
                                            {sentimenSum.sentimen_neg_total}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className='font-bold text-lg'>
                                            {sentimenSum.sentimen_all_total}
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SentimenToPrint