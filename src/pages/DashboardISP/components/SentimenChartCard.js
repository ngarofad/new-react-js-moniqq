import React, { useRef, useCallback, useEffect, useState } from 'react'

import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'





Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement);

const SentimenChartCard = ({ sentimenDaily, sentimenSum }) => {
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
                backgroundColor: "rgba(0,200,132,0.5)",
                borderColor: "rgba(0,200,132,0.5)"
            },
            {
                label: "Negatif",
                data: sentimenDaily.map(s => s.sentimen_neg),
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    };

    const refDonut = useRef(null);
    const downloadImageDonut = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart-donut.png"
        link.href = refDonut.current.toBase64Image();
        link.click();
    }, [])

    const refLine = useRef(null);
    const downloadImageLine = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart-line.png"
        link.href = refLine.current.toBase64Image();
        link.click();
    }, [])

    // const [persenPositif, setPersenPositif] = useState();
    // const [persenNegatif, setPersenNegatif] = useState();

    // useEffect(() => {
    //     let per_neg = (
    //         (Number(sentimenSum.sentimen_neg_total) / Number(sentimenSum.sentimen_all_total)) * 100
    //     );
    //     let per_neg_normalized = per_neg.toFixed(0);
    //     setPersenNegatif(per_neg_normalized)
    //     console.log(persenNegatif)
    //     let per_pos = (
    //         (Number(sentimenSum.sentimen_pos_total) / Number(sentimenSum.sentimen_all_total)) * 100
    //     );
    //     let per_pos_normalized = per_pos.toFixed(0);
    //     setPersenPositif(per_pos_normalized)
    //     console.log(persenNegatif)
    // });

    return (
        <div>
            <div className="flex mx-0 flex-row-reverse md:flex-row flex-wrap ">
                <div className="w-full pb-5 pt-0 md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            Persentase
                        </div>
                        <div>
                            <button onClick={downloadImageDonut} type="button" className="focus:outline-none text-white
                             bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Download
                            </button>
                        </div>
                    </div>
                    <p className='text-sm font-regular mb-4 leading-relaxed text-gray-700'>
                        Persentase seluruh jenis sentimen <i>tweet</i>.
                    </p>
                    <div className='border h-96 p-4 rounded-lg flex flex-col  w-full justify-around'>
                        <div className='flex'>
                            <Doughnut ref={refDonut} data={datadonut} />
                        </div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-2xl font-bold text-green-500'>
                                {sentimenSum.sentimen_pos_total_persen}%
                            </div>
                            <div className='text-2xl font-bold text-red-500'>
                                {sentimenSum.sentimen_neg_total_persen}%
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full pb-5 pt-0 md:w-2/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            <i>Trend</i>
                        </div>
                        <div>
                            <button onClick={downloadImageLine} type="button" className="focus:outline-none text-white
                             bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Download
                            </button>
                        </div>
                    </div>
                    <p className='text-sm font-regular mb-4 leading-relaxed text-gray-700'>
                        Grafik <i>trend</i> jumlah <i>tweet</i> dan jenis sentimen dari <i>tweet</i> yang dihitung per hari.
                    </p>
                    <div className='border h-96 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Line ref={refLine} data={dataline} options={
                            {
                                maintainAspectRatio: false,
                                scales: {
                                    y: { beginAtZero: true, title: { display: true, text: 'Jumlah Tweet', } },
                                    x: { title: { display: true, text: 'Tanggal', } }
                                }
                            }
                        } />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SentimenChartCard