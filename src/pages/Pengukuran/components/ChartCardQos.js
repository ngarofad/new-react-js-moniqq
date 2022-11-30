import React from "react";
import { Bar } from 'react-chartjs-2';
import ClipLoader from "react-spinners/ClipLoader";
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const ChartCardQos = ({ loading, recapFilteredQos, recapPerCustomer }) => {

    const databarmulti = {
        labels: recapPerCustomer.map((r, index) => `Pelanggan ${index + 1}`),
        datasets: [
            {
                label: `Rata-Rata (${recapFilteredQos.unit})`,
                data: recapPerCustomer.map(r => r.average_value),
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },
            {
                label: `Maximal (${recapFilteredQos.unit})`,
                data: recapPerCustomer.map(r => r.max_value),
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: `Minimal (${recapFilteredQos.unit})`,
                data: recapPerCustomer.map(r => r.min_value),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: `Std Deviasi (${recapFilteredQos.unit})`,
                data: recapPerCustomer.map(r => r.std_deviation),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],

    };

    return (
        <div className=' p-3 border rounded-lg m-3'>
            <div className="flex flex-wrap mx-0 mb-2">
                {
                    loading ?
                        <ClipLoader color={"#d2d2d2"} loading={loading} size={80}
                            aria-label="Loading Spinner" data-testid="loader"
                        />
                        :
                        <div className="w-full md:w-full p-3 mb-1 md:mb-0">
                            <div className='h-96'>
                                <Bar data={databarmulti} options={{ maintainAspectRatio: false, }} />
                            </div>
                        </div>
                }
            </div>
            <div className="flex flex-wrap mx-0 mb-2">
                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                        <div className='flex text-base'>
                            Rata-rata
                        </div>
                        {
                            loading ?
                                <ClipLoader color={"#d2d2d2"} loading={loading} size={30}
                                    aria-label="Loading Spinner" data-testid="loader"
                                />
                                :

                                <div className='flex text-lg font-bold'>
                                    {recapFilteredQos.overall_average} {recapFilteredQos.unit}
                                </div>
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                        <div className='flex text-base'>
                            Standar
                        </div>
                        {
                            loading ?
                                <ClipLoader color={"#d2d2d2"} loading={loading} size={30}
                                    aria-label="Loading Spinner" data-testid="loader"
                                />
                                :
                                <div className='flex text-lg font-bold'>
                                    {recapFilteredQos.category}
                                </div>
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                        <div className='flex text-base'>
                            Indeks Penilaian
                        </div>
                        {
                            loading ?
                                <ClipLoader color={"#d2d2d2"} loading={loading} size={30}
                                    aria-label="Loading Spinner" data-testid="loader"
                                />
                                :
                                <div className='flex text-lg font-bold'>
                                    {recapFilteredQos.index_rating}
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mx-0 mb-2">
                <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                        <div className='flex text-base'>
                            Minimal
                        </div>
                        {
                            loading ?
                                <ClipLoader color={"#d2d2d2"} loading={loading} size={30}
                                    aria-label="Loading Spinner" data-testid="loader"
                                />
                                :
                                <div className='flex text-lg font-bold'>
                                    {recapFilteredQos.overall_min_value} {recapFilteredQos.unit}
                                </div>
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                        <div className='flex text-base'>
                            Maximal
                        </div>
                        {
                            loading ?
                                <ClipLoader color={"#d2d2d2"} loading={loading} size={30}
                                    aria-label="Loading Spinner" data-testid="loader"
                                />
                                :
                                <div className='flex text-lg font-bold'>
                                    {recapFilteredQos.overall_max_value} {recapFilteredQos.unit}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartCardQos