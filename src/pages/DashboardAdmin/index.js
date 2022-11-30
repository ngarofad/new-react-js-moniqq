import React, { useState, useEffect, useRef } from 'react'
import { logoMoniqq } from '../../assets';
import { Accordion, Table } from 'flowbite-react';
import { Line } from 'react-chartjs-2';
import { authApi, qosApi } from '../../api';
import { useNavigate } from 'react-router-dom';
//import { ClipLoader } from 'react-spinners'
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import {SuccessModal, UploadErrorModal, ErrorForbiddenModal} from './components/QosModal'
//import QosModal from '../../pages/DashboardAdmin/components/QosModal'

Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const DashboardAdmin = () => {
    // untuk ubah title
    useEffect(() => {
        document.title = "MONIQQ - Dashboard Admin";
        startOnMount()
    }, []);
    const [openSidebars, setOpenSidebars] = useState(false);

    const navigate = useNavigate()
    //const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showUploadErrorModal, setShowUploadErrorModal] = useState(false)
    const [showErrorForbiddenModal, setShowErrorForbiddenModal] = useState(false)
    const [msg, setMsg] = useState("")
    const [qosList, setQosList] = useState([]);
    const [detailQos, setDetailQos] = useState({});
    const [noListQos, setNoListQos] = useState(true)
    const [recapQCustomerPQParam, setRecapQCustomerPQParam] = useState([])
    const [customerName, setCustomerName] = useState("")
    const [provider, setProvider] = useState("")
    const [service, setService] = useState("")
    const [location, setLocation] = useState("")
    const [fileThroughput, setFileThroughput] = useState("")
    const fileThroughputRef = useRef(null)
    const [filePacketLoss, setFilePacketLoss] = useState(null)
    const filePacketLossRef = useRef(null)
    const [fileDelay, setFileDelay] = useState(null)
    const fileDelayRef = useRef(null)
    const [fileJitter, setFileJitter] = useState(null)
    const fileJitterRef = useRef(null)

    const columnDataset = [
        { accessor: 'date_time', label: 'Datetime' },
        { accessor: 'value', label: 'Nilai' },
    ]
    const columnQosList = [
        { accessor: 'upload_date', label: 'Tgl Upload' },
        { accessor: 'customer_name', label: 'Nama' },
        { accessor: 'isp', label: 'Provider' },
        { accessor: 'city', label: 'Lokasi' },
        { accessor: 'service', label: 'Jenis Produk' },
        { accessor: 'aksi', label: 'Aksi' },
    ]

    function formatDate(date) {
        const date1 = new Date(date)
        const sd = date1.toLocaleString('id-ID')
        
        return sd
    }

    const startOnMount = async () => {
        try {
            //setLoading(true)
            const response = await authApi.whoami()
            console.log(response.data)
            if (response.data.role === "admin") {
                fetchQosList()
            } else {
                setShowErrorForbiddenModal(true)
            }
        } catch (err) {
            console.log("ERROR")
            setShowErrorForbiddenModal(true)
            //return navigate("/login")
        }
        //setLoading(false)
    }

    const fetchQosList = async () => {
        try {
            //setLoading(true)
            const { data } = await qosApi.adminGetAllQosList()
            console.log(data)
            if (data !== null) {
                setQosList(data)
                setNoListQos(false)
            } else if (data === null) {
                setNoListQos(true)
                setQosList([])
            }
        } catch (err) {
            console.log(err.response.data)
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
    }

    const handleDeleteBtn = async (id) => {
        try {
            const response = await qosApi.adminDeleteQos({ id })
            console.log(response.data)
            fetchQosList()
        } catch (err) {
            console.log(err.response.data)
            if (err.response.status === 403) {
                setShowErrorForbiddenModal(true)
            }
        }
    }

    const handleDetailBtn = async (id) => {
        console.log(id)
        try {
            const response = await qosApi.adminGetRecapQosCustomer({ id })
            console.log(response.data)
            setDetailQos(response.data)
            setRecapQCustomerPQParam(response.data.recap_qcustomer_per_qparam)
        } catch (err) {
            console.log(err.response.data)
            if (err.response.status === 403) {
                setShowErrorForbiddenModal(true)
            }
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        let formData = new FormData()

        formData.append('name', customerName)
        formData.append('isp', provider)
        formData.append('service', service)
        formData.append('city', location)
        formData.append('throughput', fileThroughput)
        formData.append('packet loss', filePacketLoss)
        formData.append('delay', fileDelay)
        formData.append('jitter', fileJitter)

        try{
            const response = await qosApi.adminUploadQos({ formData })
            console.log(response.data)
            setMsg('Sukses mengunggah data QoS milik ' + customerName)
            fetchQosList()
            setCustomerName('')
            setProvider('')
            setLocation('')
            setService('')
            setFileThroughput(null)
            setFilePacketLoss(null)
            setFileDelay(null)
            setFileJitter(null)
            fileThroughputRef.current.value = null
            filePacketLossRef.current.value = null
            fileDelayRef.current.value = null
            fileJitterRef.current.value = null
            setShowSuccessModal(true)
        } catch (err) {
            console.log(err.response.data)
            if (err.response.status === 403) {
                setShowErrorForbiddenModal(true)
            } else {
                setMsg("Terdapat data yang tidak valid. Coba cek kembali file-file yang akan diunggah")
                setShowUploadErrorModal(true)
            }
        }
    }

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
                        <img className="h-6" src={logoMoniqq} alt="" />
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
                                <span className="ml-3">Quality of Service</span>
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

            <div className="relative z-0 lg:flex-grow">
                <div className="flex flex-col gap-20">
                    {/* navbar */}
                    <header className="flex bg-blue-800 items-center px-3 h-16">
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
                        <span className="block text-2xl font-semibold text-white p-4"
                        >Dashboard</span>
                    </header>

                    {/* isine */}
                    <section className="mb-20 container">
                        {/* judul */}
                        <div
                            className="mx-auto text-left md:max-w-screen-lg lg:max-w-screen-lg"
                        >
                            <div className="flex p-3 mb-10">
                                <span className="font-semibold text-4xl ">
                                    Quality of Service
                                </span>
                            </div>
                        </div>
                        <div className='border w-full mb-14'></div>
                        {/* input data */}
                        <div className='px-3 py-5 text-xl font-semibold'>Tambah Data Pengukuran Quality Of Service</div>
                        <form onSubmit={handleUpload}>
                            <div className="flex flex-wrap mx-3 px-3 py-5 border rounded-lg">
                                <div className="flex flex-col gap-10 w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0 ">
                                    {/* pengguna */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Nama Pelanggan</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            placeholder='Nama pelanggan ISP...'
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                            autoComplete="off"
                                        />
                                    </div>

                                    {/* ISP */}
                                    <div>
                                        <label
                                            htmlFor="isp"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Penyedia Jasa Internet</label
                                        >
                                        <select
                                            id="isp"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            value={provider}
                                            onChange={(e) => setProvider(e.target.value)}
                                        >
                                            <option value="" disabled hidden>Pilih ISP</option>
                                            <option value="pt_l">LifeMedia</option>
                                            <option value="pt_i">IndiHome</option>
                                        </select>
                                    </div>
                                    {/* Jenis Produk*/}
                                    <div>
                                        <label
                                            htmlFor="jenis"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Jenis Produk</label>
                                        <select
                                            id="jenisproduk"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            value={service}
                                            onChange={(e) => setService(e.target.value)}
                                        >
                                            <option value="" disabled hidden>Pilih Jenis Produk</option>
                                            <option value={"Internet 10Mbps"}>Internet 10Mbps</option>
                                            <option value={"Internet 20Mbps"}>Internet 20Mbps</option>
                                            <option value={"Internet 30Mbps"}>Internet 30Mbps</option>
                                            <option value={"Internet 50Mbps"}>Internet 50Mbps</option>
                                            <option value={"Internet 100Mbps"}>Internet 100Mbps</option>
                                        </select>
                                    </div>
                                    {/* Lokasi */}
                                    <div>
                                        <label
                                            htmlFor="lokasi"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Lokasi</label
                                        >
                                        <select
                                            id="lokasi"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        >
                                            <option value="" disabled hidden>Pilih Kota</option>
                                            <option value={"Yogyakarta"}>Yogyakarta</option>
                                            <option value={"Sleman"}>Sleman</option>
                                            <option value={"Semarang"}>Semarang</option>
                                        </select>
                                    </div>

                                </div>
                                <div className=" flex flex-col gap-4 w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* file throughput */}
                                    <div>
                                        <label
                                            htmlFor="filethroughput"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Throughput</label
                                        >
                                        <input
                                            type="file"
                                            id="filethroughput"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={fileThroughputRef}
                                            onChange={(e) => setFileThroughput(e.target.files[0])}
                                            onClick={() => setFileThroughput(null)}
                                            required
                                        />
                                    </div>
                                    {/* file delay */}
                                    <div>
                                        <label
                                            htmlFor="filedelay"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Delay</label
                                        >
                                        <input
                                            type="file"
                                            id="filedelay"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={fileDelayRef}
                                            onChange={(e) => setFileDelay(e.target.files[0])}
                                            onClick={() => setFileDelay(null)}
                                            required
                                        />
                                    </div>
                                    {/* file jitter */}
                                    <div>
                                        <label
                                            htmlFor="filejitter"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Jitter</label
                                        >
                                        <input
                                            type="file"
                                            id="filejitter"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={fileJitterRef}
                                            onChange={(e) => setFileJitter(e.target.files[0])}
                                            onClick={() => setFileJitter(null)}
                                            required
                                        />
                                    </div>
                                    {/* file packet loss */}
                                    <div>
                                        <label
                                            htmlFor="filepacketloss"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Packet Loss</label
                                        >
                                        <input
                                            type="file"
                                            id="filepacketloss"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={filePacketLossRef}
                                            onChange={(e) => setFilePacketLoss(e.target.files[0])}
                                            onClick={() => setFilePacketLoss(null)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full p-3 my-2 md:mb-0">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Unggah
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/*  */}
                        <div className='border w-full my-14'></div>
                        {/* tabel data semua*/}
                        <div className='px-3 py-5 text-xl font-semibold mt-6'>Daftar Pengukuran Quality Of Service</div>
                        <div className="overflow-y-scroll h-96 w-full p-5 px-3 mb-6 md:mb-0">
                            <Table >
                                <Table.Head>
                                    <Table.HeadCell>
                                        Tanggal Upload
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Nama
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Provider
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Lokasi
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Jenis Produk
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Aksi
                                    </Table.HeadCell>

                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {
                                        noListQos ?

                                            <Table.Row>
                                                <Table.Cell>-</Table.Cell>
                                                <Table.Cell>-</Table.Cell>
                                                <Table.Cell>-</Table.Cell>
                                                <Table.Cell>-</Table.Cell>
                                                <Table.Cell>-</Table.Cell>
                                                <Table.Cell>-</Table.Cell>
                                            </Table.Row>

                                            :

                                            qosList.map((row) => {
                                                return (
                                                    <Table.Row key={row._id} className={"bg-white dark:border-gray-700 dark:bg-gray-800"}>
                                                        {
                                                            columnQosList.map((column) => {
                                                                if (column.accessor === 'upload_date') {
                                                                    return (
                                                                        <Table.Cell key={column.accessor}>
                                                                            {formatDate(row.upload_date)}

                                                                        </Table.Cell>
                                                                    )
                                                                } else if (column.accessor !== 'aksi' && column.accessor !== 'upload_date') {
                                                                    return (
                                                                        <Table.Cell key={column.accessor}>{row[column.accessor]}</Table.Cell>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <Table.Cell key={column.accessor} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                            <div className='flex gap-6'>
                                                                                <div>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                                        onClick={() => handleDetailBtn(row._id)}
                                                                                    >
                                                                                        Detail
                                                                                    </button>
                                                                                </div>
                                                                                <div>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                                                        onClick={() => handleDeleteBtn(row._id)}
                                                                                    >
                                                                                        Hapus
                                                                                    </button>

                                                                                </div>
                                                                            </div>
                                                                        </Table.Cell>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </Table.Row>
                                                )
                                            })
                                    }
                                </Table.Body>
                            </Table>
                        </div>
                        {/*  */}
                        <div className='border w-full my-14'></div>
                        {/* tabel detail */}
                        <div className='px-3 py-5 text-xl font-semibold mt-6'>Detail Data Pengukuran Quality Of Service</div>
                        {/* identitas */}
                        {/* <div className='px-3 py-3 text-lg font-medium '>Identitas</div> */}
                        <div className=''>
                            <div className="w-full p-5 px-3 mb-6 md:mb-0">
                                <Table >
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Nama
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Provider
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Lokasi
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Jenis Produk
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Rata-rata Indeks
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Kategori
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row
                                            key={detailQos._id}
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.customer_name}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.isp}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.city}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.service}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.average_index_rating}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {detailQos.category}
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                            <div className='px-3'>
                                <Accordion alwaysOpen={true}>
                                    {
                                        recapQCustomerPQParam.map((recapQParam, index) => {
                                            const datasetline = {
                                                labels: recapQParam.dataset.map((d) => formatDate(d.date_time)),
                                                datasets: [
                                                    {
                                                        label:
                                                            `${recapQParam.qos_parameter.charAt(0).toUpperCase()}${recapQParam.qos_parameter.slice(1)}  (${recapQParam.unit})`,
                                                        data: recapQParam.dataset.map((d) => d.value),
                                                        fill: false,
                                                        backgroundColor: 'rgba(5, 99, 132, 0.8)',
                                                        borderColor: 'rgba(5, 99, 132, 0.8)',
                                                    }
                                                ]
                                            };

                                            return (
                                                <Accordion.Panel key={index}>
                                                    <Accordion.Title className='text-2xl'>
                                                        <p className='capitalize'>{recapQParam.qos_parameter}</p>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <div>
                                                            <div className="w-full p-5 px-3 md:mb-0">
                                                                <div className='border h-96 p-4 mb-2 rounded-lg flex  w-full items-center justify-center'>
                                                                    <Line data={datasetline}
                                                                        options={
                                                                            {
                                                                                maintainAspectRatio: false,
                                                                                scales: {
                                                                                    y: { beginAtZero: true, title: { display: true, text: 'Nilai', } },
                                                                                    x: { title: { display: true, text: 'Waktu', } }
                                                                                }
                                                                            }
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="flex flex-wrap mx-0 mb-2">
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Rata-rata
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.average_value.toFixed(3)} {recapQParam.unit}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Indeks Penilaian
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.index_rating}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Kategori
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.category}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-wrap mx-0 mb-2">
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Std Deviasi
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.std_deviation}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Minimal
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.min_value} {recapQParam.unit}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                                                        <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                                                            <div className='flex text-base'>
                                                                                Maximal
                                                                            </div>
                                                                            <div className='flex text-lg font-bold'>
                                                                                {recapQParam.max_value} {recapQParam.unit}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='overflow-y-scroll h-48 border rounded-lg'>
                                                                    <Table >
                                                                        <Table.Head>
                                                                            <Table.HeadCell>
                                                                                Datetime
                                                                            </Table.HeadCell>
                                                                            <Table.HeadCell>
                                                                                Nilai
                                                                            </Table.HeadCell>

                                                                        </Table.Head>
                                                                        <Table.Body>
                                                                            {
                                                                                recapQParam.dataset.map((d, index) => {
                                                                                    return (
                                                                                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                                            {
                                                                                                columnDataset.map((column) => {
                                                                                                    if (column.accessor === 'date_time') {
                                                                                                        return (
                                                                                                            <Table.Cell key={column.accessor} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                                                                {formatDate(d.date_time)}
                                                                                                            </Table.Cell>
                                                                                                        )
                                                                                                    } else {
                                                                                                        return (
                                                                                                            <Table.Cell key={column.accessor} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                                                                {d[column.accessor]}
                                                                                                            </Table.Cell>
                                                                                                        )
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        </Table.Row>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Table.Body>
                                                                    </Table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Content>
                                                </Accordion.Panel>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
            {/* modal */}
            { showSuccessModal && <SuccessModal setShowModal={setShowSuccessModal} msg={msg}/>}
            { showUploadErrorModal && <UploadErrorModal setShowModal={setShowUploadErrorModal} msg={msg}/>}
            { showErrorForbiddenModal && <ErrorForbiddenModal setShowModal={setShowErrorForbiddenModal}/>}
        </div>
    )
}

export default DashboardAdmin