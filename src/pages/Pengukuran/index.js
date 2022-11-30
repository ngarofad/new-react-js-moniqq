import React, { useEffect, useState } from 'react'
import { Navbar, Button, Flowbite, DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'
import FilterQos from './components/FilterQos'

//import { Doughnut, Bar, Line } from 'react-chartjs-2';
//import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import InputFilterTweetHome from './components/InputFilterTweetHome';
import SentimenChartCardHome from './components/SentimenChartCardHome';
import CekQoS from './components/CekQoS';
//Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const Pengukuran = () => {
    useEffect(() => {
        document.title = "Pengukuran - MONIQQ";
    }, []);

    const [filteredTweet, setFilteredTweet] = useState([])
    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])
    const [cardHasilSentimen, setCardHasilSentimen] = useState(false);

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
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar
                                    </div>
                                </li>
                            </Link>
                            <Link to='/pengukuran'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Pengukuran
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <div className='container flex flex-col items-center justify-center mt-16'>
                <div className='w-full md:w-3/4 flex flex-col '>

                    {/* QOS */}
                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Pengukuran Kualitas Koneksi Internet ISP (QoS)</h5>
                        <p className='text-base font-regular mb-4 leading-loose text-gray-700'>
                            Kualitas koneksi internet (<i>Quality of Service</i>) secara teknis dapat diukur dengan beberapa parameter, seperti
                            <span className='font-semibold italic'> Throughput</span>,
                            <span className='font-semibold italic'> Delay/Latency</span>,
                            <span className='font-semibold italic'> Jitter</span>, dan
                            <span className='font-semibold italic'> Packet Loss</span>.
                        </p>

                        {/* ukur masukan user */}
                        <div className='mt-12 mb-12'>
                            <h6 className='text-xl font-bold mb-5'>Cek Internet Anda</h6>
                            {/* pengantar */}
                            <div className='text-base my-4 font-regular leading-relaxed  text-gray-700 flex justify-between items-center'>
                                <div>
                                    Anda dapat memeriksa nilai standar kualitas koneksi pada internet Anda secara mandiri.
                                    Silakan ikuti langkah-langkah berikut.
                                    <span className="">
                                        <ol className="list-decimal px-8 ">
                                            <li>
                                                Masuk ke dalam halaman
                                                <a className="text-blue-800 hover:text-blue-900 underline"
                                                    href="https://www.speedtest.net/"
                                                    target="_blank" rel="noopener noreferrer"
                                                > speedtest.net </a>
                                                terlebih dahulu.
                                            </li>
                                            <li>
                                                Ukur parameter-parameter kualitas koneksi internet (QoS) Anda dan catat hasilnya.
                                            </li>
                                            <li>
                                                Masukkan hasil pengukuran tersebut pada kolom-kolom pengecekan di bawah.
                                            </li>
                                            <li>Lihat hasil pengecekan standar pada komponen yang akan tampil di bawahnya.</li>
                                        </ol>
                                    </span>
                                </div>
                            </div>
                            {/* cek qos manual */}
                            <CekQoS />
                            {/* saran */}
                            <div className='mt-4'>
                                <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                    <div>
                                        Jika Hasil Pengukuran QoS Tidak Sesuai Harapan
                                    </div>
                                </div>
                                <p className='text-base font-regular mb-2 leading-relaxed text-gray-600'>
                                    Jangan terburu-buru memberikan komplain kepada ISP ketika
                                    hasil pengukuran QoS tidak sesuai standar atau yang Anda inginkan.
                                </p>
                                <div>
                                    <ol className="list-decimal leading-loose px-8  text-gray-600">
                                        <li>
                                            Pastikan bahwa perangkat Anda, seperti <i>smartphone</i>, laptop, komputer, dan router dalam keadaan yang prima.
                                        </li>
                                        <li>
                                            Pastikan perangkat tidak sedang menjalankan proses lain yang membebani jaringan, seperti <i>download</i> atau <i>streaming</i> video.
                                        </li>
                                        <li>
                                            Pastikan jumlah total pengguna internet di tempat Anda sesuai dengan anjuran dari ISP.
                                        </li>
                                    </ol>
                                </div>

                                <p className='text-base font-regular mb-4 leading-loose text-gray-600'>
                                    Jika Anda telah melakukan Langkah-langkah di atas,
                                    tetapi hasil pengukuran QoS masih tidak sesuai standar atau yang Anda inginkan.
                                    Segera hubungi <i> customer service </i> dari ISP yang Anda langgan untuk mengajukan perbaikan.
                                </p>

                            </div>
                        </div>
                        {/* contoh pengukuran */}
                        <div className=''>
                            <h6 className='text-xl font-bold mb-5'>Contoh Pengukuran Quality of Service dari ISP</h6>
                            <p className='text-base font-regular mb-4 leading-loose text-gray-600'>
                                Contoh pengukuran <i>Quality of Service</i> secara teknis melalui beberapa parameter, seperti
                                <span className=' italic'> Throughput</span>,
                                <span className=' italic'> Delay/Latency</span>,
                                <span className=' italic'> Jitter</span>, dan
                                <span className=' italic'> Packet Loss</span>.
                                dapat dilihat pada grafik berikut.
                            </p>

                            {/* filter & chart*/}
                            <div className='p-4 border rounded-xl'>
                                <FilterQos />
                            </div>
                            <div className='my-10'>
                            </div>
                        </div>
                    </div>
                    {/* QoE */}
                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Pengukuran Pendapat Pengguna ISP (QoE)</h5>
                        <div className='text-base my-4 font-regular leading-loose flex justify-between items-center  text-gray-600' >
                            <div>
                                Pendapat pengguna ISP yang menjadi object analisis sentimen adalah pendapat pengguna ISP fixed broadband di sosial media Twitter.
                                Tweet pendapat pengguna diambil berdasarkan kata kunci nama ISP.
                            </div>
                        </div>
                        <div className='mt-8 mb-8'>
                            <InputFilterTweetHome
                                setFilteredTweet={setFilteredTweet}
                                setSentimenSum={setSentimenSum}
                                setSentimenDaily={setSentimenDaily}
                                setCardHasilSentimen={setCardHasilSentimen}
                            />
                            {cardHasilSentimen &&
                                <SentimenChartCardHome
                                    sentimenDaily={sentimenDaily}
                                    sentimenSum={sentimenSum}
                                    filteredTweet={filteredTweet} />
                            }
                        </div>
                        {/* kecenderungan */}
                        <div className='my-6 '>
                            <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                <div>
                                    Kecenderungan Sentimen <i>Tweet</i>
                                </div>
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Anda akan menemui banyak pendapat pengguna ISP di Twitter yang cenderung memiliki sentimen negatif.

                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>

                                Berdasarkan jurnal "<i>Bad is Stronger than Good</i>" yang ditulis oleh
                                Baumeister et al.<span className='text-xs'><sup >[2]</sup></span>.

                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    secara alamiah manusia cenderung lebih terpengaruh oleh pengalaman buruk daripada pengalaman baik.
                                    Pengalaman buruk juga lebih menonjol dan cenderung bertahan lama di pikiran manusia.
                                </p>
                            </div>
                            <p className='text-base font-regular my-4 leading-relaxed text-gray-700'>
                                Oleh karena itu, Pelanggan akan lebih cenderung menulis ulasan negatif daripada ulasan positif.
                            </p>
                            {/* <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    Jadi,
                                    <span className='font-semibold '> waktu yang diperlukan </span>
                                    mulai saat Anda memberikan perintah hingga konten termuat disebut
                                    <span className='font-semibold italic'> Delay </span>
                                    .
                                </p>
                            </div> */}
                        </div>
                        {/* saran */}
                        <div className='mt-6 mb-12'>
                            <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                <div>
                                    Menyikapi Pendapat di Twitter
                                </div>
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Anda harus bijak dalam menyikapi pendapat pengguna ISP di Twitter.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Berdasarkan penelitian
                                <a href="https://biz.source.colostate.edu/negative-online-reviews-impact-study/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline"
                                > Qahri-Saremi, H.
                                </a> yang dirangkum oleh Sylte, A.<span className='text-xs'><sup >[3]</sup></span> respon yang dapat Anda lakukan terhadap pendapat yang ada di internet adalah
                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    Hindari respons emosional yang alami terhadap informasi negatif dan berpikir kritis tentang seluruh informasi yang tersedia berdasarkan tujuan Anda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Daftar Pustaka</h5>
                        {/* saran */}
                        <div className='mt-8 mb-12'>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [1]  Apriadi, et al.
                                <a href="https://perpustakaan.ft.unram.ac.id/index.php?p=show_detail&id=7485"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline"
                                > <i>Analisis QoS (Quality of Service) Jaringan Internet Kampus (Studi Kasus : Fakultas Teknik Universitas Mataram)</i>
                                </a>
                                . Jurnal Fakultas Teknik: Universitas Mataram (2017).
                            </p>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [2]  Baumeister, R. F., et al. <i>Bad is Stronger than Good</i>. Review of General Psychology, 5(4), 323–370. (2001).
                            </p>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [3] Sylte, A. <i>Why negative reviews could have more of an impact on some of the most important customers </i>[online].
                                Available:
                                <a href="https://biz.source.colostate.edu/negative-online-reviews-impact-study/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline"
                                > https://biz.source.colostate.edu/negative-online-reviews-impact-study/
                                </a>
                            </p>

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

export default Pengukuran