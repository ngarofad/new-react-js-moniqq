import { Table } from 'flowbite-react'
import React from 'react'

const KataToPrint = ({ tanggalMulaiLaporan, tanggalAkhirLaporan, kataPositif, kataNegatif, lokasiLaporan }) => {
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
                        Daftar Kata dalam Tweet dari <strong>{tanggalMulaiLaporan}</strong> sampai <strong>{tanggalAkhirLaporan}</strong> dengan lokasi <strong>{lokasiLaporan}</strong>
                    </h6>
                </div>

                {/* tabel tweet seluruhnya */}
                <h6 className='font-bold mt-8 text-base font-regular'>
                    Daftar Kata
                </h6>
                <div className='flex flex-row w-full gap-3'>
                    <div className='w-1/2'>
                        <h6 className='font-bold my-8 text-base font-regular'>
                            Kata Positif
                        </h6>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    <div className=''>
                                        Kata
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Frekuensi
                                </Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                                {kataPositif.map((row) => (
                                    <Table.Row
                                        key={row.id}
                                    >
                                        <Table.Cell>
                                            {row.kata}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.frekuensi}
                                        </Table.Cell>

                                    </Table.Row>
                                ))}
                                <Table.Row></Table.Row>


                            </Table.Body>
                        </Table>
                    </div>
                    <div className='w-1/2'>
                        <h6 className='font-bold my-8 text-base font-regular'>
                            Kata Negatif
                        </h6>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    <div className=''>
                                        Kata
                                    </div>
                                </Table.HeadCell>

                                <Table.HeadCell>
                                    Frekuensi
                                </Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                                {kataNegatif.map((row) => (
                                    <Table.Row
                                        key={row.id}
                                    >
                                        <Table.Cell>
                                            {row.kata}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {row.frekuensi}
                                        </Table.Cell>

                                    </Table.Row>
                                ))}
                                <Table.Row></Table.Row>


                            </Table.Body>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default KataToPrint