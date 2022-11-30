import React, { useEffect, useState } from 'react'
import { Navbar, Button, Flowbite, DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'

import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import InputFilterTweetHome from './component/InputFilterTweetHome';
import SentimenChartCardHome from './component/SentimenChartCardHome';
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const BelajarQOS = () => {
    useEffect(() => {
        document.title = "Belajar Internet - MONIQQ";
    }, []);
    const [filteredTweet, setFilteredTweet] = useState([])

    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])

    const labels = ['Person1', 'Person2', 'Person3'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Maximal',
                data: [18, 23, 25,],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Minimal',
                data: [15, 12, 12],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Rata-Rata',
                data: [17, 18, 18],
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },

        ],

    };
    return (
        <div className='flex flex-col div dark:bg-gray-900  '>
            {/* navbar */}
            <header className="container p-0">
                <Navbar
                    fluid={true}
                    rounded={true}

                >
                    <div>
                        <Link to="/">
                            <img
                                src={logoMoniqq}
                                className="mr-3 h-5 w-24 "
                                alt="Flowbite Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        {/* <Flowbite>
                            <DarkThemeToggle />
                        </Flowbite>
                        <Navbar.Toggle /> */}

                    </div>
                    <Navbar.Collapse>
                        <ul
                            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <Link to='/'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Home
                                    </div>
                                </li>
                            </Link>
                            <Link to='/belajarqos'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar
                                    </div>
                                </li>
                            </Link>
                            <Link to='/pengukuran'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Pengukuran
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>


            <div className='container flex flex-col items-center justify-center sm:mt-10 md:mt-16 sm:mb-10 md:mb-16'>
                {/* konten */}
                <div className='w-full md:w-3/4 flex flex-col '>
                    {/* judul besar kualitas koneksi internet */}
                    <div className="my-4">
                        <h4 className='text-3xl font-bold my-5 dark:text-green-100'>Kualitas Koneksi Internet</h4>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Anda sebagai pengguna internet  pasti menginginkan kualitas koneksi yang
                            <span className='font-semibold'> cepat</span>,
                            <span className='font-semibold'> andal</span>, dan
                            <span className='font-semibold'> konsisten</span>.
                            Pengalaman yang <span className='font-semibold'> menyenangkan</span> saat menggunakan internet (<i>browsing</i>, <i>gaming</i>, dan <i>streaming</i>)
                            merupakan harapan setiap orang.
                        </p>

                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Namun, apakah Anda pernah mengalami internet yang lambat? <i>streaming</i> yang <i>buffering</i>? panggilan putus-putus? <i>glitch</i> saat bermain <i>game</i>?
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Lalu, apa yang menyebabkan hal tersebut? bagaimana cara mengukur kualitas koneksi internet?
                        </p>
                    </div>

                    {/* judul kecil kualitas koneksi internet */}
                    <div className='my-4'>
                        <h5 className='text-2xl font-bold mb-5'>Bagaimana Cara Mengukur Kualitas Koneksi Internet?</h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Kualitas koneksi internet  (<i>Quality of Service</i>) secara teknis dapat diukur dengan beberapa parameter, seperti
                            <span className='font-semibold italic'> Throughput</span>,
                            <span className='font-semibold italic'> Delay/Latency</span>,
                            <span className='font-semibold italic'> Jitter</span>, dan
                            <span className='font-semibold italic'> Packet Loss</span>.
                        </p>
                        <ul className="list-disc mx-5 mb-16">
                            <li className='mb-2'>
                                <span className='italic'>Throughput </span>dan<span className='italic'> Delay/Latency </span> digunakan untuk mengukur <span className=' font-semibold '> “kecepatan”</span>.
                            </li>
                            <li className='mb-2'>
                                <span className='italic'>Packet Loss </span>digunakan untuk mengukur<span className=' font-semibold '> "keandalan”</span>.
                            </li>
                            <li className='mb-2'>
                                <span className='italic'>Jitter </span> digunakan untuk mengukur <span className=' font-semibold '> "konsistensi”</span>.
                            </li>
                        </ul>
                    </div>

                    {/* card parameter qos */}
                    <div className=''>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/throughput">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="fill-current text-white inline-block h-10 w-10 p-2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Throughput</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Throughput? Apa itu Bandwidth? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/delay">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                                    />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Delay</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Delay/Latency? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/jitter">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Jitter</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Jitter? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-3 md:w-1/2  mb-2 md:mb-0">
                                <Link to="/belajarqos/packetloss">
                                    <div className="mb-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex  items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Packet Loss</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Packet Loss? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* penjelasan lanjutan */}
                    <div className='my-4'>
                        <p className='text-base font-regular mt-8 mb-4 leading-relaxed text-gray-700'>
                            Selain dari kualitas teknis jaringan Penyedia Jasa Internet (ISP),
                            luaran dari parameter-parameter QoS ini juga tergantung pada faktor non-teknis, yaitu <strong>kebijakan, syarat, dan ketentuan </strong> dari ISP.
                        </p>
                        <p className='text-base font-regular mb-6 leading-relaxed text-gray-700'>
                            Anda juga perlu memeriksa <strong>kemampuan perangkat</strong> Anda dan <strong>status penyedia konten</strong> Anda.
                            Bisa jadi gangguan koneksi berasal dari perangkat yang tidak <i>support</i> dan penyedia konten yang <i>offline</i>.

                        </p>
                    </div>

                    {/* judul kecil pengukuran */}
                    <div className='my-4'>
                        <h5 className='text-2xl font-bold mb-5'>Pengukuran</h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Terdapat dua pengukuran terkait Penyedia Jasa Internet (ISP), yaitu <i>Quality of Service</i> (QoS) dan <i>Quality of Experience</i> (QoE).
                            Pengukuran QoS merupakan
                            <span className='font-semibold'> pengukuran teknis </span>
                            terkait parameter-parameter yang kualitas koneksi internet.
                            Pengukuran QoE merupakan
                            <span className='font-semibold'> pengukuran pendapat pengguna </span>
                            .

                        </p>

                    </div>

                    {/* card pengukuran */}
                    <div className='my-10'>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/pengukuran">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Quality of Service</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Berapa nilai Throughput, Delay, Jitter, Packet Loss Anda? Apakah Sesuai Standar?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/pengukuran">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                                    />
                                                </svg>


                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Quality of Experience</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Bagaimana pendapat pengguna Penyedia Jasa Internet di Twitter?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                {/* footer */}
                <footer
                    className="container p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
                >

                    <span
                        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© 2022 <a href="localhost:3000" className="hover:underline">MONIQQ</a>. All Rights
                        Reserved.
                    </span>
                </footer>

            </div>

        </div >
    )
}

export default BelajarQOS