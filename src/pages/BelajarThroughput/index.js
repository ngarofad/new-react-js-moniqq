import React, { useEffect } from 'react'
import { Navbar, Button, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, } from '../../assets'
import { Bar } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);
const BelajarThroughput = () => {
    useEffect(() => {
        document.title = "Belajar Throughput & Bandwidth - MONIQQ";
    }, []);
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
        <div className='flex flex-col div scroll-smooth  '>
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
                    <div className="flex md:order-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        <Navbar.Toggle />
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
            <div className='container mt-12'>
                <h4 className='text-3xl font-bold my-10'>Memahami <i>Throughput</i> dan <i>Bandwidth</i></h4>

            </div>

            <div className='container w-full flex flex-wrap justify-around '>
                <div className='w-full md:w-3/4 flex flex-col '>

                    {/* apa itu */}
                    <div className='my-4'>
                        <h5 id='apa-itu-throughput' className='text-xl font-bold mb-5'>
                            Apa itu
                            <span className='italic'> Throughput</span>
                            ?
                        </h5>
                        <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                            Mungkin Anda
                            <span className='font-semibold'> kurang familiar </span>
                            dengan istilah
                            <span className='font-semibold italic'> Throughput</span>
                            .
                            <span className='italic'> Throughput </span>
                            mungkin masih menjadi istilah yang asing, khususnya bagi masyarakat awam.
                        </p>
                    </div>
                    {/* apa itu */}
                    <div className='my-4'>
                        <h5 id='apa-itu-bandwidth' className='text-xl font-bold mb-5'>
                            Bagaimana dengan istilah
                            <span className='italic'> Bandwidth</span>
                            ?
                        </h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Istilah
                            <span className='font-semibold italic'> Bandwidth </span>
                            mungkin lebih
                            <span className='font-semibold'> familiar </span>
                            bagi Anda.
                            Pasti Anda pernah mendengar istilah
                            <span className='italic'> Bandwidth </span>
                            saat hendak belangganan internet rumahan.
                        </p>
                    </div>
                    {/* apa itu */}
                    <div className='my-4'>
                        <h5 id='arti-throughput-bandwidth' className='text-xl font-bold mb-5'>
                            Arti
                            <span className='italic'> Throughput </span>
                            dan
                            <span className='italic'> Bandwidth</span></h5>
                        <p className='text-base font-regular mb-6 leading-relaxed text-gray-700'>
                            <span className='italic'>Bandwidth </span>
                            dan
                            <span className='italic'> Throughput </span>
                            adalah
                            <span className='font-semibold'> parameter </span>
                            yang digunakan untuk mengukur performa
                            <span className='font-semibold'> laju </span>
                            dari jaringan internet.
                            Keduanya dapat dinyatakan dalam
                            <span className='font-semibold'> satuan bps </span>
                            (bit/second) atau
                            <span className='font-semibold'> Bps </span>
                            (byte/second).
                        </p>
                        <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                            <span className='font-semibold '> Throughput </span>
                            merupakan
                            <span className='font-semibold '> jumlah data </span>
                            yang ditransfer dari sumber ke tujuan dalam jangka
                            <span className='font-semibold '> waktu tertentu</span>,
                            sedangkan
                            <span className='font-semibold '> Bandwidth </span>
                            merupakan
                            <span className='font-semibold '> kapasitas </span>
                            transfer
                            <span className='font-semibold '> maksimal </span>
                            yang dapat dilakukan oleh jaringan.
                        </div>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            <span className='italic'>Bandwidth </span>
                            dan
                            <span className='italic'> Throughput </span>
                            adalah dua konsep yang
                            <span className='font-semibold'> berbeda</span>,
                            tetapi masih
                            <span className='font-semibold'> saling terkait</span>.
                        </p>
                        <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                            <span className=' '> Throughput </span>
                            <span className='font-semibold '> tidak sama </span>
                            dengan
                            <span className=' '> Bandwidth </span>
                            .
                        </div>
                        <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                            Dengan memahami kedua istilah tersebut, Anda akan dapat memahami kualitas koneksi internet Anda secara
                            <span className='font-semibold'> komprehensif</span>
                            .
                        </p>
                    </div>
                    {/* salah paham */}
                    <div className='my-4'>
                        <h5 id='kesalahpahaman' className='text-xl font-bold mb-5'>Salah Paham</h5>
                        {/* throughput vs bandwidth */}
                        <div className='my-10'>
                            <h5 id='kesalahpahaman-tb' className='text-lg font-bold mb-5'>Throughput vs Bandwidth</h5>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Sering terjadi kesalahpahaman terkait dua istilah ini.
                                Yang paling sering ditemui adalah mengukur kecepatan dengan menggunakan <i>Bandwidth</i>.
                            </p>

                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Anda akan sering menjumpai
                                <span className='font-semibold'> ISP </span>
                                <span className='font-semibold'> mempromosikan </span>
                                produk internetnya
                                <span className='font-semibold'> berdasarkan besaran</span>
                                <span className='italic font-semibold'> Bandwidth </span>
                                yang tersedia.
                                Perlu diketahui, hal tersebut merupakan teknik pemasaran atau
                                <span className='font-semibold italic'> gimmick marketing </span>
                                dari ISP saja.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                ISP akan mempromosikan produk internetnya, seolah-olah performanya akan konstan
                                di batas maksimal tersebut pada setiap saat.
                            </p>
                            {/* <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                                <span className='font-semibold'>Seharusnya </span>
                                yang digunakan untuk mengukur kecepatan adalah
                                <span className='italic font-semibold'> Throughput</span>
                                .
                            </div> */}

                            <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                                <span className='font-semibold'>Hal yang perlu diluruskan </span>
                                adalah nilai atau luaran transfer data
                                <span className='font-semibold'> tidak akan selalu sama </span>
                                pada setiap saat seperti yang ditawarkan ISP.
                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                                Nilai
                                <span className=' font-semibold '> Throughput </span>
                                akan selalu
                                <span className='font-semibold '> lebih kecil </span>
                                atau sama dengan nilai
                                <span className=' font-semibold'> Bandwidth </span>
                                .
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Oleh karena itu, ISP sebenarnya mempromosikan produknya menggunakan kata
                                <span className='font-semibold italic'> "Up To"</span>.
                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                                <span className=' font-semibold '> "Up To" </span>
                                berarti
                                <span className='font-semibold '> sampai dengan </span>
                                atau
                                <span className=' font-semibold'> batas maksimal </span>
                                .
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Sebagai contoh, ISP menawari Anda produk internet dengan Bandwidth sebesar 20Mbps,
                                Maka, besar kecepatan atau throughput akan berada di bawah 20Mbps karena
                                20Mbps merupakan batas maksimal.
                            </p>
                        </div>
                        {/* bit vs byte */}
                        <div className='mt-16 mb-10'>
                            <h5 id='kesalahpahaman-bb' className='text-lg font-bold mb-5'>Byte vs Bit</h5>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Istilah Byte dan Bit juga sering menimbulkan kesalapahaman dalam mengukur performa internet.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Byte dan Bit sama-sama merupakan satuan dari data. Lalu apa perbedaannya?
                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                                <span className=' font-semibold '> 1 </span>
                                Byte
                                =
                                <span className=' font-semibold'> 8 </span>
                                Bit
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Byte juga dinotasikan sebagai huruf
                                <span className=' font-semibold'> "B" </span>
                                besar, sedangkan Bit dengan huruf
                                <span className=' font-semibold'> "b" </span>
                                kecil.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Biasanya, ISP mempromosikan produk internetnya dengan menggunakan satuan Bit.
                                Tentu angka yang besar akan lebih menarik dari sisi marketing.
                                Di lain sisi, satuan Byte digunakan dalam mekanisme transfer file.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Sebagai contoh, ISP menawarkan Bandwidth 20Mbps,
                                untuk mengetahui Throughput maksimal ketika melakukan download/upload adalah membagi nilainya dengan 8.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                <sup>20Mbps</sup>&frasl;<sub>8 </sub> = 2.5MBps
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Jadi, Throughput yang didapat adalah 2.5 MBps
                            </p>
                        </div>
                    </div>
                    {/* illustrasi */}
                    <div className='my-8'>
                        <h5 id='illustrasi-throughput-bandwidth' className='text-xl font-bold mb-5'>Illustrasi Throughput vs Bandwidth</h5>
                        <div>
                            <img
                                src={imageThroughput}
                                className="h-full w-full "
                                alt="Img Throughpt"
                            />
                        </div>

                        <h6 id='analogi-throughput-bandwidth' className='text-lg font-bold mb-5'>Analogi</h6>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Analogi yang dapat digunakan untuk menggambarkan
                            <span className='font-semibold'> hubungan </span>
                            antara keduanya adalah hubungan
                            <span className='font-semibold'> pipa </span>
                            dengan
                            <span className='font-semibold'> air</span>
                            .
                            <span className='italic'> Bandwidth </span>
                            sebagai pipa, sedangkan
                            <span className='italic'> Throughput </span>
                            sebagai air.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Jika pipa atau
                            <span className='italic'> Bandwidth </span>
                            <span className='font-semibold'>semakin besar</span>
                            , maka air atau
                            <span className='italic'> Throughput </span>
                            (data) yang dapat mengalir pada satu waktu juga
                            <span className='font-semibold'> semakin besar</span>
                            .
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Dengan kata lain, besar
                            <span className='font-semibold italic'> Bandwidth </span>
                            menentukan berapa banyak data yang dapat dikirim dan diterima perangkat pada satu waktu
                            (
                            <span className='font-semibold'>Batas Maksimal</span>
                            ),
                            sedangkan
                            <span className='font-semibold italic'> Throughput </span>
                            memberi tahu Anda jumlah data yang benar-benar
                            <span className='font-semibold'> ditransmisikan</span>.                        .
                        </p>
                        <h6 id='contoh-throughput-bandwidth' className='text-lg font-bold mb-5'>Contoh</h6>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Sebagai contoh, Anda saat ini sedang berlangganan sebuah produk internet dengan kapasitas
                            <span className='italic'> Bandwidth </span>
                            sebesar 10Mbps.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Lalu, Anda ingin mengunduh sebuah
                            <span className='italic'> file </span>
                            di internet.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Ketika Anda mengunduh
                            <span className='italic'> file </span>
                            tersebut,
                            <span className='italic'> browser </span>
                            Anda menunjukkan kecepatan sebesar 9,2Mbps.
                            Nilai 9.2Mbps inilah yang dimaksud dengan nilai
                            <span className='italic'> Throughput</span>
                            .
                        </p>
                    </div>
                    {/* nilai */}
                    <div className='my-4'>
                        <h5 id='nilai-throughput' className='text-xl font-bold mb-5'>Nilai <i>Throughput</i></h5>
                        {/* standar */}
                        <div className='my-6'>
                            <h6 id='nilai-throughput-standar' className='text-lg font-bold mb-4'>Standar</h6>

                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                                <span className='font-semibold '> Semakin besar </span>
                                nilai Throughput, maka
                                <span className='font-semibold '> semakin baik</span>
                                .
                            </div>
                            <p className='text-base font-regular mb-8 leading-relaxed text-gray-700'>
                                Berdasarkan penelitian Apriadi et al standar nilai
                                <span className='italic'> Jitter </span>
                                yang mengacu pada standar TIPHON (<i>Telecommunications and Internet Protocol Harmonization Over Networks </i>) adalah sebagai berikut<span className='text-xs'><sup >[1]</sup></span>.
                            </p>
                            <div className='flex mt-2 mb-16 justify-center'>
                                <Table hoverable={true}>
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Nilai
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Indeks
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Kategori
                                        </Table.HeadCell>

                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                75% &#60; x &le; 100%
                                            </Table.Cell>
                                            <Table.Cell>
                                                4
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sangat Bagus
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                50% &#60; x &le; 75%
                                            </Table.Cell>
                                            <Table.Cell>
                                                3
                                            </Table.Cell>
                                            <Table.Cell>
                                                Bagus
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                25% &#60; x &le; 50%
                                            </Table.Cell>
                                            <Table.Cell>
                                                2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sedang
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                &#60;25%
                                            </Table.Cell>
                                            {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                            <Table.Cell>
                                                1
                                            </Table.Cell>
                                            <Table.Cell>
                                                Buruk
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        {/* cara hitung */}
                        <div className='my-8'>
                            <h6 id='nilai-throughput-carahitung' className='text-lg font-bold mb-4'>Cara Hitung</h6>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Cara untuk mengetahui kategori kualitas
                                <span className='italic'> Throughput </span>
                                internet rumahan Anda adalah dengan
                                <span className='font-semibold'> membandingkan </span>
                                nilai pengukuran
                                <span className='italic'> Throughput </span>
                                dengan besaran
                                <span className='italic'> Bandwidth </span>
                                internet yang Anda langgan.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Sebagai contoh, Anda berlangganan internet rumahan dengan
                                <span className='italic'> Bandwidth </span>
                                10Mbps. Saat diukur,
                                <span className='italic'> Throughput </span>
                                yang dihasilkan adalah 9.2Mbps.
                                Perhitungannya adalah sebagai berikut.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                <sup>9.2Mbps</sup>&frasl;<sub>10Mbps</sub> x 100% = 92%
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Dengan nilai  <span className='italic'> Throughput </span>92%, maka internet rumahan Anda
                                masuk ke dalam kategori Sangat Bagus.
                            </p>
                        </div>

                    </div>

                    {/* non teknis */}
                    <div className='my-4'>
                        <h5 id='nilai-throughput-nonteknis' className='text-xl font-bold mb-4'>Faktor Non-teknis</h5>
                        <p className='text-base font-regular mb-8 leading-relaxed text-gray-700'>
                            Nilai
                            <span className='italic'> Throughput </span>
                            juga dipengaruhi oleh faktor non-teknis yaitu
                            <span className='font-semibold'> kebijakan, syarat, </span>
                            dan
                            <span className='font-semibold'> ketentuan </span>
                            dari ISP.
                            Contohnya adalah penerapan kebijakan FUP (<i> Fairplay Usage Policy </i> ) dan <i> Bandwidth</i>  Asimetris.
                        </p>
                        {/* fup */}
                        <div>
                            <h6 id='nilai-throughput-nonteknis-fup' className='text-base font-bold mb-4'>FUP (<i> Fairplay Usage Policy </i> )</h6>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                FUP (Fairplay Usage Policy) adalah
                                <span className='font-semibold'> pembatasan nilai <i>Bandwidth</i> </span>
                                ketika telah mencapai batas pemakaian (kuota).
                            </p>
                            <p className='text-base font-regular  mb-4 leading-relaxed text-gray-700'>
                                Sebagai contoh, Anda berlangganan Internet rumahan dengan
                                <span className='italic'> Bandwidth </span>
                                10Mbps.
                            </p>

                            <div className='flex justify-center my-12 '>
                                <Table hoverable={true}>
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Kuota
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Bandwidth
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                0 - 300GB
                                            </Table.Cell>
                                            <Table.Cell>
                                                10Mbps
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                300 - 400GB
                                            </Table.Cell>
                                            <Table.Cell>
                                                7.5Mbps
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                &#62; 400GB
                                            </Table.Cell>
                                            <Table.Cell>
                                                4Mbps
                                            </Table.Cell>
                                        </Table.Row>

                                    </Table.Body>
                                </Table>
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Seperti tabel di atas, Setelah Anda menggunakan kuota sebesar 300GB, maka nilai
                                <span className='italic'> Bandwidth </span>
                                anda dibatasi/diturunkan menjadi 75% (7,5 Mbps).
                            </p>
                            <p className='text-base font-regular  mb-10 leading-relaxed text-gray-700'>
                                Setelah itu, apabila pemakaian Anda melebihi 400GB, maka nilai
                                <span className='italic'> Bandwidth </span>
                                anda dibatasi/diturunkan menjadi 40% (4 Mbps) saja.
                            </p>
                        </div>
                        {/* asimetris */}
                        <div>
                            <h6 id='nilai-throughput-nonteknis-asimetris' className='text-base font-bold mb-4'><i>Bandwidth </i> Asimetris</h6>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                <i>Bandwidth </i> Asimetris adalah penerapan
                                <span className='font-semibold '> perbedaan alokasi <i>Bandwidth</i> </span>
                                tergantung aktivitasnya, yaitu <i>Download</i> dan <i> Upload</i>.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Hal ini  akan menyebabkan perbedaan nilai  <i> Throughput </i>  saat <i>Download</i>  dan <i> Upload</i>.
                                Nilai <i> Throughput </i> saat <i> Upload</i>, biasanya akan lebih kecil daripada saat <i>Download</i> .
                            </p>
                        </div>
                    </div>
                    {/* pengaruh */}
                    <div className='my-4'>
                        <h5 id='pengaruh-throughput-bandwidth' className='text-xl font-bold mt-2 mb-5'>Pengaruh <i>Throughput</i> dan <i>Bandwidth</i></h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Nilai <i>Throughput</i> dan <i>Bandwidth</i> tentu akan mempengaruhi aktivitas Anda di Internet, seperti <i>browsing</i>, <i>streaming</i>, dan <i>gaming</i>.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            <i>Bandwidth</i> yang besar memungkinkan anda untuk melakukan banyak aktivitas di internet secara bersamaan, seperti <i>browsing</i> sambil <i>streaming</i> video.
                            <i> Bandwidth</i> yang besar juga mendukung akses internet yang dilakukan oleh banyak perangkat.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            <i>Throughput</i> yang besar akan membuat seluruh aktivitas anda di internet akan berjalan dengan lancar.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Jika nilai  <i> Bandwidth</i> kecil, terdapat kemungkinan terjadi kemacetan dalam transfer data.
                            Hal ini juga akan berpengaruh terhadap nilai  <i>Throughput</i>, nilainya akan menjadi kecil.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Gejala-gejala yang timbul adalah sebagai berikut.
                        </p>
                        <ul className="list-disc mx-7 mb-6 text-gray-700">
                            <li className='mb-2'>
                                Lambat dalam memuat situs <i>web</i>, <i>game</i>, dan atau aplikasi <i>online</i>.
                            </li>
                            <li className='mb-2'>
                                Lambat dalam mengunduh dan mengunggah file.
                            </li>
                            <li className='mb-2'>
                                Lambat dalam memuat <i>streaming</i> video/audio (<i>buffering</i>).
                            </li>

                        </ul>

                    </div>
                    {/* dafpus */}
                    <div className='my-4'>
                        <h5 id='' className='text-xl font-bold mt-2 mb-5'>Daftar Pustaka</h5>
                        <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                            [1]  Apriadi, et al.
                            <a href="https://perpustakaan.ft.unram.ac.id/index.php?p=show_detail&id=7485"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:underline"
                            > <i>Analisis QoS (Quality of Service) Jaringan Internet Kampus (Studi Kasus : Fakultas Teknik Universitas Mataram)</i>
                            </a>
                            . Jurnal Fakultas Teknik: Universitas Mataram (2017).
                        </p>

                    </div>

                    <footer
                        className="container mt-8 p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
                    >
                        <span
                            className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                        >© 2022 <a href="localhost:3000" className="hover:underline">MONIQQ</a>. All Rights
                            Reserved.
                        </span>
                    </footer>

                </div>
                {/* sidebar  */}
                <aside className='w-1/4 flex flex-col'>
                    <div className='sticky top-14 px-5'>
                        <div className='px-4 flex-col hidden max-h-[calc(100vh-9rem-15px)] overflow-auto lg:block border-l-2 border-blue-50 '>
                            <div>
                                <h6 className='mb-3 text-gray-900 dark:text-gray-100 font-semibold text-lg'>Daftar Isi</h6>
                                <a href='/belajarqos/throughput/#apa-itu-throughput'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Apa itu Throughput?
                                </a>
                                <a href='/belajarqos/throughput/#apa-itu-bandwidth'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Apa itu Bandwidth?
                                </a>
                                <a href='/belajarqos/throughput/#arti-throughput-bandwidth'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Arti Bandwidth & Throughput
                                </a>

                                {/* kesalahpahaman */}
                                <div>
                                    <a href='/belajarqos/throughput/#kesalahpahaman'
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Kesalahpahaman
                                    </a>
                                    <div>
                                        <a href='/belajarqos/throughput/#kesalahpahaman-tb'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > Throughput vs Bandwidth
                                        </a>
                                        <a href='/belajarqos/throughput/#nilai-throughput-nonteknis-asimetris'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > Bit vs Byte
                                        </a>
                                    </div>
                                </div>
                                <a href='/belajarqos/throughput/#kesalahpahaman-bb'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Illustrasi
                                </a>
                                <div>
                                    <a href='/belajarqos/throughput/#analogi-throughput-bandwidth'
                                        className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Analogi
                                    </a>
                                    <a href='/belajarqos/throughput/#contoh-throughput-bandwidth'
                                        className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Contoh
                                    </a>
                                </div>
                                {/* nilai */}
                                <div>
                                    <a href='/belajarqos/throughput/#nilai-throughput'
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    >Nilai Throughput
                                    </a>
                                    <div>
                                        <a href='/belajarqos/throughput/#nilai-throughput-standar'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > Standar
                                        </a>
                                        <a href='/belajarqos/throughput/#nilai-throughput-carahitung'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > Cara Hitung
                                        </a>

                                    </div>
                                </div>
                                {/* nonteknis */}
                                <div>
                                    <a href='/belajarqos/throughput/#nilai-throughput-nonteknis'
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Faktor Non-Teknis
                                    </a>
                                    <div>
                                        <a href='/belajarqos/throughput/#nilai-throughput-nonteknis-fup'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > FUP
                                        </a>
                                        <a href='/belajarqos/throughput/#nilai-throughput-nonteknis-asimetris'
                                            className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                        > Asimetris
                                        </a>
                                    </div>
                                </div>
                                <a href='/belajarqos/throughput/#pengaruh-throughput-bandwidth'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Pengaruh Throughput & Bandwidth
                                </a>
                            </div>
                            {/* parameter lain */}
                            <div>
                                <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Parameter Lain</h6>
                                <Link to='/belajarqos/delay'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Delay/Latency
                                    </div>
                                </Link>
                                <Link to='/belajarqos/jitter'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Jitter
                                    </div>
                                </Link>
                                <Link to='/belajarqos/packetloss'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Packet Loss
                                    </div>
                                </Link>
                            </div>
                            {/* pengukuran */}
                            <div>
                                <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Pengukuran</h6>
                                <Link to='/pengukuran'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Quality of Service
                                    </div>
                                </Link>
                                <Link to='/pengukuran'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Quality of Experience
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                </aside>
            </div>

        </div >
    )
}

export default BelajarThroughput