import React, { useRef, useCallback } from 'react'

import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Table } from 'flowbite-react';

Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement);

const SentimenChartCardHome = ({ sentimenDaily, sentimenSum, filteredTweet }) => {
    // contoh data donat
    const datadonut = {
        labels: [
            'Positif',
            'Negatif',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [sentimenSum.sentimen_pos_total, sentimenSum.sentimen_neg_total],
            backgroundColor: [
                'rgba(0,200,132,0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            hoverOffset: 4
        }]
    };
    // contoh data line
    const dataline = {
        labels: sentimenDaily.map(s => s.created_date),
        datasets: [
            {
                label: "Positif",
                data: sentimenDaily.map(s => s.sentimen_pos),
                fill: false,
                backgroundColor: "rgba(0,200,132,0.8)",
                borderColor: "rgba(0,200,132,0.8)"
            },
            {
                label: "Negatif",
                data: sentimenDaily.map(s => s.sentimen_neg),
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)',
            }
        ]
    };



    return (
        <div>
            {/* chart */}
            {/* <div className="flex mx-0 flex-row-reverse md:flex-row flex-wrap ">
                <div className="w-full pb-5 pt-0 md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            Presentase
                        </div>

                    </div>
                    <div className='border h-64 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Doughnut data={datadonut} />
                    </div>
                </div>
                <div className="w-full pb-5 pt-0 md:w-2/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            Tren
                        </div>

                    </div>
                    <div className='border h-64 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

            </div> */}
            {/* summary */}
            <div>
                <div className='text-base px-3 font-semibold flex justify-between items-center'>
                    <div>
                        Sentimen
                    </div>
                </div>
                <div className="flex flex-wrap mx-0 ">
                    <div className="w-full p-3 md:w-1/3 mb-2 md:mb-0">
                        <div className='border p-4 rounded-lg flex flex-row w-full'>
                            <div className="flex w-1/4  items-center justify-center">
                                <svg
                                    className="w-12 h-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="blue"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col w-3/4 ">
                                <h6
                                    className="mb-0 ml-4 text-sm text-black lg dark:text-gray-400"
                                >
                                    Total Tweet
                                </h6>
                                <p
                                    className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                                >
                                    {sentimenSum.sentimen_all_total}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-3 md:w-1/3  mb-2 md:mb-0">
                        <div className='border p-4 rounded-lg flex flex-row w-full'>
                            <div className="flex w-1/4  items-center justify-center">
                                <svg
                                    className="w-12 h-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="green"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col w-3/4 ">
                                <h6
                                    className="mb-0 ml-4 text-sm text-black dark:text-gray-400"
                                >
                                    Sentimen Positif
                                </h6>
                                <p
                                    className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                                >
                                    {sentimenSum.sentimen_pos_total}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-3 md:w-1/3  mb-2 md:mb-0">
                        <div className='border p-4 rounded-lg flex flex-row w-full'>
                            <div className="flex w-1/4  items-center justify-center">
                                <svg
                                    className="w-12 h-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="red"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col w-3/4 ">
                                <h6
                                    className="mb-0 ml-4 text-sm text-black dark:text-gray-400"
                                >
                                    Sentimen Negatif
                                </h6>
                                <p
                                    className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                                >
                                    {sentimenSum.sentimen_neg_total}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* tabel */}
            <div className="w-full px-3 md:mb-0">
                <div className='text-base py-3 font-semibold flex justify-between items-center'>
                    <div>
                        Daftar Tweet
                    </div>
                </div>
                <div className='overflow-y-scroll h-96 border rounded-lg'>

                    <Table >
                        <Table.Head>
                            <Table.HeadCell>
                                Tanggal
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
                        <Table.Body>
                            {filteredTweet.map((row) => (
                                <Table.Row
                                    key={row.id}
                                    className={row.sentimen !== 'positif' ? row.sentimen === 'negatif' ? 'bg-rose-50' : 'bg-white' : 'bg-emerald-50'}
                                >
                                    <Table.Cell>
                                        <div className='w-8'>
                                            {row.created_date}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell >
                                        <div className='w-16 truncate'>
                                            {row.username}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell >
                                        <div className='w-80'>
                                            {row.text}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell

                                    >
                                        {row.sentimen}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>

        </div>
    )
}

export default SentimenChartCardHome