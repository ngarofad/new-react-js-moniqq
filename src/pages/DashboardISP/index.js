import React, { useRef, useState, useEffect } from 'react'
import { logoMoniqq } from '../../assets';
import { useNavigate } from 'react-router-dom'
import { authApi } from '../../api';

import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import TableTweet from './components/TableTweet';
import InputFilterTweet from './components/InputFilterTweet';
import SentimenSumCard from './components/SentimenSumCard';
import SentimenChartCard from './components/SentimenChartCard';
import { useReactToPrint } from 'react-to-print'

import TweetToPrint from './components/TweetToPrint';
import KataToPrint from './components/KataToPrint';
import SentimenToPrint from './components/SentimenToPrint';
import TableSentimen from './components/TableSentimen';
import ErrorForbiddenModal from './components/ISPModal';

Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement);

const DashboardISP = () => {
    // untuk ubah title
    useEffect(() => {
        document.title = "Dashboard ISP - MONIQQ";
        startOnMount()
    }, []);



    const navigate = useNavigate()
    const [providerName, setProviderName] = useState('')
    const [showErrorForbiddenModal, setShowErrorForbiddenModal] = useState(false)

    const startOnMount = async () => {
        try {
            //setLoading(true)
            const response = await authApi.whoami()
            console.log(response.data)
            if (response.data.role === "isp") {
                setProviderName(response.data.isp_name)
            } else {
                //return navigate("/login")
                setShowErrorForbiddenModal(true)
            }
        } catch (err) {
            console.log("ERROR")
            setShowErrorForbiddenModal(true)
            //return navigate("/login")
        }
        //setLoading(false)
    }

    const handleSignOut = async (e) => {
        e.preventDefault()
        try {
            //setLoading(true)
            const response = await authApi.logout()
            console.log(response.data)
            return navigate("/login")
        } catch (err) {
            console.log(err.response.data)
            return navigate("/")
        }
        //setLoading(false)
    }


    // state untuk open sidebar
    const [openSidebars, setOpenSidebars] = useState(false);
    // contoh data donat
    // const datadonut = {
    //     labels: [
    //         'Positif',
    //         'Negatif',

    //     ],
    //     datasets: [{
    //         label: 'My First Dataset',
    //         data: [300, 50],
    //         backgroundColor: [
    //             'rgba(0,200,132,0.8)',
    //             'rgba(255, 99, 132, 0.8)',
    //         ],
    //         hoverOffset: 4
    //     }]
    // };
    // // contoh data line
    // const dataline = {
    //     labels: ["Jan", "Feb", "Mar", "Feb", "Mar", "Feb", "Mar", "Feb", "Mar"],
    //     datasets: [
    //         {
    //             label: "Positif",
    //             data: [33, 53, 85, 53, 85, 53, 85, 53, 85,],
    //             fill: false,
    //             backgroundColor: "rgba(0,200,132,0.8)",
    //             borderColor: "rgba(0,200,132,0.8)"
    //         },
    //         {
    //             label: "Negatif",
    //             data: [33, 25, 35, 25, 35, 25, 35, 25, 35,],
    //             fill: false,
    //             backgroundColor: 'rgba(255, 99, 132, 0.8)',
    //             borderColor: 'rgba(255, 99, 132, 0.8)',
    //         }
    //     ]
    // };
    const [filteredTweet, setFilteredTweet] = useState([])
    const [kataNegatif, setKataNegatif] = useState([])
    const [kataPositif, setKataPositif] = useState([])
    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])
    const [tanggalMulaiLaporan, setTanggalMulaiLaporan] = useState("")
    const [tanggalAkhirLaporan, setTanggalAkhirLaporan] = useState("")
    const [lokasiLaporan, setLokasiLaporan] = useState("")
    const [kontenAnalisisSentimen, setKontenAnalisisSentimen] = useState(false)
    // contoh kolom
    // const columns = [
    //     { accessor: 'name', label: 'Name' },
    //     { accessor: 'age', label: 'Age' },
    //     { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
    //     { accessor: 'start_date', label: 'Start Date' },
    // ]

    // // contoh data table tweet
    // const rows = [
    //     { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    //     { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    //     { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    //     { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    //     { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    //     { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    //     { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    //     { id: 8, name: null, age: null, is_manager: null, start_date: null },
    // ]
    const colKata = [
        { accessor: 'kata', label: 'Kata' },
        { accessor: 'frekuensi', label: 'Frekuensi' },
    ]

    const rowKataPositif = kataPositif
    const rowKataNegatif = kataNegatif

    const colTweet = [
        { accessor: 'created_date', label: 'Tanggal' },
        { accessor: 'username', label: 'Username' },
        { accessor: 'text', label: 'Tweet' },
        { accessor: 'sentimen', label: 'Sentimen' },
    ]

    const rowTweet = filteredTweet

    const colSentimen = [
        { accessor: 'created_date', label: 'Tanggal' },
        { accessor: 'sentimen_pos', label: 'Tweet Positif' },
        { accessor: 'sentimen_neg', label: 'Tweet Negatif' },
        { accessor: 'sentimen_sum', label: 'Jumlah Tweet/Hari' },
        // { accessor: 'sentimen_pos_persen', label: 'Presentase Positif' },
        // { accessor: 'sentimen_neg_persen', label: 'Presentase Negatif' },
    ]

    const rowSentimen = sentimenDaily
    const tweetPrintComponentRef = useRef();
    const handleTweetPrint = useReactToPrint({
        content: () => tweetPrintComponentRef.current,
        documentTitle: ':Laporan-analisis-sentimen-twitter-daftar-tweet',
        // onAfterPrint: () => alert('sukses')
    })
    const sentimenPrintComponentRef = useRef();
    const handleSentimenPrint = useReactToPrint({
        content: () => sentimenPrintComponentRef.current,
        documentTitle: ':Laporan-analisis-sentimen-twitter-daftar-sentimen',
        // onAfterPrint: () => alert('sukses')
    })
    const kataPrintComponentRef = useRef();
    const handleKataPrint = useReactToPrint({
        content: () => kataPrintComponentRef.current,
        documentTitle: ':Laporan-analisis-sentimen-twitter-daftar-kata',
        // onAfterPrint: () => alert('sukses')
    })

    return (
        <div className="min-h-screen lg:flex">
            {/* sidebar */}
            <aside
                className={` ${openSidebars ? "translate-x-0 ease-in opacity-100" : "-translate-x-full ease-out opacity-0 "
                    } w-72 absolute inset-0 transform lg:transform-none lg:opacity-100 duration-200 lg:relative z-10 bg-white border text-white min-h-screen px-3`}

                aria-label="Sidebar"

            >
                <div className="flex h-16 justify-between">
                    <div className="flex p-3 flex-col items-center justify-center">
                        <img className="h-6 w-32" src={logoMoniqq} alt="" />
                    </div>
                    <button
                        className="p-2 focus:outline-none focus:bg-red-800 hover:bg-gray-200 rounded-md lg:hidden"
                        onClick={() => setOpenSidebars(!openSidebars)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
                >
                    <ul className="space-y-2">
                        <li className="border-b-2">
                            <div
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3 ">Quality of Experience</span>
                            </div>
                        </li>

                        <li>
                            <div
                                onClick={handleSignOut}
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        clipRule="evenodd"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside >
            {/* konten */}
            <div className="relative z-0 lg:flex-grow">
                <div className="flex flex-col gap-20">
                    {/* navbar */}
                    <header className="flex bg-blue-900 items-center px-3 h-16">
                        <button
                            className="p-2 focus:outline-none text-white focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden"
                            onClick={() => setOpenSidebars(!openSidebars)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className='flex w-full justify-between'>
                            <div className="flex text-2xl font-semibold text-white p-4"
                            >Dashboard
                            </div>
                            <div className="flex text-xl font-semibold text-white p-4"
                            >{providerName.toUpperCase()}
                            </div>
                        </div>
                    </header>

                    {/* isine */}
                    <section className="mb-12 container">
                        {/* judul */}
                        <div
                            className="mx-auto text-left md:max-w-screen-lg lg:max-w-screen-lg"
                        >
                            <div className="flex flex-col py-3 mb-4">
                                <span className="font-semibold text-4xl ">
                                    Analisis Sentimen
                                </span>
                                <span className="text-base font-regular leading-relaxed text-gray-700 mt-4 w-full md:w-5/6">
                                    Halaman ini digunakan untuk melakukan analisis pendapat pelanggan {providerName.toUpperCase()} (<i>Quality of Experience</i>) yang ada di sosial media Twitter.
                                </span>
                                <span className="text-base font-regular mb-4 leading-relaxed text-gray-700 mt-4 w-full md:w-5/6">
                                    Langkah-langkah.
                                    <ol className="list-decimal py-3 px-8 ">
                                        <li>Silakan pilih periode tanggal <i>tweet</i> yang ingin Anda analisis.</li>
                                        <li>Lihat hasil analisis sentimen pendapat pelanggan Anda di bagian hasil.</li>
                                    </ol>
                                </span>
                            </div>
                        </div>
                        <div className='border w-full mb-14'></div>
                        {/*bagian input */}
                        <div className=''>
                            <div className='text-2xl font-semibold py-3'>
                                Pilih Periode <span className='italic'>Tweet</span>
                            </div>
                            <div className='w-full my-8'></div>
                            <div className='border rounded-xl p-4'>
                                {/* input filter */}
                                <div className='text-lg p-3 font-medium'>
                                    Filter
                                </div>
                                <InputFilterTweet
                                    setTanggalAkhirLaporan={setTanggalAkhirLaporan}
                                    setTanggalMulaiLaporan={setTanggalMulaiLaporan}
                                    setLokasiLaporan={setLokasiLaporan}
                                    setFilteredTweet={setFilteredTweet} setSentimenSum={setSentimenSum}
                                    setSentimenDaily={setSentimenDaily} setKataNegatif={setKataNegatif} setKataPositif={setKataPositif}
                                    setKontenAnalisisSentimen={setKontenAnalisisSentimen} providerName={providerName}
                                />
                            </div>
                        </div>
                        <div className='border w-full my-14'></div>
                        {/* hasil analisis senimen*/}
                        {
                            kontenAnalisisSentimen
                            &&
                            <div>
                                <div className='text-2xl py-3 font-semibold'>
                                    Hasil Analisis Sentimen
                                </div>
                                <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                    Hasil analisis sentimen (<i>tweet</i>) pendapat pelanggan {providerName.toUpperCase()} yang ada di sosial media Twitter
                                    dengan lokasi {lokasiLaporan} pada {tanggalMulaiLaporan} hingga {tanggalAkhirLaporan} adalah sebagai berikut.
                                </p>
                                <div className='w-full my-8'></div>
                                {/* jumlah sentimen total */}
                                <div className='rounded-xl border p-3'>
                                    <div className='text-xl p-3 font-semibold'>
                                        Jumlah Total Sentimen Tweet
                                    </div>
                                    <p className='text-sm px-3 font-regular mb-4 leading-relaxed text-gray-700'>
                                        Jumlah keseluruhan <i>tweet</i>  dan jenis sentimen dari <i>tweet</i> adalah sebagai berikut.
                                    </p>
                                    {/* hasil tweet kecil=kecil */}
                                    <SentimenSumCard sentimenSum={sentimenSum} />
                                </div>
                                <div className='w-full my-8'></div>
                                {/*  chart */}
                                <div className='border rounded-xl p-3'>
                                    <div className='text-xl p-3 font-semibold'>
                                        Grafik
                                    </div>
                                    <SentimenChartCard sentimenDaily={sentimenDaily} sentimenSum={sentimenSum} />
                                </div>
                                <div className='w-full my-8'></div>
                                {/* tabel sentimen */}
                                <div className='border rounded-xl px-3 pt-5 pb-0'>
                                    <div className='flex justify-between items-center '>
                                        <div className='text-xl p-3  font-semibold'>
                                            Sentimen <i>Tweet</i> Harian
                                        </div>

                                        <div className='p-3'>
                                            <button type="button" onClick={handleSentimenPrint} className="focus:outline-none text-white
                             bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                    <p className='text-sm px-3 font-regular mb-4 leading-relaxed text-gray-700'>
                                        Rincian dari jumlah <i>tweet</i>  dan jenis sentimen dari <i>tweet</i> setiap harinya dengan lokasi {lokasiLaporan} pada {tanggalMulaiLaporan} hingga {tanggalAkhirLaporan} dapat dilihat pada tabel berikut.
                                    </p>
                                    <div className='p-3'>
                                        <TableSentimen rows={rowSentimen} columns={colSentimen} />
                                    </div>
                                </div>
                                <div className='w-full my-8'></div>

                                {/* tabel tweet*/}
                                <div className='border rounded-xl px-3 pt-5 pb-0'>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-xl p-3 font-semibold'>
                                            Daftar Tweet
                                        </div>
                                        <div className='p-3'>
                                            <button type="button" onClick={handleTweetPrint} className="focus:outline-none text-white
                             bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                    <p className='text-sm px-3 font-regular mb-4 leading-relaxed text-gray-700'>
                                        Rincian dari <i>tweet</i> pelanggan {providerName.toUpperCase()} dengan lokasi {lokasiLaporan} pada {tanggalMulaiLaporan} hingga {tanggalAkhirLaporan} dapat dilihat pada tabel berikut.
                                    </p>
                                    <div className='p-3' >
                                        <TableTweet rows={rowTweet} columns={colTweet} />
                                    </div>
                                </div>
                                <div className='w-full my-8'></div>

                                {/* tabel kata kata */}
                                <div className='border rounded-xl px-3 pt-5 pb-0'>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-xl p-3 font-semibold'>
                                            Daftar Kata
                                        </div>
                                        <div className='p-3'>
                                            <button type="button" onClick={handleKataPrint} className="focus:outline-none text-white
                             bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mx-0 ">
                                        <div className="w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                            <div className='text-lg py-3 font-medium'>
                                                Kata Positif
                                            </div>
                                            <p className='text-sm font-regular mb-4 leading-relaxed text-gray-700'>
                                                Kata-kata yang terkandung dalam <i>tweet</i> positif dengan lokasi {lokasiLaporan} pada {tanggalMulaiLaporan} hingga {tanggalAkhirLaporan} dapat dilihat pada tabel berikut.
                                            </p>
                                            <TableTweet rows={rowKataPositif} columns={colKata} />
                                        </div>
                                        <div className="w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                            <div className='text-lg py-3 font-medium'>
                                                Kata Negatif
                                            </div>
                                            <p className='text-sm font-regular mb-4 leading-relaxed text-gray-700'>
                                                Kata-kata yang terkandung dalam <i>tweet</i> negatif dengan lokasi {lokasiLaporan} pada {tanggalMulaiLaporan} hingga {tanggalAkhirLaporan} dapat dilihat pada tabel berikut.
                                            </p>
                                            <TableTweet rows={rowKataNegatif} columns={colKata} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* untuk print */}
                        {/* ------------------------------------ */}
                        <div>
                            <div className='hidden'>
                                <div ref={sentimenPrintComponentRef}>
                                    <SentimenToPrint tanggalAkhirLaporan={tanggalAkhirLaporan} tanggalMulaiLaporan={tanggalMulaiLaporan} sentimenDaily={sentimenDaily} sentimenSum={sentimenSum} lokasiLaporan={lokasiLaporan} />
                                </div>
                            </div>
                            <div className='hidden'>
                                <div ref={kataPrintComponentRef}>
                                    <KataToPrint tanggalAkhirLaporan={tanggalAkhirLaporan} tanggalMulaiLaporan={tanggalMulaiLaporan} kataNegatif={kataNegatif} kataPositif={kataPositif} lokasiLaporan={lokasiLaporan} />
                                </div>
                            </div>
                            <div className='hidden'>
                                <div ref={tweetPrintComponentRef}>
                                    <TweetToPrint tanggalAkhirLaporan={tanggalAkhirLaporan} tanggalMulaiLaporan={tanggalMulaiLaporan} lokasiLaporan={lokasiLaporan} filteredTweet={filteredTweet} />
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------ */}


                    </section>
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
            { showErrorForbiddenModal && <ErrorForbiddenModal setShowModal={setShowErrorForbiddenModal}/>}
        </div >
    )
}

export default DashboardISP